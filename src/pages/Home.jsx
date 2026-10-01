import Post from "../components/Post";

function Home() {
    const posts = [
        {
            id: 1,
            title: "text text text",
            text: "post post post",
            author: "Viktor"
        },
        {
            id: 2,
            title: "text 2 text 2 text 2",
            text: "post 2 post 2 post 2",
            author: "Viktor"
        },
        {
            id: 3,
            title: "text 3 text 3 text 3",
            text: "post 3 post 3 post 3",
            author: "Viktor"
        },

    ];

    return (
        <section>
            <h1>Главная</h1>
            <div className="feed">
                <h2>Лента</h2>
                {posts.map((post) => (
                    <Post key={post.id}
                        author={post.author}
                        title={post.title}
                        text={post.text}
                        id={post.id}
                    />
                ))}
            </div>
        </section>
    )
}

export default Home;