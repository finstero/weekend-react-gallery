import axios from 'axios';
import './GalleryItem.css';
import { useState } from 'react';

function GalleryItem(props) {
    // console.log('logging props.picture.path in GalleryItem', props.picture.path);
    // console.log('in galleryitem, logging getGallery', props.getGallery);

    const [isHidden, setIsHidden] = useState(false);

    const handleLike = () => {
        // console.log(props.picture);
        axios.put(`/gallery/like/${props.picture.id}`)
            .then(response => {
                console.log('response in put', response);
                props.getGallery();
            })
            .catch(error => {
                console.log('error in put', error);
            })
    }

    const handleImageClick = () => {
        setIsHidden(!isHidden);
    }
    console.log('logging is hidden', isHidden);
    return (
        <>
            <div className="itemBox">
                {isHidden ? (<div>
                    <p onClick={handleImageClick}>{props.picture.description}</p>

                </div>
                ) : (
                    <div>
                        <img onClick={handleImageClick} className="galleryImage" src={props.picture.path} />
                    </div>
                )}
                <button onClick={handleLike} className="btn btn-dark btn-sm">Like</button>
                <p>Number of likes: {props.picture.likes}</p>
            </div>
        </>
    )
}

export default GalleryItem;