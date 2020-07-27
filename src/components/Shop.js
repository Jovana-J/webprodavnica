import React from "react";
import GlobalContext from "./context/GlobalContext";
import { NavLink } from "react-router-dom";

export function Item({ specs }) {
    return (
        <GlobalContext.Consumer>
            {(context) => (
                <div className="item">
                    <div className="img" style={{ backgroundImage: `url(./images/${specs.brand + specs.title_.toString().split(' ').join('')}/${[0]}.png)` }}></div>
                    <div className="title">{specs.title_}</div>
                    <div className="titleabove">{specs.brand}</div>
                    {/* <div className="price">More info</div> */}
                    <NavLink to="/ItemDetails" className="price" onClick={() => context.itempage(specs)}>More info</NavLink>
                    <div className="currency">{specs.price_}</div>
                    <div className="add" onClick={() => context.add(specs)}>ADD</div>
                    {/* {console.log(context.add)} */}
                </div>
            )}
        </GlobalContext.Consumer>
    )
}

class Shop extends React.Component {
    constructor() {
        super();
        this.state = {
            slideshow: 0,
        }
        this.slideShowPrev = this.slideShowPrev.bind(this)
        this.slideShowNext = this.slideShowNext.bind(this)
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
        let n = 0;
        setInterval(() => {
            if (n === 2) {
                n = 0;
            } else {
                n = n + 1;
            }
            this.setState({
                slideshow: n
            })
        }, 5000)
    }
    slideShowPrev() {
        let n = this.state.slideshow;
        if (n === 0) {
            n = 2;
        } else {
            n = n - 1;
        }
        this.setState({
            slideshow: n
        })
    }
    slideShowNext() {
        let n = this.state.slideshow;
        if (n === 2) {
            n = 0;
        } else {
            n = n + 1;
        }
        this.setState({
            slideshow: n
        })
    }
    handleChange(e) {
        var labelSelect = document.getElementsByTagName("label");
        var nameSelect = document.getElementsByName("headline");
        for (let i = 0; i < labelSelect.length; i++) {
            if (nameSelect[0].checked) {
                labelSelect[0].style.backgroundColor = 'rgb(243, 243, 243)';
                labelSelect[0].style.borderBottom = '1px solid rgb(153, 153, 153)';
            }
            if (!nameSelect[0].checked) {
                labelSelect[0].style.backgroundColor = 'transparent';
                labelSelect[0].style.borderBottom = '1px solid transparent';
            }
            if (nameSelect[1].checked) {
                labelSelect[1].style.backgroundColor = 'rgb(243, 243, 243)';
                labelSelect[1].style.borderBottom = '1px solid rgb(153, 153, 153)';
            }
            if (!nameSelect[1].checked) {
                labelSelect[1].style.backgroundColor = 'transparent';
                labelSelect[1].style.borderBottom = '1px solid transparent';
            }
            if (nameSelect[2].checked) {
                labelSelect[2].style.backgroundColor = 'rgb(243, 243, 243)';
                labelSelect[2].style.borderBottom = '1px solid rgb(153, 153, 153)';
            }
            if (!nameSelect[2].checked) {
                labelSelect[2].style.backgroundColor = 'transparent';
                labelSelect[2].style.borderBottom = '1px solid transparent';
            }
        }
        var articlesItems = document.getElementsByClassName("item");
        for (let i = 0; i < articlesItems.length; i++) {
            articlesItems[i].style.display = 'none';
        }
        this.context.products.filter((obj) => {
            for (const key in obj) {
                if (obj[key] === e.target.value) {
                    articlesItems[this.context.products.indexOf(obj)].style.display = 'grid';
                }
            }
        });

    }
    render() {
        return (
            <div>
                <div className="images"
                    style={{ backgroundImage: `url(./images/${this.context.products[this.state.slideshow].brand + this.context.products[this.state.slideshow].title_.toString().split(' ').join('')}/${[0]}.png)` }}
                >
                    <div className="prevWrap" onClick={this.slideShowPrev}>
                        <div className="prev"></div>
                    </div>
                    <div className="titleSlideshow">
                        <div className="smallTitle">{this.context.products[this.state.slideshow].brand}</div>
                        <div className="largeTitle">{this.context.products[this.state.slideshow].title_}</div>
                        <div className="description">{this.context.products[this.state.slideshow].description_
                            + " | " + this.context.products[this.state.slideshow].hardDriveCapacity + " | " + this.context.products[this.state.slideshow].processorType + " | " + this.context.products[this.state.slideshow].operatingSystem + " | " + this.context.products[this.state.slideshow].screenSize}
                        </div>
                    </div>
                    <div className="nextWrap" onClick={this.slideShowNext}>
                        <div className="next"></div>
                    </div>
                </div>
                <div className="sort" id="headline">
                    <label className="Featured" htmlFor="Laptop"><input value="Laptop" type="radio" id="Laptop"
                        name="headline" onChange={(e) => this.handleChange(e)}></input>Laptop</label>
                    <label className="TopRated" htmlFor="NoteBook"><input value="NoteBook" type="radio" id="NoteBook"
                        name="headline" onChange={(e) => this.handleChange(e)}></input>NoteBook</label>
                    <label className="NewReleases" htmlFor="ChromeBook"><input value="ChromeBook" type="radio" id="ChromeBook"
                        name="headline" onChange={(e) => this.handleChange(e)}></input>ChromeBook</label>
                </div>
                <section className="articles">
                    {this.context.products.map((el) => (
                        <Item key={el.id} specs={el} />
                    ))}
                </section>
            </div >
        )
    }
}
export default Shop;
