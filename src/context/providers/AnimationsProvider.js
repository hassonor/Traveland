import {useEffect} from "react";
import AnimationsContext from "../AnimationsContext";

const AnimationsProvider = ({children}) => {
    const scrollAnimations = () =>{
        const animation = (elements, className) => {
            elements.forEach((elm)=>{
                const elementPosition = elm.getBoundingClientRect().top;
                const viewPortHeight = window.innerHeight - 150;
                if(elementPosition < viewPortHeight){
                    elm.classList.add(className);
                }
                else{
                    elm.classList.remove(className);
                }
            });
        }
        const elements = document.querySelectorAll('.animation');
        animation(elements,'animate' );


    }
    useEffect(() => {
            window.addEventListener('scroll', scrollAnimations);
    }, []);




    return (
        <AnimationsContext.Provider value>
            {children}
        </AnimationsContext.Provider>
    )
}

export default AnimationsProvider;
