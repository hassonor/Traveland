import {BsStopwatch} from "react-icons/bs";
import Facilities from "./Facilities";

const CityContents = ({name, duration,price,room,food}) => {
    const format = (price) => {
        return `${price}.00`;
    }
    return(
        <div className="cities__body__contents">
            <div className="cites__body__contents__top">
                <div className="cities__body__contents__top__name">
                    {name}
                </div>
                <div className="cities__body__contents__top__duration">
                    <BsStopwatch size={18} color="#df2189"/>
                    <div className="cities__body__contents__top__duration__time">
                        {duration}
                    </div>
                </div>
            </div>
            <div className="cities__body__contents__price">
                <span className="cities__body__contents__price__dollar">$</span>
                {format(price)}
            </div>
            <Facilities name="חדר" value={room}/>
            <Facilities name="ארוחת בוקר" value={food}/>
            <div className="cities__body__contents__button">
                <button className="btn-dark-sm">הזמן עכשיו</button>
            </div>
        </div>

    )
}

export default CityContents;
