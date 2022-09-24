import React, { useContext } from "react";
import { AppsContext } from "./App";

export default function Footer() {
  const { apps } = useContext(AppsContext);

  return (
    <div>
      <hr />
        <div>username: {apps.username}</div>
        <div>handphone: {apps.handphone}</div>
        <div>role: {apps.role}</div>
    </div>
  );
}