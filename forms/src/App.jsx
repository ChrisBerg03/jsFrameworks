import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        async function getData() {
            const url =
                "https://v2.api.noroff.dev/rainy-days/07a7655a-7927-421b-ba6a-b6742d5a75b8";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const data = await response.json();
                setTitle(data.data.title);
                setDescription(data.data.description);
                console.log(data);
            } catch (error) {
                console.error(error.message);
            }
        }
        getData();
    }, []);
    return (
        <>
            <h1>{title}</h1>
            <form action="" onSubmit={(e) => {}}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="title"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <label htmlFor="title">Description</label>
                <textarea
                    type="text"
                    id="description"
                    name="description"
                    placeholder="description"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default App;
