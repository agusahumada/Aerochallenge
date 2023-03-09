import React from "react";
import AerolabLogo from "../assets/aerolab-logo.svg"
import CoinIcon from "../assets/icons/coin.svg"

function Header() {
    return(
        <div className="header">
            <div className="logo-container">
                <img src={AerolabLogo} alt="logo" />
            </div>
            <div className="user-container">
                <p id="user">User</p>
                <div className="coins-container">
                    <p id="coins">coins</p>
                    <img id="coin-icon" src={CoinIcon} alt="coin-icon" />
                </div>
            </div>
        </div>
    )
}

export default Header;