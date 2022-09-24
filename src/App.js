import React, { useState } from "react";
import Content from "./content";
import Header from "./header";
import Footer from "./footer";

export const AppsContext = React.createContext({});
export default function App() {
  const [apps, setApps] = useState({
    username: "",
    role: "",
    handphone: "",
    message: ""
  });

  return (
    <AppsContext.Provider value={{ apps, setApps }}>
      <Header />
      <Content />
      <Footer />
    </AppsContext.Provider>
  );
}