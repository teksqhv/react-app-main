import { useState } from "react";
import Post from "./Post";


function ProfileCard() {
    // const [posts, setPosts] = useState([
    //     {
    //         id: 1,
    //         title: "text text text",
    //         text: "post post post",
    //         author: "Viktor"
    //     },
    //     {
    //         id: 2,
    //         title: "text 2 text 2 text 2",
    //         text: "post 2 post 2 post 2",
    //         author: "Viktor"
    //     },
    //     {
    //         id: 3,
    //         title: "text 3 text 3 text 3",
    //         text: "post 3 post 3 post 3",
    //         author: "Viktor"
    //     },

    // ]);

    // const [title, setTitle] = useState("");
    // const [text, setText] = useState("");

    // function addPost(event) {
    //     event.preventDefault();

    //     const newPost = {
    //         id: Date.now(),
    //         title: title,
    //         text: text,
    //         author: "Katya"
    //     };

    //     setPosts([...posts, newPost]);
    //     setTitle("");
    //     setText("");
    // }

    // function deletePost(id) {
    //     setPosts(
    //         posts.filter((post) => post.id != id)
    //     );
    // }

    return (
        <section className="profile-card">
            <div className="profile">
                <div className="avatar">avatar</div>
                <div className="profile-info">
                    <h2>Name</h2>
                    <p>@nickname</p>
                </div>
                <p className="profile-discription">Студенточека</p>
            </div>

            {/* <form className="post-form" onSubmit={addPost}>
                <input type="text" placeholder="Заголовок" value={title} onChange={(event) => setTitle(event.target.value)} />
                <textarea placeholder="Текст поста" value={text} onChange={(event) => setText(event.target.value)}></textarea>
                <button type="submit">Опубликовать</button>

            </form>; */}

            {/* {
                posts.map((post) => (
                    <Post key={post.id}
                        author={post.author}
                        title={post.title}
                        text={post.text}
                        id={post.id}
                        onDelete={deletePost}
                    />
                ))
            } */}


            {/* <Post author="Viktor" title="Study React for frontend"  likes={17} text="какой-то осмысленный текст" /> */}
        </section >
    );
}

export default ProfileCard;