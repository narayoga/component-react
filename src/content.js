import React, { useContext } from "react";
import { AppsContext } from "./App";

export default function Content() {
  const { apps, setApps } = useContext(AppsContext);

  return (
    <div>
      <h1>Description</h1>
      {apps.message &&
        <p> {apps.username} has loged in</p>
      }
    </div>
  );
}