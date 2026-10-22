import { useState } from "react";
import { useUser } from "../context/userContext";
import { useRef } from "react";

function Settings() {
    const { userName, setUserName, avatar, setAvatar } = useUser();

    const [error, setError] = useState('');
    const fileInputRef = useRef();

    function handleAvatarChange(event) {
        const file = event.target.files[0];
        if (!file) { return; }
        if (!file.type.startsWith('image/')) {
            setError("Выберите файл изображения!");
            event.target.value = "";
            return;
        }
        if (!file.size > 1024 * 1024) {
            setError("Размер изображения не должен превышать 1мб!");
            event.target.value = "";
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setAvatar(reader.result);
            setError("");
        };
        reader.onerror = () => {
            setError("Не удалось прочитать изображение");
        }
        reader.readAsDataURL(file);
    }

    function removeAvatar() {
        setAvatar("");
        setError("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }

    return (
        <section className="page">
            <h1>Настройки</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio velit officiis quibusdam aspernatur? Enim, quam consectetur! Maiores explicabo facilis obcaecati consequuntur eum fugiat praesentium illum sapiente. Maxime, officia magnam.</p>

            <div className="settings-avatar">
                {avatar ? (
                    <img src={avatar} alt="Аватар" className="avatar-preview" />
                ) : (
                    <div className="avatar-placeholder">
                        {userName.charAt[0].toUpperCase() || "?"}
                    </div>
                )}
                <div className="avatar-controls">
                    <h2>Фото профиля</h2>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                    />
                    <p>Изображение до 1мб</p>
                    {avatar && (
                        <button type="button" onClick={removeAvatar}>
                            Удалить фотографию
                        </button>
                    )}
                </div>
            </div>

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