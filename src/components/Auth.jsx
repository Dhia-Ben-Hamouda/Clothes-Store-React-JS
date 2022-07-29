import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FaFacebook , FaGoogle , FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FB9D12"
    }
  }
})

const Auth = () => {
  const [signIn, setSignIn] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/auth/signIn", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({

      })
    })
    const data = await response.json();

    console.log(data);
  }

  async function signUp(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/auth/signUp", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({

      })
    })

    const data = await response.json();

    console.log(data);
  }

  function submitHandler() {
    if (signIn) {
      login();
    }
    else {
      signUp();
    }
  }

  return (
    <>
      <section id="auth">
        <ThemeProvider theme={theme}>
          <form autoComplete="off" onSubmit={submitHandler}>
            {
              !signIn && <>
                <TextField
                  label="Enter name"
                  value={name}
                  onChange={(e) => { setName(e.target.value) }}
                  className="input"
                />
                <TextField
                  label="Enter phone"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value) }}
                  className="input"
                />
              </>
            }
            <TextField
              label="Enter email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              type="email"
              className="input"
            />
            <TextField
              label="Enter password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              type="password"
              className="input"
            />
            <button type="submit">
              {
                signIn ? "Sign in" : "Sign up"
              }
            </button>

            {
              signIn ? <>
                <h3>
                Don't have an account ? <span  onClick={()=>{setSignIn(!signIn)}}>Sign up</span>
              </h3> 
              <h4>or Sign in with</h4>
              </>
              : <h3>Already have an account <span  onClick={()=>{setSignIn(!signIn)}}>Sign in</span></h3>
            }

            <div className="icons">
              
            </div>

          </form>
        </ThemeProvider>
      </section>
    </>
  )
}

export default Auth;