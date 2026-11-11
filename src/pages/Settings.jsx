import { useRef, useState } from "react";
// import { useUser } from "../context/UserContext";
import useUserProfile from "../hooks/useUserProfile";

function Settings() {
    const {
        userName,
        updateName,
        avatar,
        setAvatar, 
        removeAvatar
    } = useUserProfile();

    const [error, setError] = useState("");
    const fileInputRef = useRef(null);

    function handleAvatarChange(event) {
        const file = event.target.files[0];

        if (!file) {
            return;
        }

        if (!file.type.startsWith("image/")) {
            setError("Выберите файл изображения");
            event.target.value = "";
            return;
        }

        if (file.size > 1024 * 1024) {
            setError("Размер изображения не должен превышать 1 МБ");
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
        };

        reader.readAsDataURL(file);
    }

    return (
        <section className="settings-page">
            <h1>Настройки профиля</h1>

            <div className="settings-avatar">
                {avatar ? (
                    <img
                        src={avatar}
                        alt="Аватар пользователя"
                        className="avatar-preview"
                    />
                ) : (
                    <div className="avatar-placeholder">
                        {userName.charAt(0).toUpperCase() || "?"}
                    </div>
                )}

                <div className="avatar-controls">
                    <h2>Фотография профиля</h2>

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                    />

                    <p>Изображение до 1 МБ</p>

                    {avatar && (
                        <button
                            type="button"
                            onClick={removeAvatar}
                        >
                            Удалить фотографию
                        </button>
                    )}
                </div>
            </div>

            {error && (
                <p className="form-error">{error}</p>
            )}

            <div className="settings-field">
                <label htmlFor="userName">
                    Имя пользователя
                </label>

                <input
                    id="userName"
                    type="text"
                    value={userName}
                    onChange={(event) =>
                        updateName(event.target.value)
                    }
                />
            </div>
        </section>
    );
}

export default Settings;