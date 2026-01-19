import { createContext } from "react";

const UserContext = createContext({
  getUser: () => {
    // Placeholder function to get user data
    return { id: 1, name: "John Doe" };
  },
});
export default UserContext;
