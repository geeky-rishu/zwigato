import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useOnlineStatus from "./utils/useOnlineStatus";
import Offline from "./components/Offline";
import UserContext from "./utils/UserContext";
import { useState, useContext, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";

export default function App() {
  const [userName, setUserName] = useState(
    useContext(UserContext).getUser().name
  );

  useEffect(() => {
    const data = { id: 1, name: "Jane Smith" };
    setUserName(data.name);
  }, []);

  const isOnline = useOnlineStatus();
  if (!isOnline) {
    return <Offline />;
  }
  return (
    <div className="app-layout">
      <Provider store={appStore}>
        <UserContext.Provider value={{ getUser: () => ({ name: userName }) }}>
          <Header />
        </UserContext.Provider>
        <main className="page-content">
          <Outlet />
        </main>
        <Footer />
      </Provider>
    </div>
  );
}
