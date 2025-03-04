import { useState } from "react";
import "./registration.css";

export const LoginForm = () => {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const loginData = {
            userName,
            userPassword
        };
        console.log(loginData, "1111111111");
    };

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit} className="form" autoComplete="off">
                <h1>Login</h1>
                <p>Please enter your credentials to log in.</p>

                <div className="form-group">
                <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        autoComplete="off"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password"><b>Password</b></label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        required
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}                    />
                </div>

                <button type="submit" className="submit-btn">Login</button>
            </form>
        </div>
    );
};