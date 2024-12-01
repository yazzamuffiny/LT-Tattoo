import { useState, useEffect } from 'react';
import axios from 'axios';

import { FaStar } from "react-icons/fa";

import PageHeader from '../components/header/PageHeader'
import Seo from '../components/navigation/Seo'

const baseURL = import.meta.env.VITE_WP_API_BASEURL;

const Reviews = () => {

  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  const [selectedImage, setSelectedImage] = useState(null);

  const endpoint = `${baseURL}/reviews?_embed`;

  useEffect(() => {
    axios.get(endpoint)
      .then(async (res) => {
        const fetchedReviews = res.data;
        setReviews(fetchedReviews);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);



  const Modal = ({ selectedImage, onClose }) => {
    const featuredImage = selectedImage?._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://via.placeholder.com/150";
   
    const renderStars = (count) => {
      return Array.from({ length: count }).map((_, index) => (
        <span key={index}><FaStar /></span>
      ));
    };
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="review-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <div className='review-modal-img'>
            <img src={featuredImage} alt={selectedImage?.title?.rendered || "Gallery Item"} />
          </div>
          <div className='review-modal-info'>
            <div className='stars'>{renderStars(selectedImage.acf.star)}</div>
            <h3>{selectedImage.title.rendered}</h3>
            <div className='review-body'>{selectedImage.acf.review_text}</div>
            <div className='review-customer'><i>-{selectedImage.acf.customer}</i></div>
          </div>
          

          
          

        </div>
      </div>
    );
  };


  const ReviewsList = ({ reviews, onImageClick }) => {
    const mappedReviews = reviews.map((review, index) => {
      function getFeaturedImage(review) {
        if (
          review &&
          review._embedded &&
          review._embedded["wp:featuredmedia"] &&
          review._embedded["wp:featuredmedia"][0].source_url
        ) {
          return review._embedded["wp:featuredmedia"][0].source_url;
        } else {
          return "https://via.placeholder.com/150";
        }
      }

      return (
        <div 
        key={review.slug + "-" + index} 
        className='review-container'
        onClick={() => onImageClick(review)}
        >
          <div
            style={{
              backgroundImage: `url(${getFeaturedImage(review)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className='review-img'
          >
            READ <br />REVIEW
            </div>
        </div>
      );
    });

    return <>{mappedReviews}</>;
  };

  return (
    <>
      <Seo
        title='Reviews - LT Tattoo'
        description='Read authentic reviews from our clients at LT Tattoo. Discover why people trust our skilled artist and exceptional service to bring their tattoo visions to life. See what others are saying!'
        url={window.location.href}
      />
      <PageHeader title='TĀTARITANGA' subtitle='REVIEWS' image_url='/header-imgs/reviews-banner.jpg' />
      <div className='reviews-page'>
        <h2>Reviews</h2>
        <div className='reviews-imgs'>
            {loading ? (
              <div className='loading-container'>
                <img src="./koru.svg" alt="Koru" />
              </div>
            ) : (
              <div className='page-grid'>
                <ReviewsList reviews={reviews} onImageClick={setSelectedImage} />
              </div>
            )}
          </div>
        {selectedImage && <Modal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />}
      </div>
    </>
  )
}

export default Reviews
