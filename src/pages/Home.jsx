import { useState, useEffect } from 'react';

import axios from 'axios';

import HomeHeader from '../components/header/HomeHeader';
import Seo from '../components/navigation/Seo'

const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const Home = () => {
  const [loading, setLoading] = useState(true);

  const [gallery, setGallery] = useState([]);
  const [filteredGallery, setFilteredGallery] = useState([]);

  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState('');

  const [selectedImage, setSelectedImage] = useState(null);

  const endpoint = `${baseURL}/posts?_embed&per_page=100`;

  useEffect(() => {
    axios.get(endpoint)
      .then(async (res) => {
        const fetchedGallery = res.data;
        setGallery(fetchedGallery);
        setFilteredGallery(fetchedGallery);

        const uniqueStyles = new Set();
        fetchedGallery.forEach((galleryItem) => {
          const styleTerms = galleryItem._embedded?.['wp:term']?.find(
            (term) => term[0]?.taxonomy === 'style'
          );
          if (styleTerms) {
            styleTerms.forEach((style) => uniqueStyles.add(style.name));
          }
        });
        setStyles([...uniqueStyles]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleStyleFilter = (style) => {
    setSelectedStyle(style);
    if (style) {
      const filtered = gallery.filter((galleryItem) =>
        galleryItem._embedded?.['wp:term']?.some(
          (terms) =>
            terms.some((term) => term.taxonomy === 'style' && term.name === style)
        )
      );
      setFilteredGallery(filtered);
    } else {
      setFilteredGallery(gallery);
    }
  };

  const Modal = ({ selectedImage, onClose }) => {
    const featuredImage = selectedImage?._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://via.placeholder.com/150";
    
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <img src={featuredImage} alt={selectedImage?.title?.rendered || "Gallery Item"} />
        </div>
      </div>
    );
  };

  const GalleryList = ({ gallery, onImageClick }) => {
    const mappedGallery = gallery.map((galleryItem, index) => {
      function getFeaturedImage(galleryItem) {
        if (
          galleryItem &&
          galleryItem._embedded &&
          galleryItem._embedded["wp:featuredmedia"] &&
          galleryItem._embedded["wp:featuredmedia"][0].source_url
        ) {
          return galleryItem._embedded["wp:featuredmedia"][0].source_url;
        } else {
          return "https://via.placeholder.com/150";
        }
      }

      return (
        <div 
        key={galleryItem.slug + "-" + index} 
        className='gallery-container'
        onClick={() => onImageClick(galleryItem)}
        >
          <div
            style={{
              backgroundImage: `url(${getFeaturedImage(galleryItem)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className='gallery-img'
          />
        </div>
      );
    });

    return <>{mappedGallery}</>;
  };

  return (
    <div>
      <Seo
        title='Home - LT Tattoo'
        description='Welcome to LT Tattoo - your destination for custom tattoos crafted by expert artists. Explore our portfolio, book your session, and bring your unique vision to life. Start your journey today!'
        url={window.location.href}
      />
      <HomeHeader />
      
      <div className='gallery' id='gallery'>
        <h2>Gallery</h2>
        <div className='gallery-buttons'>
          <button
            className={`filter-button ${selectedStyle === '' ? 'primary' : 'secondary'}`}
            onClick={() => handleStyleFilter('')}
          >
            All Styles
          </button>
          {styles.map((style, index) => (
            <button
              key={index}
              className={`filter-button ${selectedStyle === style ? 'primary' : 'secondary'}`}
              onClick={() => handleStyleFilter(style)}
            >
              {style}
            </button>
          ))}
        </div>
        <div className='gallery-imgs'>
          {loading ? (
            <div className='loading-container'>
              <img src="./koru.svg" alt="Koru" className='koru' />
            </div>
          ) : (
            <div className='page-grid'>
              <GalleryList gallery={filteredGallery} onImageClick={setSelectedImage} />
            </div>
          )}
        </div>
      </div>

      {selectedImage && <Modal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />}
        
    </div>
  );
};

export default Home;
