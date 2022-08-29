import React from "react";
import { useState } from "react";
import { TextField , FormControlLabel , checkbox } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

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

    const response = await fetch("https://clothes-store-react-js.herokuapp.com/auth/signIn", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = await response.json();

    console.log(data);
  }

  async function signUp(e) {
    e.preventDefault();

    const response = await fetch("https://clothes-store-react-js.herokuapp.com/auth/signUp", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        password
      })
    })

    const data = await response.json();

    console.log(data);
  }


  return (
    <>
      <section id="auth">
        <ThemeProvider theme={theme}>
          <form autoComplete="off" onSubmit={signIn ? login : signUp}>
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
            {
              signIn && <a href="/">Forgot password ?</a>
            }
            <button type="submit">
              {
                signIn ? "Sign in" : "Sign up"
              }
            </button>

            {
              signIn ? <>
                <h3>
                  Don't have an account ? <span onClick={() => { setSignIn(!signIn) }}>Sign up</span>
                </h3>
                <h4>or Sign in with</h4>
                <div className="icons">
              <div className="icon" style={{background:"#405498"}}>
                <FaFacebookF />
              </div>
              <div className="icon" style={{background:"#359BF1"}}>
                <FaTwitter />
              </div>
              <div className="icon" style={{background:"#E74639"}}>
                <FaGoogle />
              </div>
            </div>
              </>
                : <h3>Already have an account <span onClick={() => { setSignIn(!signIn) }}>Sign in</span></h3>
            }
            
          </form>
        </ThemeProvider>
      </section>
    </>
  )
}

export default Auth;