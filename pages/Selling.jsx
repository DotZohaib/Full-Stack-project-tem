import React from 'react';
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import styles for ToastContainer

const Selling = () => {
  // Function to handle 'Buy Now' button click
  const handleBuyNow = () => {
    toast.success('Successfully,Order is confirm!');
  };

  // Function to handle 'Add To Cart' button click
  const handleAddToCart = () => {
    toast.info('Item added to cart!');
  };

  return (
    <div>
      <Head>
        <title>ZenZone | Selling</title>
        <meta name="description" content="This is an E-Commerce Website like ZenZone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}

<ToastContainer />
      
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-around flex-wrap -m-4">
            <div className="lg:w-64 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img 
                  alt="ecommerce" 
                  className="object-cover object-top w-full h-full block" 
                  src="https://www.gulahmedshop.com/media/catalog/product/g/l/gls-23-196_4_.jpg?optimize=medium&fit=bounds&height=&width="
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Show Clothes</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Belly Dance Suit</h2>
                <p className="mt-1 text-lg font-bold">Prices Tag: <span className="text-green-600 ml-3">$16.00</span></p>
                <button 
                  className='bg-pink-600 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
                <button 
                  className='bg-pink-600 ml-5 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="lg:w-64 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img 
                  alt="ecommerce" 
                  className="object-cover object-top w-full h-full block" 
                  src="https://www.gulahmedshop.com/media/catalog/product/g/l/gls-23-196_4_.jpg?optimize=medium&fit=bounds&height=&width="
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Show Clothes</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Belly Dance Suit</h2>
                <p className="mt-1 text-lg font-bold">Prices Tag: <span className="text-green-600 ml-3">$16.00</span></p>
                <button 
                  className='bg-pink-600 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
                <button 
                  className='bg-pink-600 ml-5 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="lg:w-64 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img 
                  alt="ecommerce" 
                  className="object-cover object-top w-full h-full block" 
                  src="https://www.gulahmedshop.com/media/catalog/product/g/l/gls-23-196_4_.jpg?optimize=medium&fit=bounds&height=&width="
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Show Clothes</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Belly Dance Suit</h2>
                <p className="mt-1 text-lg font-bold">Prices Tag: <span className="text-green-600 ml-3">$16.00</span></p>
                <button 
                  className='bg-pink-600 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
                <button 
                  className='bg-pink-600 ml-5 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="lg:w-64 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img 
                  alt="ecommerce" 
                  className="object-cover object-top w-full h-full block" 
                  src="https://www.gulahmedshop.com/media/catalog/product/g/l/gls-23-196_4_.jpg?optimize=medium&fit=bounds&height=&width="
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Show Clothes</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Belly Dance Suit</h2>
                <p className="mt-1 text-lg font-bold">Prices Tag: <span className="text-green-600 ml-3">$16.00</span></p>
                <button 
                  className='bg-pink-600 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
                <button 
                  className='bg-pink-600 ml-5 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="lg:w-64 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img 
                  alt="ecommerce" 
                  className="object-cover object-top w-full h-full block" 
                  src="https://www.gulahmedshop.com/media/catalog/product/g/l/gls-23-196_4_.jpg?optimize=medium&fit=bounds&height=&width="
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Show Clothes</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Belly Dance Suit</h2>
                <p className="mt-1 text-lg font-bold">Prices Tag: <span className="text-green-600 ml-3">$16.00</span></p>
                <button 
                  className='bg-pink-600 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
                <button 
                  className='bg-pink-600 ml-5 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="lg:w-64 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img 
                  alt="ecommerce" 
                  className="object-cover object-top w-full h-full block" 
                  src="https://www.gulahmedshop.com/media/catalog/product/g/l/gls-23-196_4_.jpg?optimize=medium&fit=bounds&height=&width="
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Show Clothes</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Belly Dance Suit</h2>
                <p className="mt-1 text-lg font-bold">Prices Tag: <span className="text-green-600 ml-3">$16.00</span></p>
                <button 
                  className='bg-pink-600 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
                <button 
                  className='bg-pink-600 ml-5 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="lg:w-64 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img 
                  alt="ecommerce" 
                  className="object-cover object-top w-full h-full block" 
                  src="https://www.gulahmedshop.com/media/catalog/product/g/l/gls-23-196_4_.jpg?optimize=medium&fit=bounds&height=&width="
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Show Clothes</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Belly Dance Suit</h2>
                <p className="mt-1 text-lg font-bold">Prices Tag: <span className="text-green-600 ml-3">$16.00</span></p>
                <button 
                  className='bg-pink-600 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
                <button 
                  className='bg-pink-600 ml-5 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="lg:w-64 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img 
                  alt="ecommerce" 
                  className="object-cover object-top w-full h-full block" 
                  src="https://www.gulahmedshop.com/media/catalog/product/g/l/gls-23-196_4_.jpg?optimize=medium&fit=bounds&height=&width="
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Show Clothes</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Belly Dance Suit</h2>
                <p className="mt-1 text-lg font-bold">Prices Tag: <span className="text-green-600 ml-3">$16.00</span></p>
                <button 
                  className='bg-pink-600 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
                <button 
                  className='bg-pink-600 ml-5 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="lg:w-64 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img 
                  alt="ecommerce" 
                  className="object-cover object-top w-full h-full block" 
                  src="https://www.gulahmedshop.com/media/catalog/product/g/l/gls-23-196_4_.jpg?optimize=medium&fit=bounds&height=&width="
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Show Clothes</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Belly Dance Suit</h2>
                <p className="mt-1 text-lg font-bold">Prices Tag: <span className="text-green-600 ml-3">$16.00</span></p>
                <button 
                  className='bg-pink-600 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
                <button 
                  className='bg-pink-600 ml-5 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="lg:w-64 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img 
                  alt="ecommerce" 
                  className="object-cover object-top w-full h-full block" 
                  src="https://www.gulahmedshop.com/media/catalog/product/g/l/gls-23-196_4_.jpg?optimize=medium&fit=bounds&height=&width="
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Show Clothes</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Belly Dance Suit</h2>
                <p className="mt-1 text-lg font-bold">Prices Tag: <span className="text-green-600 ml-3">$16.00</span></p>
                <button 
                  className='bg-pink-600 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
                <button 
                  className='bg-pink-600 ml-5 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="lg:w-64 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img 
                  alt="ecommerce" 
                  className="object-cover object-top w-full h-full block" 
                  src="https://www.gulahmedshop.com/media/catalog/product/g/l/gls-23-196_4_.jpg?optimize=medium&fit=bounds&height=&width="
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Show Clothes</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Belly Dance Suit</h2>
                <p className="mt-1 text-lg font-bold">Prices Tag: <span className="text-green-600 ml-3">$16.00</span></p>
                <button 
                  className='bg-pink-600 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
                <button 
                  className='bg-pink-600 ml-5 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="lg:w-64 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <img 
                  alt="ecommerce" 
                  className="object-cover object-top w-full h-full block" 
                  src="https://www.gulahmedshop.com/media/catalog/product/g/l/gls-23-196_4_.jpg?optimize=medium&fit=bounds&height=&width="
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Show Clothes</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Belly Dance Suit</h2>
                <p className="mt-1 text-lg font-bold">Prices Tag: <span className="text-green-600 ml-3">$16.00</span></p>
                <button 
                  className='bg-pink-600 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
                <button 
                  className='bg-pink-600 ml-5 text-white p-2 rounded mt-2 hover:bg-pink-900' 
                  type="button" 
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Selling;
