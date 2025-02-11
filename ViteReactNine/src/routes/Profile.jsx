import { Outlet } from "react-router-dom";

export function Profile() {
    return (
        <>
            <h1 className="bg-purple-300">profile Page!!!</h1>
            <Outlet />
        </>
    );
}
