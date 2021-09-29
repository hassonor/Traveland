import DestinationDetails from "./DestinationDetails";

const DestinationInfo = ({details}) =>{
    return (
        <div className="destinationInfo">
            <div className="container">
                <h2  className="heading">סקירה</h2>
                <div className="row">
                    <div className="col-8">
                        <p className="destinationInfo__p">
                            {details.details}
                        </p>
                    </div>
                </div>
                <h2 className="heading">
                        טוב לדעת
                </h2>
                <div className="row">
                    <div className="col-8">
                        <DestinationDetails  title="שפה" text={details.language} />
                        <DestinationDetails  title="מטבע" text={details.currency} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationInfo;
