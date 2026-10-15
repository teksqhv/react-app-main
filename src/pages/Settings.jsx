import { useUser } from "../context/userContext";

function Settings(){
    const {userName, setUserName} = useUser();

    return(
        <section className="page">
            <h1>Настройки</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio velit officiis quibusdam aspernatur? Enim, quam consectetur! Maiores explicabo facilis obcaecati consequuntur eum fugiat praesentium illum sapiente. Maxime, officia magnam.</p>
            <label>
                Имя пользователя
                <input type="text"
                value={userName}
                onChange={(event) =>
                    setUserName(event.target.value)
                } />
            </label>
            <p>Установлено имя: {userName}</p>
        </section>
    );
}

export default Settings;