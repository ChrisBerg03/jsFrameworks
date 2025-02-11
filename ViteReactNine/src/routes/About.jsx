import { Outlet } from "react-router-dom";

export function About() {
    return (
        <>
            <h1>New about Page!!!</h1>
            <p>this is our new about route</p>
            <Outlet />
        </>
    );
}
