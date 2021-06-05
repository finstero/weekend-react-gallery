import axios from 'axios';
import './GalleryItem.css';

function GalleryItem (props) {
    // console.log('logging props.picture.path in GalleryItem', props.picture.path);
    console.log('in galleryitem, logging getGallery', props.getGallery);
    const handleLike = () => {
        // console.log(props.picture);
        // const data = {

        // }
        axios.put(`/gallery/like/${props.picture.id}`)
        .then( response => {
            console.log('response in put', response);
            props.getGallery();
        })
        .catch(error => {
            console.log('error in put', error);
        })
    }

    return(
        <div className="itemBox">
            <img className="galleryImage" src={props.picture.path} />
            <button onClick={handleLike} className="btn btn-dark btn-sm">Like</button>
            <p>Number of likes: {props.picture.likes}</p>
        </div>
    )
}

export default GalleryItem;