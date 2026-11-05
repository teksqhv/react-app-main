import {useState} from "react";

function Weather(){
    const [city, setCity] = useState("");
    const [westher, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function getWeather(event) {
        event.preventDefault();
        if(!city.trim()) return;

        setLoading(true);
        setError("");
        setWeather(null);

        try{
            const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json`);
            const data = await response.json();

            if(!data.results?.length){
                throw new Error("Город не найден");
            }

            const place = data.results[0];
            const responseWeather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`);
            const result = await responseWeather.json();

            setWeather({
                city: place.name,
                temperature: result.current.temperature_2m,
                humodity: result.surrent.relative_humidity_2m,
                wind: result.current.wind_speed_10m,
            });

        } catch (err){
            setError(err.message || "Не удалось загрузить погоду")
        } finally{
            setLoading(false);
        }
    }


    return (
        <section className="weather">
            <h2>Погода</h2>

            <form action="">
                <input placeholder="Введите город" />
                <button>Узнать погоду</button>
            </form>

            <div>
                <h3>Город</h3>
                <p>Температура:</p>
                <p>Влажность:</p>
                <p>Ветер:</p>
            </div>
        </section>
    );
}

export default Weather;