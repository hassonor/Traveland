import { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import GalleryContext from '../../context/GalleryContext';
import { CLOSE_LIGHTBOX } from '../../context/types/GalleryTypes';
const LightBox = () => {
    const {
        galleryStore: { currentLightBox },
        dispatch,
    } = useContext(GalleryContext);
    const closeLightBox = (e) => {
        const className = e.target.getAttribute('class');
        if (className === 'gallery__lightbox') {
            dispatch({ type: CLOSE_LIGHTBOX });
        }
    };
    return (
        <div className='gallery__lightbox' onClick={closeLightBox}>
            <h4>{currentLightBox.name}</h4>
            <div className='gallery__lightbox__card'>
                <div className='gallery__lightbox__card__image'>
                    <LazyLoadImage
                        src={currentLightBox.image}
                        alt={currentLightBox.name}
                    />
                </div>
            </div>
        </div>
    );
};
export default LightBox;
