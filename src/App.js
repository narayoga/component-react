import React, { useState } from "react";
import Content from "./content";
import Header from "./header";
import Footer from "./footer";

export const AppsContext = React.createContext({});
export default function App() {
  const [apps, setApps] = useState({
    username: "ziqri",
    description: "Ziqri adalah seorang manusia",
    contact: [
      {
        label: "Twitter",
        url: "https://twitter.com/alziqziq"
      },
      {
        label: "Github",
        url: "https://github.com/alziqziq"
      },
      {
        label: "Medium",
        url: "https://medium.com/@alziqziq"
      }
    ]
  });

  return (
    <AppsContext.Provider value={{ apps, setApps }}>
      <Header />
      <Content />
      <Footer />
    </AppsContext.Provider>
  );
}