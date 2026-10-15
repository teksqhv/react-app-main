import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

const PostContext = createContext();

export function PostProvider({children}) {
    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem("posts");
        if (savedPosts) {
            return JSON.parse(savedPosts)
        }
        return [
            {
                id: 1,
                title: "Полезное что то там",
                text: "Вам очень интересно читать этот пост сиксевен сиксевен",
                author: "SixSeven",
            },
        ];
    });

    useEffect(() => {
        localStorage.setItem(
            "posts",
            JSON.stringify(posts)
        );
    }, [posts]);

    return (
        <PostContext.Provider value={{posts, setPosts }}>
            {children}
        </PostContext.Provider>
    );
}

export function usePosts() {
    return useContext(PostContext)
}