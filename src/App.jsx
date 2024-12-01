import { useEffect, useState } from 'react'
import './App.scss'
import { HashRouter } from 'react-router-dom'

import NavBar from './components/navigation/NavBar'
import Footer from './components/navigation/Footer'
import Links from './components/navigation/Links'

import useCustomizer from './hooks/useCustomizer'

const App = () => {

  const {fontFamily, primaryBtnColor, primaryBtnFontColor, secondaryBtnColor, socialColor, imgLineColor, footerLine} = useCustomizer();

  
  useEffect(() => {
    
    //change font based in selection
    if (fontFamily === 'New Rocker') {
      document.getElementById('headerText').style.fontFamily = `'New Rocker', system-ui`;
    }
    if (fontFamily === 'UnifrakturCook') {
      document.getElementById('headerText').style.fontFamily = `'UnifrakturCook', serif`;
    }
    if (fontFamily === 'Pirata One') {
      document.getElementById('headerText').style.fontFamily = `'Pirata One', cursive`;
    }
    if (fontFamily === 'Fondamento') {
      document.getElementById('headerText').style.fontFamily = `'Fondamento', cursive`;
    }

     // Apply primary button styles
     const primaryButtons = document.querySelectorAll('.primary');
     primaryButtons.forEach(button => {
       button.style.backgroundColor = primaryBtnColor;
       button.style.borderColor = primaryBtnColor;
       button.style.color = primaryBtnFontColor;
     });

     const secondaryButtons = document.querySelectorAll('.secondary');
     secondaryButtons.forEach(button => {
       button.style.borderColor = secondaryBtnColor;
       button.style.color = secondaryBtnColor;
     });

     //social icons
     const socialIcons = document.querySelectorAll('.socialIcon');
     socialIcons.forEach(icon => {
       icon.style.color = socialColor;
     });

     const styleTag = document.createElement('style');
     styleTag.textContent = `
       .gallery-img::before, 
       .gallery-img::after { 
         border-color: ${imgLineColor}; 
       }
     `;

     styleTag.textContent = `
       .review-img::before, 
       .review-img::after { 
         border-color: ${imgLineColor}; 
       }
     `;
     document.head.appendChild(styleTag);


     document.querySelector('footer').style.borderTopColor = footerLine;

  }, [ fontFamily, primaryBtnColor, primaryBtnFontColor, secondaryBtnColor, socialColor, imgLineColor, footerLine ]);

  return (
    <HashRouter>
      <NavBar/>
      <Links/>
      <Footer/>
    </HashRouter>
  )
}

export default App
