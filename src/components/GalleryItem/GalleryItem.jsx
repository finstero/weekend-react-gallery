function GalleryItem (props) {
    console.log('logging props.picture.path in GalleryItem', props.picture.path);

    return(
        <div>
            <img src={props.picture.path} />

        </div>
    )
}

export default GalleryItem;