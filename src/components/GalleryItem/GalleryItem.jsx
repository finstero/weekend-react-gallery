import axios from 'axios';
import './GalleryItem.css';
import { useState } from 'react';

function GalleryItem(props) {
    // console.log('logging props.picture.path in GalleryItem', props.picture.path);
    // console.log('in galleryitem, logging getGallery', props.getGallery);

    const [isHidden, setIsHidden] = useState(false);

    // increases like votes by one on click of like button.
    const handleLike = () => {
        // console.log(props.picture);
        axios.put(`/gallery/like/${props.picture.id}`)
            .then(response => {
                // console.log('response in put', response);
                props.getGallery();
            })
            .catch(error => {
                console.log('error in put', error);
            })
    }

    // delete picture card on click of delete button
    const handleDelete = () => {
        console.log('in delete');
        axios.delete(`/gallery/delete/${props.picture.id}`)
        .then( response => {
            console.log('response in delete', response);
            props.getGallery();
        })
        .catch(error => {
            console.log('error in delete', error);
        })
    }

    // toggles image/description in picture card
    const handleImageClick = () => {
        setIsHidden(!isHidden);
    }
    // console.log('logging is hidden', isHidden);
    return (
        <>
            <div className="itemBox row">
                <div className="imgBox">
                    {isHidden ? (
                        <div onClick={handleImageClick} className="description" width="150" height="150">{props.picture.description}</div>
                    ) : (
                            <img onClick={handleImageClick} className="galleryImage" src={props.picture.path} width="150" height="150"/>
                    )}
                </div>
                    <button onClick={handleLike} className="button btn btn-dark btn-sm">Like</button>
                    <button onClick={handleDelete} className="button btn btn-dark btn-sm">Delete</button>
                    <p>Number of likes: {props.picture.likes}</p>
            </div>
        </>
    )
}

export default GalleryItem;