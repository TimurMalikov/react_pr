import React from "react";
import "./Banner.css"

import img1 from "../../Assets/Images/Banner/img1.svg";
import img2 from "../../Assets/Images/Banner/img2.svg";
import img3 from "../../Assets/Images/Banner/img3.svg";
import img4 from "../../Assets/Images/Banner/img4.svg";

function Banner() {
    return (
        <>
            <div className='Banner'>
                <div className="Banner__Background">
                    <div className="Banner__Title-wrap">
                        <h1 className="Banner__Title"><span>Строительство деревянных домов</span> под ключ в Курске</h1>
                        <p className="Banner__Description">Построим теплый и надежный дом <span>с гарантией 10 лет</span></p>
                        <button className="Banner__Button">рассчитать стоимость</button>
                    </div>
                        <div className="Banner__Resume">
                            <div className="Banner__Resume-item">
                                <img src={img1} alt="img1"/>
                                <p className="Banner__Resume-description">40 собственных опытных бригад</p>
                            </div>
                            <div className="Banner__Resume-item">
                                <img src={img2} alt="img2"/>
                                <p className="Banner__Resume-description">Свое производство строительных материалов</p>
                            </div>
                            <div className="Banner__Resume-item">
                                <img src={img3} alt="img3"/>
                                <p className="Banner__Resume-description">Тысячи довольных клиентов с 1998 года</p>
                            </div>
                            <div className="Banner__Resume-item">
                                <img src={img4} alt="img4"/>
                                <p className="Banner__Resume-description">Гарантия на все строительные работы по договору</p>
                            </div>
                        </div>

                </div>
            </div>
        </>
    )
}

export default Banner;