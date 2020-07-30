import React from "react";
import GlobalContext from "./GlobalContext";
import data from "../../data/data";

class GlobalState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.productData(),
            cart: [],
            total: 0,
        };
    }
    productData = () => {
        let productData = [];
        for (let i = 0; i < data.length; i++) {
            productData.push({ ...data[i], id: i })
        }
        return productData;
    }
    menuProp = () => {
        return {
            Brand: ["Brand", "Acer", "Apple", "Asus", "Dell", "HP", "Lenovo", "Samsung"],
            Processor_type: [
                "Processor type",
                "Intel Core i7",
                "Intel Core i5",
                "Intel Core i3",
                "Intel Celeron",
                "Intel Pentium",
                "Pentium Silver",
                "AMD Ryzen 7",
                "AMD Ryzen 3",
            ],
            Processor_speed: [
                "Processor speed",
                "3.9 GHz",
                "2.5 GHz",
                "2.3 GHz",
                "2.1 GHz",
                "1.8 GHz",
                "1.6 GHz",
                "1.2 GHz",
                "1.1 GHz",
            ],
            Hard_drive_capacity: [
                "Hard drive capacity",
                "1 TB",
                "512 GB",
                "256 GB",
                "128 GB",
                "64 GB",
                "32 GB",
                "16 GB",
            ],
            Ram_memory: ["Ram memory", "12 GB", "8 GB", "6 GB", "4 GB"],
            Maximum_Ram_supported: [
                "Maximum Ram",
                "12 TB",
                "32 GB",
                "16 GB",
                "8 GB",
                "6 GB",
                "4 GB",
            ],
            Operating_system: [
                "Operating system",
                "Chrome OS",
                "Apple iOS",
                "Windows 10",
                "Microsoft Windows",
            ],
            Screen_size: ["Screen size", '15.6"', '14"', '13.3"', '11.6"', '6"'],
        }
    }
    add = (product) => {
        console.log(product)
        let updateCart = [...this.state.cart];
        let updateIndex = updateCart.findIndex((i) => i.id === product.id);
        if (updateIndex === -1) {
            updateCart.push({ ...product, quantity_: 1 });
        } else {
            let updateArticle = { ...updateCart[updateIndex] };
            updateArticle.quantity_++;
            updateCart[updateIndex] = updateArticle;
            var price = data[product.id].price_;
            updateCart[updateIndex].price_ = Math.round(updateCart[updateIndex].quantity_ * price);
        }
        this.setState({
            cart: updateCart,
        });
        this.setState({
            total: this.state.total + data[product.id].price_,
        });

    };
    remove = (product) => {
        let updateCart = [...this.state.cart];
        let updateIndex = updateCart.findIndex((i) => i.id === product.id);
        var updateArticle = { ...updateCart[updateIndex] };
        updateArticle.quantity_--;
        updateCart[updateIndex] = updateArticle;
        var price = data[product.id].price_;
        updateCart[updateIndex].price_ = Math.round(updateCart[updateIndex].quantity_ * price);
        if (updateArticle.quantity_ === 0) {
            updateCart.splice(updateCart.indexOf(updateArticle), 1);
        }
        this.setState({
            cart: updateCart,
        });
        this.setState({
            total: this.state.total - data[product.id].price_,
        });

    }
    itemProduct = (each) => {
        this.setState({
            itemObj: each,
        });

    }
    formLogIn = () => {
        let namevalue = document.getElementById('usernameLogIn').value;
        let nameexp = /[A-ZČĆŽŠĐ][a-zčćžšđ]{2,12}/g;
        let namereg = nameexp.test(namevalue);
        namereg ?
            document.getElementById('usernameLogIn').style.color = 'green' :
            document.getElementById('usernameLogIn').style.color = 'red'

        let passwordvalue = document.getElementById('passwordLogIn').value;
        let passwordexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        let passwordreg = passwordexp.test(passwordvalue);
        passwordreg ?
            document.getElementById('passwordLogIn').style.color = 'green' :
            document.getElementById('passwordLogIn').style.color = 'red'
    }
    formSignUp = () => {
        let account = {}

        let namevalue = document.getElementById('Firstname').value;
        let nameexp = /[A-ZČĆŽŠĐ][a-zčćžšđ]{2,12}/g;
        let namereg = nameexp.test(namevalue);
        if (namereg) {
            document.getElementById('Firstname').style.color = 'green'
            account.Firstname = namevalue
        } else {
            document.getElementById('Firstname').style.color = 'red';
        }

        let surnamevalue = document.getElementById('Lastname').value;
        let surnameexp = /[A-ZČĆŽŠĐ][a-zčćžšđ]{2,12}/g;
        let surnamereg = surnameexp.test(surnamevalue);
        if (surnamereg) {
            document.getElementById('Lastname').style.color = 'green'
            account.Lastname = surnamevalue
        } else {
            document.getElementById('Lastname').style.color = 'red';
        }

        let emailvalue = document.getElementById('Emailadress').value;
        let emailexp = /(\w+[\.]*[\-]*)+[@]\w{5}[\.](\w{2,4})([\.]\w{2,4})?/g;
        let emailreg = emailexp.test(emailvalue);
        if (emailreg) {
            document.getElementById('Emailadress').style.color = 'green'
            account.Emailadress = emailvalue
        } else {
            document.getElementById('Emailadress').style.color = 'red';
        }

        let passwordvalue = document.getElementById('passwordSignUp').value;
        let passwordexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        let passwordreg = passwordexp.test(passwordvalue);
        if (passwordreg) {
            document.getElementById('passwordSignUp').style.color = 'green'
            account.password = passwordvalue
        } else {
            document.getElementById('passwordSignUp').style.color = 'red';
        }
        let accountjson = JSON.stringify(account);
        localStorage.setItem("accountjson", accountjson);
    }
    render() {

        return (
            <GlobalContext.Provider
                value={{
                    products: this.state.products,
                    cart: this.state.cart,
                    add: this.add,
                    remove: this.remove,
                    total: Math.round(this.state.total),
                    menuprop: this.menuProp(),
                    itempage: this.itemProduct,
                    itemObj: this.state.itemObj,
                    formLogIn: this.formLogIn,
                    formSignUp: this.formSignUp,

                }}
            >
                {this.props.children}
            </GlobalContext.Provider>
        );
    }
}

export default GlobalState;
