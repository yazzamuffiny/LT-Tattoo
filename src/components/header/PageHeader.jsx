import React from 'react'

const PageHeader = ({title, subtitle, image_url}) => {
  return (
    <div 
        className='header-section' 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${image_url})`}}
    >
        <h1 id='headerText'>{title}</h1>
        <h3 id='headerText'>{subtitle}</h3>
    </div>
  )
}

export default PageHeader
