import React from 'react'
import PageHeader from '../components/header/PageHeader'
import Seo from '../components/navigation/Seo'

const About = () => {
  return (
    <>
      <Seo
        title='About - LT Tattoo'
        description='Discover LT Tattoo, where passion meets artistry. Learn about our expert tattoo artist, commitment to quality, and dedication to creating custom designs that reflect your unique story. Explore our studio today!'
        url={window.location.href}
      />

      <PageHeader title='KO WAI AHAU' subtitle='ABOUT ME' image_url='/header-imgs/about-banner.jpg' />
      <div className='about-page'>
        <div className='about-info'>
          <p>Based in Kaitaia, originally from Christchurch, Lone is a skilled tattoo artist dedicated to preserving the rich heritage of Tā Moko.</p>
          <br />
          <p>With deep respect for the cultural significance of each design, he works closely with clients to create pieces that honor their whakapapa and personal journey. His art is not just a livelihood but a means of supporting his family, whom he holds at the heart of everything he does.</p>
          <br />
          <p>Grounded in tikanga Māori, Lone combines tradition and creativity, ensuring each Tā Moko tells a meaningful story and connects to the wearer's identity.</p>
          <br />
          <p>Lone is passionate about the art of tā moko, bringing a contemporary touch to traditional Māori tattooing while staying true to its deep cultural roots. His journey began in Christchurch, where he developed his craft, and he now calls Kaitaia home, creating unique designs for locals and visitors alike. </p>
          <br />
          <p>Family is at the core of his work; his artistry allows him to support and nurture his loved ones while upholding the traditions passed down through generations. Every design is a collaboration, weaving the client’s personal story with Māori symbolism to create a taonga (treasure) that honors identity, heritage, and connection.</p>
        </div>

        <div className='about-img'>
          <img src="./about-img.jpg" alt="Lonetinei Taiulu" />
        </div>
      </div>
    </>
  )
}

export default About
