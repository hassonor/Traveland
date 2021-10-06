import {CLOSE_LIGHTBOX, OPEN_LIGHTBOX} from "../types/GalleryTypes";

const GalleryReducer = (state, action) =>{
    if(action.type === OPEN_LIGHTBOX){
        return {
            ...state,
            lightBoxStatus: true,
            currentLightBox: action.payload,
        }
    }
    else if(action.type === CLOSE_LIGHTBOX){
        return {
            ...state,
            lightBoxStatus: false,
            currentLightBox: {},
        }
    }
    return state;
}

export default GalleryReducer;
