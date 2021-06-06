import React, { useState } from 'react';
import './GalleryForm.css';
import axios from 'axios';
import swal from 'sweetalert';

function GalleryForm (props) {

    const [picturePath, setPicturePath] = useState('');
    const [pictureDescription, setPictureDescription] = useState('');

// adds new picture to db and DOM
    const addPicture = () => {
        console.log('logging picture');

        // forces user to enter both url and description
        if (!picturePath || !pictureDescription){
            swal('Please make sure to enter both a url and a picture description.');
        }
        else {
            axios.post('/gallery', {
                path: picturePath,
                description: pictureDescription
            })
            .then( response => {
                props.getGallery();
            })
            .catch( error => {
                console.log('error in post', error);
            });
            setPicturePath('');
            setPictureDescription('');
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addPicture();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="urlInput">Image URL</label>
                <input onChange={(event) => setPicturePath(event.target.value)} value={picturePath} id="urlInput" class="input btn btn-outline-dark btn-sm" placeholder="image url" />
                <label htmlFor="descriptionInput">Image Description</label>
                <input onChange={(event) => setPictureDescription(event.target.value)} value={pictureDescription} id="descriptionInput" class="input btn btn-outline-dark btn-sm" placeholder="description" />
                <button className="btn btn-dark btn-sm" type="submit" >Display</button>
            </form>
        </div>
    )
}

export default GalleryForm;