import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [isSubmiting, setisSubmiting] = useState(false);

  useEffect(() => {
    if (!isSubmiting) {
      return;
    }
    document.title = email;
    axios("https://conduit.productionready.io/api/users/login", {
      method: "post",
      data: {
        user: {
          email: "qqq.@gmail.com",
          password: "123"
        }
      }
    })
      .then(res => {
        console.log("success", res);
        setisSubmiting(false);
      })
      .catch(error => {
        console.log(error);
        setisSubmiting(false);
      });
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    setisSubmiting(true);
  };
  return (
    <div className="auth-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Login</h1>
            <p className="text-xs-center">
              <Link to="register">Need an account ?</Link>
            </p>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={e => setpassword(e.target.value)}
                  />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={isSubmiting}
                >
                  Sign In
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
