// src/hooks/useFetchLogo.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_WP_BASEURL;

const useFetchLogo = () => {
    const [logoUrl, setLogoUrl] = useState('');

    useEffect(() => {
        const fetchLogo = async () => {
            try {
                const response = await axios.get(`${baseUrl}wp-json/custom/v1/nav-logo`);
                if (response.status === 200 && response.data.length > 0) {
                    setLogoUrl(response.data[0]);
                } else {
                    console.error('No logo found in response');
                }
            } catch (error) {
                console.error('Error fetching logo URL', error);
            }
        };

        fetchLogo();
    }, []);

    return logoUrl;
};

export default useFetchLogo;
