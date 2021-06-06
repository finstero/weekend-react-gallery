import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList (props) {
    // console.log('logging pics in GalleryList', pictures);
    // console.log('logging getGallery', props.getGallery);
    const getGallery = props.getGallery;
    return(
        <section>
            <h3>Cats, etc.</h3>
            <div className="container">
                {props.galleryList.map(picture => (
                    <GalleryItem key={picture.id} picture={picture} getGallery={getGallery}  />
                ))}
            </div>
        </section>
    )
}

export default GalleryList;