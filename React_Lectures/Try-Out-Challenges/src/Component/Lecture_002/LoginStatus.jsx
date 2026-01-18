import { useState } from "react";
import Button from "../Button";

export default function LoginState() {
    const [isLogged, setIsLog] = useState(false);
    return (
        <div>
            <h2>{isLogged ? "Welcome, User" : "Please Login"}</h2>
            <Button action={() => setIsLog(log => !log)}>{isLogged ? "Logout" : "Login"}</Button>
        </div>
    );
}