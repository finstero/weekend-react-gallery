

function GalleryList (pictures) {

    return(
        <section>
            <h3>In GalleryList</h3>
            <div>
                {pictures.galleryList.map(picture => (
                    <GalleryItem key={picture.id} picture={picture} />
                ))}
            </div>
            <button className="btn btn-dark">Like</button>
        </section>
    )
}

export default GalleryList;