import { useState } from "react";
import "./registration.css";

export const Registration = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        user_email: '',
        user_password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit} className="form" autoComplete="off">
                <h1>Sign Up</h1>
                <p>Please fill this form to create an account.</p>

                <div className="form-group">
                    <label htmlFor="firstName"><b>First Name</b></label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        required
                        value={user.firstName}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName"><b>Last Name</b></label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        required
                        value={user.lastName}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email"><b>Email</b></label>
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Enter Email"
                        required
                        value={user.user_email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password"><b>Password</b></label>
                    <input
                        type="password"
                        name="user_password"
                        placeholder="Enter Password"
                        required
                        value={user.user_password}
                        onChange={handleInputChange}
                    />
                </div>

                <p>
                    By creating an account, you agree to our
                    <a href="#" style={{ color: 'dodgerblue' }}>
                        Terms & Privacy
                    </a>
                </p>

                <button type="submit" className="submit-btn">Sign Up</button>
            </form>

            <section className="summary">
                <p>
                    Hello, my name is <span>{user.firstName} {user.lastName}</span>.
                    My email address is <span>{user.user_email}</span>.
                </p>
            </section>
        </div>
    );
};
