import React from 'react';
import "./Navigation.css";

import checkmark from "../../Assets/Images/Navigation/checkmark.svg";
import heart from "../../Assets/Images/Navigation/heart.svg";
import loupe from "../../Assets/Images/Navigation/loupe.svg";


function Navigation() {
    return (
            <div className="NavigationWrap">
                <ul className="Navigation">
                    <li className="NavigationLink">проекты
                        <img className="NavigationImgCheckmark" src={checkmark} alt="checkmark img"/>
                    </li>
                    <li className="NavigationLink">фото работ</li>
                    <li className="NavigationLink">акции</li>
                    <li className="NavigationLink">услуги
                        <img className="NavigationImgCheckmark" src={checkmark} alt="checkmark img"/>
                    </li>
                    <li className="NavigationLink">заказчику
                        <img className="NavigationImgCheckmark" src={checkmark} alt="checkmark img"/></li>
                    <li className="NavigationLink">контакты</li>
                    <li className="NavigationLink">
                        <img className="NavigationImgFigure" src={heart} alt="heart img"/> избранное
                    </li>
                    <li className="NavigationLink">
                        <img className="NavigationImgFigure" src={loupe} alt="loupe img"/> поиск</li>
                </ul>
            </div>
    )
}

export default Navigation;