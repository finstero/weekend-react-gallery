import './GalleryItem.css';

function GalleryItem (props) {
    // console.log('logging props.picture.path in GalleryItem', props.picture.path);

    return(
        <div className="itemBox">
            <img className="galleryImage" src={props.picture.path} />
            <button className="btn btn-dark">Like</button>
        </div>
    )
}

export default GalleryItem;