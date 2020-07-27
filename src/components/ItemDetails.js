import React from "react";
import GlobalContext from "./context/GlobalContext";

class ItemDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            slideshow: 0
        }
        this.slideShowPrev = this.slideShowPrev.bind(this)
        this.slideShowNext = this.slideShowNext.bind(this)
    }
    static contextType = GlobalContext;
    tabsArray = () => {
        let anarray = ["Reviews", "Stars", "Price", "Add"];
        return anarray;
    }
    tabsArrayItem = () => {
        let todividestars = this.context.itemObj.stars.reduce((curr, accu) => {
            return curr + accu;
        });
        let starsSum = todividestars / this.context.itemObj.stars.length;
        return [
            this.context.itemObj.reviews.length,
            starsSum,
            this.context.itemObj.price_,
            "",
        ];
    }
    infoDetailsProp = () => {
        return [
            "Processor type",
            "Processor speed",
            "Hard drive capacity",
            "Ram memory",
            "Maximum Ram supported",
            "Operating system",
            "Screen size",
        ];
    }
    infoDetails = () => {
        return [
            this.context.itemObj.processorType,
            this.context.itemObj.processorSpeed,
            this.context.itemObj.hardDriveCapacity,
            this.context.itemObj.ramMemory,
            this.context.itemObj.maximumRamSupported,
            this.context.itemObj.operatingSystem,
            this.context.itemObj.screenSize,
        ];
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
    componentDidMount() {
        document.getElementById('itemAdd').addEventListener("click", () => this.context.add(this.context.itemObj));
        if (document.location.pathname !== '/') {
            document.getElementsByClassName("categoriesWrap")[0].style.visibility = 'hidden';
            document.getElementsByClassName("Category")[0].innerHTML = 'Back';
            document.getElementsByClassName("searchInput")[0].style.visibility = 'hidden';
            document.getElementsByClassName("searchButton")[0].style.visibility = 'hidden';
        }
    }
    render() {

        //console.log(this.context)
        return (
            <div>
                <div className="sortItemDetails">
                    <div className="Cart" id="itemTitles">
                        <div className="brand">{this.context.itemObj.brand + " " + this.context.itemObj.description_}</div>
                        <div className="title_item">{this.context.itemObj.title_}</div>
                    </div>
                </div>
                <section className="itemSection">
                    <div className="itemParent">
                        <div className="img_item" style={{ backgroundImage: `url(./images/${this.context.itemObj.brand + this.context.itemObj.title_.toString().split(' ').join('')}/${[this.state.slideshow]}.png)` }}>
                            <div className="prevWrap" onClick={this.slideShowPrev}>
                                <div className="prev"></div>
                            </div>
                            <div className="nextWrap" onClick={this.slideShowNext}>
                                <div className="next"></div>
                            </div>
                        </div>
                        <div className="tabs_item">
                            {this.tabsArray().map((each, i) => {
                                return <div key={each} className="eachTab" style={{ width: `${100 / this.tabsArray().length}%` }}>
                                    <div className="infoArray" id={each === "Add" ? "itemAdd" : undefined}>{each}</div>
                                    <div className="infoArrayItem" style={{ display: this.tabsArrayItem()[i] === '' ? 'none' : undefined }}>{
                                        this.tabsArrayItem()[i]
                                    }</div>
                                </div>
                            })}
                        </div>
                        <div className="details_item">
                            {this.infoDetailsProp().map((each, i) => {
                                return <div className="details_info" style={{ height: `${100 / this.infoDetailsProp().length}%`, backgroundColor: i % 2 ? "rgb(247, 247, 247)" : null }}>
                                    <div className="propElement">{each}</div>
                                    <div className="infoElement">{this.infoDetails()[i]}</div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="reviews_Headlime">
                        <div className="reviews_HeadlimeWrapper">
                            <div className="reviews_Title">Reviews</div>
                            <div className="reviews_Write">Write a review</div>
                        </div>
                    </div>
                    <div className="reviews_item">
                        {this.context.itemObj.reviews.map((each, i) => {
                            return <div className="review" style={{ backgroundColor: i % 2 ? "rgb(247, 247, 247)" : null }}><div className="header">
                                <div className="subject">{each.subject}</div>
                                <div className="dateComment">{each.date}</div>
                                <div className="rateComment">Rate a comment</div>
                            </div>
                                <div className="comment">{each.comment}</div>
                                <div className="footerItem">
                                    <div className="usernameComment">{each.username}</div>
                                    <div className="iconsComment">
                                        <span className="material-icons" style={{ width: `${100 / 6}%` }}>
                                            thumb_up_alt
                                            {/* {each.likes} */}
                                        </span>
                                        <div className="Likes" style={{ width: `${100 / 6}%` }}>{each.likes}</div>
                                        <span className="material-icons" style={{ width: `${100 / 6}%` }}>
                                            thumb_down_alt
                                            {/* {each.likes} */}
                                        </span>
                                        <div className="Dislikes" style={{ width: `${100 / 6}%` }}>{each.dislikes}</div>
                                        <span className="material-icons" style={{ width: `${100 / 6}%` }}>
                                            star
                                            {/* {each.likes} */}
                                        </span>
                                        <div className="Stars" style={{ width: `${100 / 6}%` }}>
                                            {each.stars.reduce((curr, accu) => {
                                                return curr + accu
                                            }) /
                                                each.stars.length}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </section>
            </div>
        );
    }
}

export default ItemDetails;
