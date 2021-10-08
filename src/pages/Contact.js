import {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import ContactForm from "../components/pages-parts/ContactForm";

const Contact = () =>{
    const [state] = useState({
        heading: 'צור קשר',
        pageHeading: 'השאר לנו הודעה בטופס',
        message: 'לקוחות יקרים, iTravel מעמידה במקום הראשון את השירות ללקוח ועושה כל שביכולתה על מנת לתת ללקוחותיה מענה מהיר.\n' +
            '\n' +
            'דף זה הוא המקום עבור פניותכם בנושאים כלליים. הנכם מוזמנים להשאיר את פרטיכם בטופס מטה או לשלוח לנו דוא"ל בכתובות המופיעות בדף שרות לקוחות ונענה בהקדם.'
    })
    useEffect(() => {
        window.scrollTo(300, 300);
    }, []);
    return (
        <>
            <Helmet>
                <title>דף יצירת קשר</title>
                <meta name='description' content='iTravel דף יצירת קשר' />
            </Helmet>
            <PageContainer data={state}>
                <ContactForm />
            </PageContainer>
        </>
    );
}

export default Contact;
