import React, { useState } from 'react';
import './GalleryForm.css';
import axios from 'axios';
import swal from 'sweetalert';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';

function GalleryForm(props) {

    const [picturePath, setPicturePath] = useState('');
    const [pictureDescription, setPictureDescription] = useState('');

    // adds new picture to db and DOM
    const addPicture = () => {
        console.log('logging picture');

        // forces user to enter both url and description
        if (!picturePath || !pictureDescription) {
            swal('Please make sure to enter both a url and a picture description.');
        }
        else {
            axios.post('/gallery', {
                path: picturePath,
                description: pictureDescription
            })
                .then(response => {
                    props.getGallery();
                })
                .catch(error => {
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

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));
    const classes = useStyles();
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="urlInput"></label>
                <Input onChange={(event) => setPicturePath(event.target.value)} value={picturePath} id="urlInput" placeholder="image url" color="secondary" className="input" />
                {/* <input onChange={(event) => setPicturePath(event.target.value)} value={picturePath} id="urlInput" class="input btn btn-outline-dark btn-sm" placeholder="image url" /> */}
                <label htmlFor="descriptionInput"></label>
                {/* <TextField onChange={(event) => setPictureDescription(event.target.value)} value={pictureDescription} id="descriptionInput" label="image description" color="secondary"/> */}
                <Input onChange={(event) => setPictureDescription(event.target.value)} value={pictureDescription} id="descriptionInput" placeholder="image description" color="secondary" className="input" />
                {/* <input onChange={(event) => setPictureDescription(event.target.value)} value={pictureDescription} id="descriptionInput" class="input btn btn-outline-dark btn-sm" placeholder="description" /> */}
                {/* <button className="btn btn-dark btn-sm" type="submit" >Display</button> */}
                <Button color="default" type="submit" disableElevation>Display</Button>
                    {/* <IconButton aria-label="delete"><DeleteIcon /></IconButton> */}
            </form>
        </div>
    )
}

export default GalleryForm;