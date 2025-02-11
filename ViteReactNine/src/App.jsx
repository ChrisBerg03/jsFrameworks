import "./App.css";
import { Layout } from "./layout/index.jsx";
import { Card } from "./components/Card.jsx";

function App() {
    return (
        <>
            <Card bgColor={"red"} title={"First card"}>
                <p>content for card</p>
            </Card>
        </>
    );
}

export default App;
