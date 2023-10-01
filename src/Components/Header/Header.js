import logo from "../../Images/Header/logo.svg";
import flag from "../../Images/Header/flag.svg";
import rating from "../../Images/Header/rating.svg";
import calculator from "../../Images/Header/calculator.svg";
import letter from "../../Images/Header/letter.svg";
import whatsapp from "../../Images/Header/whatsapp.svg";
import round from "../../Images/Header/round.svg";

import React from 'react';
import "./Header.css";
import "../../fonts.css";

function Header() {
    return (
        <>
        <header className="Header">
            <img className="HeaderLogo" src={logo} alt="logo img"/>
            <div className="HeaderRatingWrap">
                <img className="HeaderRatingFlag" src={flag} alt="flag img"/>
                <div className="HeaderRatingTitleWrap">
                    <img className="HeaderRatingStars" src={rating} alt="rating img"/>
                    <h3 className="HeaderRatingTitle">
                        <span>Рейтинг в Google</span> на основании 180 отзывов
                    </h3>
                </div>
            </div>
            <div className="HeaderCalculationWrap">
                <button className="HeaderCalculationSend" type="button">
                    <h3>Прислать проект на расчет</h3>
                    <img className="HeaderCalculator" src={calculator} alt="calc img"/>
                </button>
                    <div className="HeaderCalculationTitle">
                        <img className="HeaderCalculationLetter" src={letter} alt="letter img"/>
                        <a className="HeaderCalculationMail" href="mailto:info@house.world">info@house.world</a>
                    </div>
            </div>
            <div className="HeaderOnline">
                <div className="HeaderOnlineTitleWrap">
                    <img className="HeaderOnlineRound" src={round} alt="round img"/>
                    <p className="HeaderOnlineTitle">Мы онлайн</p>
                </div>
                    <img className="HeaderOnlineIcon" src={whatsapp} alt="whatsapp img"/>
            </div>
            <div className="HeaderCallNumberWrap">
                <img className="HeaderCallImg" src={round} alt="round img"/>
                <p className="HeaderCallNumberTitle">Без выходных с 10:00 до 20:00</p>
                <a className="HeaderPhoneNumber" href="tel:+7 (800) 000-00-00">+7 (800) 000-00-00</a>
                <a className="HeaderCallModal" href="##">Заказать обратный звонок</a>
            </div>
        </header>
            </>
)
}

export default Header;