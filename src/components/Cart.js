import React, { useEffect } from "react";
import GlobalContext from "./context/GlobalContext";
import { NavLink } from "react-router-dom";

export default function Cart() {
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
                    <div className="sortCart">
                        <div className="CartTitle">Cart</div>
                    </div>
                    <section className="listofitems">
                        {context.cart.map((each) => {
                            return <div className="itemforlist">
                                <div className="img_list" style={{ backgroundImage: `url(./images/${each.brand + each.title_.toString().split(' ').join('')}/0.png)` }}></div>
                                <div className="title_list">{each.title_}</div>
                                <div className="description_list">{each.description_}</div>
                                <div className="price_list"><div id="price_list">{each.price_}</div></div>
                                <div className="quantity_list"><div id="quantity_list">{each.quantity_}</div></div>
                                <div className="addlist" onClick={() => context.add(each)}>ADD</div>
                                <div className="remove_list" onClick={() => context.remove(each)}>DEL</div>
                            </div>
                        })}
                        {context.cart.length === 0 && <div className="noitemstolist">There are no items added to list.</div>}
                    </section>
                    <div className="listoverall">
                        <NavLink to="/" className="backarrow">Back</NavLink>
                        <div className="purchase"></div>
                        <div className="overallprice"><div id="overallprice">{context.total}</div></div>
                        <div className="overallquantity">
                            <div id="overallquantity">
                                {context.cart.reduce((accumulator, currentValue) => {
                                    return accumulator + currentValue.quantity_
                                }, 0)}
                            </div>
                        </div>
                        <div className="buy">BUY</div>
                    </div>
                </div>
            )
            }
        </GlobalContext.Consumer >
    )
}