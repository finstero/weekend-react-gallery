function GalleryForm () {


    return (
        <div>
            <form>
                <label></label>
                <input id="urlInput" placeholder="image url" />
                <label></label>
                <input id="descriptionInput" placeholder="description" />
                <button className="btn btn-dark btn-sm">Display</button>
            </form>
        </div>
    )
}

export default GalleryForm;