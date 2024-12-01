import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext';

import wooCommerceApi from '../../wooCommerceApi';
import Cart from '../components/cart/Cart';
import PageHeader from '../components/header/PageHeader'
import Seo from '../components/navigation/Seo'


const Store = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState([])
  const { cart, addToCart } = useContext(CartContext)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await wooCommerceApi.get('/products?category=27');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      } finally {
        setLoading(false); 
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log('Updated cart:', cart);
  }, [cart]);


  const handleAddToCart = (product) => {
    addToCart(product);
  };


  return (
    <>
      <Seo
        title='Store - LT Tattoo'
        description='Shop the LT Tattoo store for premium tattoo-inspired merchandise and aftercare essentials. Explore our curated collection and find everything you need to celebrate your passion for body art.'
        url={window.location.href}
      />

      <PageHeader title='HOKOHOKO' subtitle='STORE' image_url='/header-imgs/store-banner.jpg' />

      <div className='shop-page'>
        {loading ? (
          <div className='loading-container'>
            <img src="../koru.svg" alt="Loading" className='loading-logo' />
          </div>
        ) : (
          <>
            <div className='shop-div'>
              {products.map(product => (

                <div key={product.id} className='product-card'>
                  <div className='product-img'>
                    <img src={product.images[0].src} alt={product.name} />
                  </div>
                  <div className='product-info'> 
                    <div className='product-info-top'>
                      <h4>{product.name}</h4>
                      <div dangerouslySetInnerHTML={{ __html: product.price_html }} />
                    </div>
                    <div className='product-info-bottom'>
                    {product.description && product.description.length > 0 ? (
                      <div className='product-description'>
                        <div dangerouslySetInnerHTML={{ __html: product.description}} />
                      </div>
                       ) : (
                      <div className='product-description empty'></div>
                       )}
                      <button className='primary store-button' onClick={() => handleAddToCart(product)}>ADD</button>
                    </div>
                  </div>
                </div>

              ))}
          </div>
          <div className='cart-div'>
            <Cart />
          </div>
          </>
          
        )}
        
      </div>
    </>
  )
}

export default Store
