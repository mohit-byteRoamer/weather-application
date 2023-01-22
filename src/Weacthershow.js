import React from "react"
import './style.css';

let Weatherreport = function (props) {
    let [country, setcountry] = React.useState("india");
    let [city, setCity] = React.useState("Mansa");


    let changeCity = function (e) {
        setCity(e.target.value);
    }

    let changecountry = function (e) {
        setcountry(e.target.value);
    }

    let onButtonClick = function () {
        props.onClick(city, country)

    }
    return (
        <div>
            <div className="Content" >
                <div className="top">
                    <div className="localweatherreport hover">localweatherreport</div>
                    <div className="seaforecastreport hover">
                        <form>
                            <input value={city} onChange={changeCity} className="searchbox"></input>
                            <input value={country} onChange={changecountry} className="searchbox"></input>
                        </form>
                        <div className="Report">{props.weather}</div>
                        <button className="button" onClick={onButtonClick}>clickme</button>
                    </div>
                </div>
                <div className="buttom hover">c</div>
                <div className="Vector"></div>
        
            </div>
        </div>
    )
}
export default Weatherreport;