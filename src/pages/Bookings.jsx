import {useState} from 'react'

import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast'

import PageHeader from '../components/header/PageHeader'
import Seo from '../components/navigation/Seo'

const Bookings = () => {

  const serviceID = import.meta.env.VITE_FORM_SERVICE_ID;
  const templateID = import.meta.env.VITE_FORM_TEMPLATE_ID;
  const formAPIKey = import.meta.env.VITE_FORM_API_KEY;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
});

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
}

const handleSubmit = e => {
    e.preventDefault()

    emailjs
        .send(
          serviceID,
          templateID,
          formData,
          formAPIKey
        )
        .then(
            (response) => {
                toast.success('Sent Successfully', {
                    style: {
                      border: '2px solid #9A0404',
                      padding: '16px',
                      color: '#FFFFFF',
                      backgroundColor: '#000000',
                    },
                    iconTheme: {
                      primary: 'white',
                      secondary: 'black',
                    },
                  });
                setFormData({name: '', email: '', subject: '', message: ''});
            },
            (error) => {
                toast.error('Failed to send message. Please try again')
            }
        );
};
  return (
    <>
      <Seo
        title='Bookings - LT Tattoo'
        description='Book your tattoo appointment at LT Tattoo with ease. Schedule a session with our skilled artist and take the first step toward bringing your custom design to life. Secure your spot today!'
        url={window.location.href}
      />

      <PageHeader title='TĀPUI' subtitle='BOOKINGS' image_url='/header-imgs/bookings-banner.jpg' />

      <div className='booking-page'>
        <div className='price-container'> 
          <h2>Pricing Info</h2>
          <div className='price-info'>
            Prices for tattoos can vary. 
            <br />
            We operate a custom shop, so we cannot offer a generic price for every tattoo. We must give estimates based on the size, technicality, supplies used and time involved. 
            <br />
            <br />
            Prices start with our shop minimum of $80 and ranging upwards to the thousands for very large projects. The artist can give a rough estimate based on a description of the project you are asking about.
            <br />
            <br />
            We encourage clients to book a consultation to discuss their tattoo ideas in detail. During the consultation, the artist can provide a more accurate quote tailored to your design. This also allows us to address any questions, refine your concept, and ensure you receive a unique, high quality tattoo that you'll love for years to come.
          </div>
        </div>

        <div className='form-container'>
          <h2>Booking Inquiry Form</h2>
          <div className='form-div'>
            <Toaster position='top-center'/>
            <form onSubmit={handleSubmit} className='form'>
              <label htmlFor='name'>Name:</label>
              <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      id='name'
                      required
                  />
              <label htmlFor='email'>Email:</label>
              <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      id='email'
                      required
                  />
              <label htmlFor='subject'> Subject: </label>
              <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      id='subject'
                      required
                  />
              <label htmlFor='message'> Message:</label>
                  <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      id='message'
                      required
                  />
              <button className='primary form-button' type='submit'> Send Message </button>
            </form>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Bookings
