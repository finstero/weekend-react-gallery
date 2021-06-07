import axios from 'axios';
import './GalleryItem.css';
import { useState } from 'react';
import Button from '@material-ui/core/Button';

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

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this image!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Your image has been deleted!", {
                icon: "success",
              });

              axios.delete(`/gallery/delete/${props.picture.id}`)
              .then( response => {
                  console.log('response in delete', response);
                  props.getGallery();
              })
              .catch(error => {
                  console.log('error in delete', error);
              })
            } else {
            //   swal("Your image is safe!");
            }
          });
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
                        <div onClick={handleImageClick} className="description" width="200" height="200">{props.picture.description}</div>
                    ) : (
                        <img onClick={handleImageClick} className="galleryImage" src={props.picture.path} width="200" height="200"/>
                    )}
                </div>
                <div className="button-div">
                    <Button onClick={handleLike} size="small" className="item-info button">Like</Button>
                    {/* <button onClick={handleLike} className="button btn btn-dark btn-sm">Like</button> */}
                    {/* <button onClick={handleDelete} className="button btn btn-dark btn-sm">Delete</button> */}
                    <Button onClick={handleDelete} size="small" className="item-info button">delete</Button>
                    <span className="item-info">{props.picture.likes} likes</span>
                </div>
            </div>
        </>
    )
}

export default GalleryItem;