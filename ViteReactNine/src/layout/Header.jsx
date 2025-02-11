import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="bg-amber-300 w-dvw h-10 flex flex-row justify-evenly items-center">
            <Link to="/" className="bg-red-400 p-1">
                Home
            </Link>
            <Link to="/about" className="bg-blue-400 p-1">
                About page
            </Link>
            <Link to="/profile" className="bg-purple-400 p-1">
                Profile page
            </Link>
        </header>
    );
}
