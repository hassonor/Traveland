import CityImage from "./CityImage";
import CityContents from "./CityContents";

const Cities = ({cities, name}) => {
    return (
        <div className="cities">
            <div className="container">
                <div className="cities__container">
                    <h2 className="heading"> ערים ב {name}</h2>
                    <div className="row ml-minus-15 mr-minus-15">
                        {cities.length > 0 ? cities.map((city) => (
                            <div className="col-3 p-15" key={city.id}>
                                <div className="cities__body animation">
                                    <CityImage img={city.image} status={city.status}/>
                                    <CityContents name={city.name} duration={city.duration} food={city.food} price={city.price}
                                     room={city.room}/>
                                </div>
                            </div>
                        )) : `No Cities in ${name}`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cities;
