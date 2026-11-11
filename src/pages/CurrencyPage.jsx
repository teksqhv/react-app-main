import { useEffect, useState } from "react";

function CurrencyPage() {

    const [currencies, setCurrencies] = useState([]);
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getCurrencies() {
            try {
                const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
                if (!response.ok) {
                    throw new Error("Ошибка получения курса валют");
                }
                const data = await response.json();
                const codes = ["USD", "EUR", "GBP", "CNY"];
                const result = codes.map((code) => {
                    const currency = data.Valute[code];
                    return {
                        code: currency.CharCode,
                        name: currency.Name,
                        value: currency.Value / currency.Nominal,
                        previous: currency.Previous / currency.Nominal,
                    };
                });
                setCurrencies(result);
                setDate(data.Date);
            } catch (err) {
                setError("Не удалось загрузить курсы валют");
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        getCurrencies();
    }, []);

    return (
        <section className="currency">
            <h2>Курсы валют ЦБ РФ</h2>
            {loading && <p>Загрузка курсов валют...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <>
                    <p>Дата обновления:
                        {new Date(date).toLocaleDateString('ru-RU')}
                    </p>
                    <div className="currency-list">
                        {currencies.map((currency) => {
                            const difference = currency.value - currency.previous;
                            return (
                                <div className="currency-item">
                                    <div>
                                        <h3>{currency.code}</h3>
                                        <p>{currency.name}</p>
                                    </div>
                                    <div>
                                        <strong>{currency.value.toFixed(2)}Руб</strong>
                                        <p>{difference > 0 ? "+" : difference < 0 ? "-" : "—"}
                                            {" "}
                                            {Math.abs(difference).toFixed(4)} Руб
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
        </section>
    );
}

export default CurrencyPage;