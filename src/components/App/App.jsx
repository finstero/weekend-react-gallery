import React, { useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';


function App() {
    const [galleryList, setGalleryList] = useState([]);



    const getGallery = () => {
      console.log(('in getGallery'));
      axios.get('/gallery')
      .then(response => {
        console.log('logging response data in get', response.data);
        setGalleryList(response.data);
      })
      .catch(error => {
        alert('error getting gallery');
        console.log('error in get', error);
      });
    }


    useEffect(() => {
      getGallery();
    }, []);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of Furry Demons</h1>
        </header>
        <section>
          <GalleryForm getGallery={getGallery}/>
        </section>
        <GalleryList galleryList={galleryList} getGallery={getGallery}/>
      </div>
    );
}

export default App;
