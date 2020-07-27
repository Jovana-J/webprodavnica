import React, { Component } from "react";
import GlobalContext from "./context/GlobalContext";
import { NavLink } from "react-router-dom";

class Footer extends Component {
    static contextType = GlobalContext;//zbog static contextType - a, komponenta je class;
    render() {
        return (
            <GlobalContext.Consumer>
                {(context) => (
                    <div className="footer">
                        <div id="Browse">
                            <NavLink to="/" className="footerInfo">Shop</NavLink>
                            <NavLink to="/LogIn" className="footerInfo">Log In</NavLink>
                            <NavLink to="/SignUp" className="footerInfo">Sign Up</NavLink>
                            <NavLink to="/Cart" className="footerInfo">Cart</NavLink>
                            {/* <div class="footerInfo">Account</div>
                    <div class="footerInfo">Help & Guide</div>
                    <div class="footerInfo">Shipping & Returns</div> */}
                            {/* <div className="footerInfo">FAQs</div> */}
                        </div>
                        <div id="Contact">
                            <div className="footerInfo">Street 123, City, Country</div>
                            {/* <div className="footerInfo">State, Country</div> */}
                            <div className="footerInfo">Phone +012 34 567 890</div>
                            <div className="footerInfo">Fax +012 34 567 890</div>
                            <div className="footerInfo">shop@mail.com</div>
                        </div>
                        <div id="subscription">
                            <input type="text" id="subscriptionInput" placeholder="Enter your email" className="searchInput"></input>
                            <input type="submit" className="submit" value="Get our newsletters" id="footerSubmit" />
                        </div>
                    </div>
                )}
            </GlobalContext.Consumer>
        );
    }
}

export default Footer;