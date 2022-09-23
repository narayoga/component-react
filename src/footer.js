import React, { useContext } from "react";
import { AppsContext } from "./App";

export default function Footer() {
  const { apps } = useContext(AppsContext);

  return (
    <div>
      <hr />
      <ul>
        {apps.contact.map((list, key) => {
          return (
            <li key={key}>
              <a href={list.url} target="blank">
                {list.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}