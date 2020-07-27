import React, { useEffect } from "react";
import GlobalContext from "./context/GlobalContext";

export default function LogIn() {
    useEffect(() => {
        if (document.location.pathname !== '/') {
            document.getElementsByClassName("categoriesWrap")[0].style.display = 'none';
            document.getElementsByClassName("Category")[0].innerHTML = 'Back';
            document.getElementsByClassName("searchInput")[0].style.visibility = 'hidden';
            document.getElementsByClassName("searchButton")[0].style.visibility = 'hidden';
        }
    });
    return (
        <GlobalContext.Consumer>
            {(context) => (
                <div>
                    <div className="pageTitle">
                        <div className="Cart">Log in to your account</div>
                    </div>
                    <form>
                        <input type="text" className="username" id="usernameLogIn" placeholder="Username" />
                        <input type="password" className="password" id="passwordLogIn" placeholder="Password" />
                        <div className="formLinks">
                            <div className="formLinks1">Keep me logged in.</div>
                            <div className="formLinks2">Forgot password?</div>
                        </div>
                        <input type="submit" className="submit" value="Log In" id="logInSubmit" onClick={() => context.formLogIn()} />
                    </form>
                </div>
            )}
        </GlobalContext.Consumer>)
}