import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import style from "./style.module.css";
import axios from "axios";


const Log = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidUser, setValidUser] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleLoginButton = () => {
        if (!email) return alert("Enter Registered Email");
        if (!password) return alert("Enter Password");
        console.log(email, password);

        const inputObj = { email, password }

        axios.post("http://localhost:4000/login/login", inputObj)
            .then(response => {
                console.log(response)
                localStorage.setItem("idusers", response.data[0].idusers)
                alert("Logged In")
                setValidUser(true)
            })
            .catch(err => {
                console.log(err);
                alert("Invalid Credential")
            })
        
    }

    if (isValidUser) {
        return <Navigate to="/MonthData" />
    }

    return (
        <>

        
        <div className={style.Log}>
        <div className={style.mainCont}>
        <div className={style.logContainer}>
            <div className={style.header}>Login</div>
            <div className={style.content}>
                <div className={style.form}>
                    <div className={style.form_group}>
                        <label htmlFor="email" value="email">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            onChange={handleEmail}
                        />
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className={style.footer}>
                <button className={style.btn} onClick={handleLoginButton}>
                    Login
                </button>
                        {/* <a href="MonthData">Get Started</a> */}
            </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default Log;
