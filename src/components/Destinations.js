import {useState} from "react";

const Destinations = () => {
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
                <div className="row">
                    <div className="col-6 p-15">
                        <h3 className="destinations__heading">{state.heading}</h3>
                    </div>
                    <div className="col-6 p-15">
                        <p className="destinations__paragraph">
                            {state.paragraph}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinations;
