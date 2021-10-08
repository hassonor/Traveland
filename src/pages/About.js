import {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import AboutImage from "../components/pages-parts/AboutImage";

const About = () =>{
    const [state] = useState({
        heading: 'עלינו',
        pageHeading: 'סוכנות הנסיעות הטובה ביותר משנת 1987.',
        message: 'חברת iTravel מתמחה במתן שירותי נסיעות ותיירות ברמה גבוהה .החברה מונה כעשרה מומחי נסיעות בעלי ידע עשיר וניסיון רב בתחום הנסיעות והתיירות. הצוות פועל בשיתוף פעולה מקצועי ברמה גבוהה, על מנת לספק את צרכי הלקוחות הנאמנים.פעילות החברה מתבצעת באמצעות משרדיה ברעננה ובאמצעות אתרי תוכן האינטרנט המספק מידע לכל אחד מהיעדים שלנו בארץ ובחול.'
    })
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Helmet>
                <title>About page</title>
                <meta name='description' content='iTravel דף מידע עלינו' />
            </Helmet>
            <PageContainer data={state}>
                <AboutImage />
            </PageContainer>
        </>
    );
}

export default About;
