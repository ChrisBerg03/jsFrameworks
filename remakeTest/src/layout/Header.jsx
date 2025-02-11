import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="profile">Profile</Link>
        </header>
    );
}
