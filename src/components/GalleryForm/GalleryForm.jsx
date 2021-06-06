function GalleryForm () {


    return (
        <div>
            <form>
                <label htmlFor="urlInput">Image URL</label>
                <input id="urlInput" placeholder="image url" />
                <label htmlFor="descriptionInput">Image Description</label>
                <input id="descriptionInput" placeholder="description" />
                <button className="btn btn-dark btn-sm" type="submit" >Display</button>
            </form>
        </div>
    )
}

export default GalleryForm;