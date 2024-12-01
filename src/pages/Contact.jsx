import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";

import PageHeader from '../components/header/PageHeader'
import Seo from '../components/navigation/Seo'


const Contact = () => {

  return (
    <>
      <Seo
        title='Gift Vouchers - LT Tattoo'
        description='Get in touch with LT Tattoo! Reach out to our team for inquiries, bookings, or general information. We are here to help you start your tattoo journey. Contact us today!'
        url={window.location.href}
      />
      <PageHeader title='WHAKAUI' subtitle='CONTACT' image_url='/header-imgs/contact-banner.jpg' />
      <div className='contact-page'>

        <div className='map-container'>
          <h2>Shop Location</h2>
          <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6526.973578957661!2d173.2580548433172!3d-35.11952391537716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d097570b005d8b9%3A0x42930b6ae564f2f2!2sLonetaiulutatau!5e0!3m2!1sen!2snz!4v1732596021820!5m2!1sen!2snz" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        
        <div className='contact-container'>
          <h2>Contact</h2>
          <div className='contact-info'>         
            <h4>Email:</h4>
            <p>Lonetineitaiulu@gmail.com</p>
            <br />
            <h4>Address:</h4>
            <p>
              Shop 4
              <br />
              42 Commerce Street
              <br />
              Kaitaia 0410
            </p>
            <br />
            <h4>Hours:</h4>
            <p>
              Monday: Closed
              <br />
              Tuesday: 10am-4pm 
              <br />
              Wednesday: 10am-5pm
              <br />
              Thursday: 10am-5pm
              <br />
              Friday: 10am-5pm
              <br />
              Saturday: 10am-2pm
              <br />
              Sunday: Closed
              <br />
            </p>
            <div className='social-icons'>
              <a href="https://www.instagram.com/lonetaiulu_tattoo/" target="_blank"><AiFillInstagram className='socialIcon'/></a>
              <a href="https://www.facebook.com/LonetaiuluTattoo" target="_blank"><AiFillFacebook className='socialIcon'/></a>
              <a href="https://www.tiktok.com/@lonetaiulu_tatau" target="_blank"><AiFillTikTok className='socialIcon'/></a>  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
