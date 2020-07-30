import React from "react";
import GlobalContext from "./context/GlobalContext";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }
    static contextType = GlobalContext;

    componentDidMount() {
        if (document.location.pathname === '/') {
            document.getElementsByClassName("categoriesWrap")[0].style.display = 'flex';
            document.getElementsByClassName("categoriesWrap")[0].style.visibility = 'visible';
            document.getElementsByClassName("Category")[0].innerHTML = 'Sort by';
            document.getElementsByClassName("searchInput")[0].style.visibility = 'visible';
            document.getElementsByClassName("searchButton")[0].style.visibility = 'visible';
        }
        for (const key in this.context.menuprop) {
            if (this.context.menuprop.hasOwnProperty(key)) {
                var options = document.createElement("div");
                document.getElementsByClassName("categoriesWrap")[0].append(options);
                options.classList.add("one");
                options.setAttribute("id", key);
                for (let i = 0; i < this.context.menuprop[key].length; i++) {
                    var opt = document.createElement("a");
                    document.getElementById(key).append(opt);
                    opt.classList.add("opt");
                    opt.setAttribute("href", '/#headline');
                    opt.innerHTML = this.context.menuprop[key][i];
                }
            }
        }
        var optSelect = document.getElementsByClassName("opt");
        for (let i = 0; i < optSelect.length; i++) {
            optSelect[i].addEventListener("click", (e) => this.handleClick(e));
        }
    }
    handleClick(e) {
        var articlesItems = document.getElementsByClassName("item");
        for (let i = 0; i < articlesItems.length; i++) {
            articlesItems[i].style.display = 'none';
        }
        this.context.products.filter((obj) => {
            for (const key in obj) {
                if (obj[key] === e.target.innerHTML) {
                    articlesItems[this.context.products.indexOf(obj)].style.display = 'grid';
                }
            }
        });
    }
    handleSearch() {
        let searchedFor = document.getElementsByClassName("searchInput")[0].value;
        let articlesItems = document.getElementsByClassName("item");
        for (let i = 0; i < articlesItems.length; i++) {
            articlesItems[i].style.display = 'none';
        }
        this.context.products.filter((obj) => {
            for (const key in obj) {
                if (obj[key].toString().toUpperCase().includes(searchedFor.toUpperCase())) {
                    articlesItems[this.context.products.indexOf(obj)].style.display = 'grid';
                }
            }
        });
    }
    render() {
        return (
            <div>
                <nav>
                    <div className="menu">
                        <img id="logo" src="./logo.png" alt="Shop" />
                        <div id="numberOfCartItems">
                            <div id="topskew"></div>
                            <div id="bottomskew"></div>
                            <NavLink id="numberinput" to="/Cart">{this.context.cart.reduce((accumulator, currentValue) => {
                                return accumulator + currentValue.quantity_
                            }, 0)}</NavLink>
                        </div>
                    </div>
                    <div className="search">
                        <NavLink to="/LogIn" className="LogIn">Log In</NavLink>
                        <NavLink to="/SignUp" className="SignUp">Sign Up</NavLink>
                        <input type="text" placeholder="Search..." className="searchInput"></input>
                        <a className="searchButton" href="/#headline" onClick={this.handleSearch}>
                            <div className="searchIcon">
                                <div id="frame"></div>
                                <div id="handle"></div>
                            </div>
                        </a>
                    </div>
                </nav>
                <div className="sideNav">
                    <NavLink to="/" className="Category">Sort by</NavLink>
                    <div className="categoriesWrap"></div>
                </div>
                <div className="socialLinks">
                    <img className="facebook" src="./facebook.png" alt="Facebook" />
                    <img className="linkedin" src="./linkedin.png" alt="Linkedin" />
                    <img className="twitter" src="./twitter.png" alt="Twitter" />
                    <img className="youtube" src="./youtube.png" alt="YouTube" />
                </div>
            </div >
        );
    }
}
export default Navigation;
