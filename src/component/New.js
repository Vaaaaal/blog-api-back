import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const New = () => {
    let history = useHistory();
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    console.log(title);

    const handleText = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/posts/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: title, text: text }),
        });
        const data = await response.json();
        console.log(data);

        history.push("/posts");
    };

    return (
        <div>
            <h1>Ecrire un post</h1>

            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
                onSubmit={handleSubmit}
            >
                <label
                    style={{ fontWeight: 300, marginBottom: 5 }}
                    htmlFor="title"
                >
                    Titre de l'article
                </label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Nouvel article concernant.."
                    style={{
                        width: 500,
                        marginBottom: 15,
                    }}
                    value={title}
                    onChange={handleTitle}
                />

                <label
                    style={{ fontWeight: 300, marginBottom: 5 }}
                    htmlFor="text"
                >
                    Corps de l'article
                </label>
                <textarea
                    id="text"
                    name="text"
                    style={{
                        width: 500,
                        height: 250,
                        marginBottom: 15,
                    }}
                    value={text}
                    onChange={handleText}
                ></textarea>

                <button
                    style={{
                        width: 500,
                        marginTop: 15,
                    }}
                    type="submit"
                >
                    Enregistrer
                </button>
            </form>
        </div>
    );
};

export default New;
