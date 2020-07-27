import React, { useEffect } from "react";

export default function PageNotFound() {
    useEffect(() => {
        if (document.location.pathname !== '/') {
            document.getElementsByClassName("categoriesWrap")[0].style.display = 'none';
            document.getElementsByClassName("Category")[0].innerHTML = 'Back';
            document.getElementsByClassName("searchInput")[0].style.visibility = 'hidden';
            document.getElementsByClassName("searchButton")[0].style.visibility = 'hidden';
        }
    });
    return <div>
        <div className="sortCart">
            <div className="CartTitle"></div>
        </div>
        Error 404: Page not Found!!!</div>;
}