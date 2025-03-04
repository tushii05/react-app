import { useState } from "react";
import "./registration.css"; // Reuse the same CSS file

export const ContactUs = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Contact Data:", contact);
    };

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit} className="form" autoComplete="off">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you!</p>

                <div className="form-group">
                    <label htmlFor="name"><b>Name</b></label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        required
                        value={contact.name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email"><b>Email</b></label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        required
                        value={contact.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message"><b>Message</b></label>
                    <textarea
                        name="message"
                        placeholder="Enter Your Message"
                        required
                        value={contact.message}
                        onChange={handleInputChange}
                        rows="4"
                    />
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    );
};