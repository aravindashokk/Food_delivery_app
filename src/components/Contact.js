
const Contact = () => {
    return (
        <div>
            <div className="contact-us">
                <h2>Contact Us</h2>

                <p>
                    Have a question or feedback? We'd love to hear from you! Reach out to us using the contact
                    details below, and our dedicated team will get back to you as soon as possible.
                </p>

                {/* Contact Information */}
                <div className="contact-info">
                    <div>
                        <strong>Email:</strong> info@feastyapp.com
                    </div>
                    <div>
                        <strong>Phone:</strong> +1 (123) 456-7890
                    </div>
                    <div>
                        <strong>Address:</strong> 123 Foodie Street, Culinary City, CA 98765
                    </div>
                </div>

                {/* Contact Form (if applicable) */}
                <div className="contact-form">
                    <h3>Send us a Message</h3>
                    {/* Include your contact form components or logic here */}
                    {/* For simplicity, you can add a basic form with fields like name, email, message */}
                    <form>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4"></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
