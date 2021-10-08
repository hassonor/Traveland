import {useContext, useState} from 'react';
import SharedContext from '../../context/SharedContext';
import ReviewBody from './ReviewBody';

const Reviews = () => {
    const [heading] = useState('מה הלקוחות שלנו אומרים?');
    const {
        sharedData: {reviews},
    } = useContext(SharedContext);

    return (
        <div className='reviews'>
            <div className='container'>
                <h2 className='heading'>{heading}</h2>
                <div className='row ml-minus-15 mr-minus-15'>
                    {reviews.length > 0
                        ? reviews.map((review, index) => (
                            <ReviewBody key={index} review={review}/>
                        ))
                        : ''}
                </div>
            </div>
        </div>
    );
};
export default Reviews;
