import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const List = () => {
    let history = useHistory();
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleDelete = async (id) => {
        const response = await fetch("http://localhost:5000/posts/" + id, {
            method: "DELETE",
        });
        const data = await response.json();

        history.go();
    };

    useEffect(() => {
        fetch("http://localhost:5000/posts/all")
            .then((res) => res.json())
            .then(
                (posts) => {
                    setIsLoaded(true);
                    setItems(posts);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Erreur: erreur lors du chargement des données..</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else if (!items.length > 0) {
        return (
            <div>
                <h1>Liste des posts</h1>
                <p>Il n'y a pas d'articles enregistré pour le moment.</p>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Liste des posts</h1>
                <ul>
                    {items.map((item) => (
                        <li key={item._id}>
                            <p
                                style={{
                                    margin: 0,
                                    padding: 0,
                                }}
                            >
                                {item.title}
                            </p>
                            <div
                                style={{
                                    margin: 0,
                                    marginBottom: 20,
                                    padding: 0,
                                }}
                            >
                                {/* <button
                                    style={{
                                        marginRight: 10,
                                    }}
                                >
                                    Modifier l'article
                                </button> */}
                                <button onClick={() => handleDelete(item._id)}>
                                    Supprimer l'article
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default List;
