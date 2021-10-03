import {useContext, useState} from "react";
import ServicesLeft from "./ServicesLeft";
import SharedContext from "../../context/SharedContext";
import ServicesList from "./ServicesList";

const Services = () =>{
    const {sharedData: {serviceData}} = useContext(SharedContext);
    const [state] = useState({
        heading: 'למה הלקוחות שלנו אוהבים את iTravel? בגלל השירותים הייחודיים שלנו. ',
        subHeading: 'המטרה שלנו לספק שירות יחודי ומקצועי ללקוחות שלנו ובזכות השירות ברמה הגבוהה ללקוחות שלנו, זאת הסיפר שהם אוהבים את iTravel.'
    })
    return(
        <div className="services">
            <div className="services__contents">
                <div className="container">
                    <div className="row ml-minus-15 mr-minus-15 services__contents__container">
                        <div className="col-6 p-15">
                                <ServicesLeft heading={state.heading} subHeading={state.subHeading}/>
                        </div>
                        <div className="col-6 p-15">
                                <ServicesList services={serviceData}/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services;
