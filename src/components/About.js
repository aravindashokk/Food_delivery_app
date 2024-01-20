import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about-us">
                <h2>Welcome to Feasty - Your Culinary Companion</h2>

                <p>
                    At Feasty, we believe in the transformative power of food. Food has the incredible ability
                    to bring people together, create unforgettable moments, and add flavor to life's journey.
                    That's why we created Feasty – a food delivery app that goes beyond just delivering meals;
                    it brings the joy of exceptional dining experiences right to your doorstep.
                </p>

                {/* Our Story section */}
                <div className="our-story">
                    <h3>Our Story</h3>
                    <p>
                        Feasty started with a simple idea: to make delicious, high-quality meals accessible to everyone,
                        anytime, anywhere. We understand the hustle and bustle of modern life, and sometimes, there's just
                        not enough time to cook a gourmet meal. That's where Feasty comes in.
                    </p>
                    <p>
                        Founded by a passionate team of food enthusiasts, Feasty aims to redefine the way you experience
                        food delivery. We've collaborated with the finest local restaurants and chefs, curating a diverse
                        menu that caters to every palate. Whether you crave classic comfort food, exotic cuisines, or healthy
                        options, Feasty has something for everyone.
                    </p>
                </div>

                {/* What Sets Us Apart section */}
                <div className="sets-us-apart">
                    <h3>What Sets Us Apart</h3>
                    <ul>
                        <li><strong>Curated Selection:</strong> We handpick our partner restaurants to ensure that you have access to a diverse range of culinary delights. From trendy eateries to hidden gems, Feasty brings you the best in town.</li>
                        <li><strong>Fast and Reliable Delivery:</strong> We know that when hunger strikes, you want your food promptly. Our efficient delivery network ensures that your order reaches you hot and fresh, right on time.</li>
                        <li><strong>User-Friendly App:</strong> Navigating through Feasty is a breeze. Our user-friendly app lets you explore menus, customize orders, and track deliveries with ease. We value your time and want your experience to be seamless.</li>
                        <li><strong>Exceptional Customer Service:</strong> Your satisfaction is our priority. Our dedicated customer support team is always ready to assist you with any inquiries, ensuring that your Feasty experience is delightful from start to finish.</li>
                    </ul>
                </div>

                {/* Join the Feasty Family section */}
                <div className="join-feasty">
                    <h3>Join the Feasty Family</h3>
                    <p>
                        Whether you're a food connoisseur or just looking for a convenient way to enjoy a great meal,
                        Feasty invites you to join our ever-growing community. Download the app, explore the culinary wonders
                        available, and let Feasty be your culinary companion on your gastronomic journey.
                    </p>
                </div>

                {/* Feasty Slogan */}
                <p>Feasty - Savor the Flavor, Delivered to Your Doorstep!</p>
            </div>
        </div>
    )
}

export default About;