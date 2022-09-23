import React, { useContext } from "react";
import { AppsContext } from "./App";

export default function Content() {
  const { apps, setApps } = useContext(AppsContext);
  console.log(apps)
  const newData = {
    username: "zabuza",
    description: "zabuza adalah seorang ninja kabut casablanca",
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
  }

  return (
    <div>
      <h1>Description</h1>
      <p>{apps.description}</p>
      <button onClick={() => setApps(newData)}> change</button>
    </div>
  );
}