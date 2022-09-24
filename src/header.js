import React, { useContext, useState } from "react";
import { AppsContext } from "./App";
import axios from "axios";

export default function Header() {
  const [password, setPassword] = useState('00000000')
  const [name, setName] = useState('asa')
  const { apps, setApps } = useContext(AppsContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = 'https://osmosys.tr6.my.id/public/api/opda/login/';
    const body = {
      username: name,
      password
    }
    axios.post(url, body)
      .then(res => {
        const newData = {
          username: res.data.username,
          role: res.data.role,
          handphone: res.data.handphone,
          message: res.data.message
        }
        console.log(newData)
        setApps(newData)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <div >
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="form-btn-submit">Login</button>
        </form>
      </div>
      <hr />
    </div>
  );
}