import React from 'react';
// import User from './User';
import UserClass from './UserClass';

const About = () => {
    return (
        <div>
        <h1>About</h1>
        <h2>Food delivery app</h2>
        {/* <User name={"Aravind (function)"}/> */}

        <UserClass name={"Aravind (class)"} location={"Dallas (class)"} />
        </div>
    )
}

export default About;