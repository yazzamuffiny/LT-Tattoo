import { useState, useEffect } from "react";
import axios from 'axios'

const useCustomizer = () => {
    const [fontFamily, setFontFamily] = useState('')
    const [primaryBtnColor, setPrimaryBtnColor] = useState('')
    const [primaryBtnFontColor, setPrimaryBtnFontColor] = useState('')
    const [secondaryBtnColor, setSecondaryBtnColor] = useState('')
    const [socialColor, setSocialColor] = useState('')
    const [imgLineColor, setImgLineColor] = useState('')
    const [footerLine, setFooterLine] = useState('')

    const baseUrl = import.meta.env.VITE_WP_BASEURL;

    useEffect(() => {
        axios
            .get(`${baseUrl}wp-json/custom-theme/v1/customizer-settings`)
            .then((response) => {
                const { fontFamily, primaryButtonColor, primaryButtonFontColor, secondaryButtonColor, socialIconColor, lineColor, footerLineColor} = response.data;              
                setFontFamily(fontFamily)
                setPrimaryBtnColor(primaryButtonColor)
                setPrimaryBtnFontColor(primaryButtonFontColor)
                setSecondaryBtnColor(secondaryButtonColor)
                setSocialColor(socialIconColor)
                setImgLineColor(lineColor)
                setFooterLine(footerLineColor)
               
            })
            .catch((error) => {
                console.error('error fetching customizer settings', error)
            });
    }, [baseUrl]);
    return { fontFamily, primaryBtnColor, primaryBtnFontColor, secondaryBtnColor, socialColor, imgLineColor, footerLine }
 };

 export default useCustomizer;