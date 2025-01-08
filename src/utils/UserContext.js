import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User", //initially default
});

export default UserContext;