import React from "react";
import './User.css';

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            userInfo : {
                name: "Dummy",
                location: "Default",
                avatar_url: "https://dummyimage.com/300/09f/fff.png"
            }
        };
    }

    async componentDidMount() {
        //API call
        const data = await fetch("https://api.github.com/users/aravindashokk");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    render() {
        const {name,location,avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} alt="img"/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: aravindashokk</h4>
            </div>
        )
    }
};

export default UserClass;