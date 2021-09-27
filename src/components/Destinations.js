import {useContext, useState} from "react";
import DestinationContext from "../context/DestinationContext";
import DestinationsList from "./DestinationsList";

const Destinations = () => {
    const {destinationsData: {destinations}} = useContext(DestinationContext);

    const [state] = useState({
        heading: "גלה את המקומות המרתקים ביותר בעולם  איתנו ב  iTravel",
        paragraph: "נסיעות זה דבר מאתגר. זה מאלץ אותך לסמוך על זרים ולאבד את כל הנוחות המוכרת של בית וחברים." +
            " אתה כל הזמן נמצא באיזון." +
            " שום דבר אינו שלך מלבד הדברים החיוניים אוויר, שינה, " +
            "חלום, הים, השמים-כל הדברים נוטים אל הנצח או מה שאנחנו מדמיינים ממנו.",
    })
    return (
        <div className="destinations">
            <div className="container">
                <div className="row ml-minus-15 mr-minus-15">
                    <div className="col-6 p-15">
                        <h3 className="destinations__heading">{state.heading}</h3>
                    </div>
                    <div className="col-6 p-15">
                        <p className="destinations__paragraph">
                            {state.paragraph}
                        </p>
                    </div>
                </div>
                <div className='destinations__block'>
                    <div className='row ml-minus-15 mr-minus-15'>
                        {destinations.map((destination) => (
                            <DestinationsList
                                destination={destination}
                                key={destination.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinations;
