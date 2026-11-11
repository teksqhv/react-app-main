import { useUser } from "../context/userContext";

function useUserProfile() {
    const {
        userName,
        setUserName,
        avatar,
        setAvatar
    } = useUser();

    function updateName(newName) {
        setUserName(newName);
    }

    function removeAvatar() {
        setAvatar(null);
    }

    return {
        userName,
        avatar,
        updateName,
        setAvatar,
        removeAvatar
    }
}

export default useUserProfile;