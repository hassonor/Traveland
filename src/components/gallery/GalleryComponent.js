import { useContext, useState } from 'react';
import GalleryContext from '../../context/GalleryContext';
import GalleryImage from './GalleryImage';
import LightBox from './LightBox';
const GalleryComponent = () => {
    const {
        galleryStore: { gallery, lightBoxStatus },
    } = useContext(GalleryContext);
    const [heading] = useState('תמונות מרהיבות שמטיילים צילמו');
    return (
        <>
            {lightBoxStatus ? <LightBox /> : ''}
            <div className='gallery'>
                <div className='container'>
                    <h2 className='heading mb-55'>{heading}</h2>
                    <div className='row'>
                        {gallery.length > 0
                            ? gallery.map((glr, index) => (
                                <GalleryImage key={index} glr={glr} />
                            ))
                            : ''}
                    </div>
                </div>
            </div>
        </>
    );
};
export default GalleryComponent;
