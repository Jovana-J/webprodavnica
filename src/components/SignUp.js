import React, { useEffect } from "react";
import GlobalContext from "./context/GlobalContext";

export default function SignUp() {
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
                        <div className="Cart">Create your account</div>
                    </div>
                    <form>
                        <input type="text" className="username" placeholder="First name" id="Firstname" />
                        <input type="text" className="username" id="Lastname" placeholder="Last name" />
                        <input type="email" className="username" id="Emailadress" placeholder="Email adress" />
                        <input type="password" className="password" id="passwordSignUp" placeholder="Create a password" />
                        <div className="formLinks">
                            <div className="formLinks1">Keep me logged in.</div>
                            <div className="formLinks2">Forgot password?</div>
                        </div>
                        <div className="formLinks" id="Terms">
                            By clicking Sign Up, you acknowledge you have read and agreed to our Terms of Use and Privacy Policy.
                        </div>
                        <input type="submit" className="submit" value="Sign Up" id="signUpSubmit" onClick={() => context.formSignUp()} />
                    </form>
                </div>
            )}
        </GlobalContext.Consumer>)
}