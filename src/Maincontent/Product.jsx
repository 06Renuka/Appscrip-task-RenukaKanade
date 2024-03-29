// Product.jsx
import React from 'react';
import ProductData from '../Assets/ProductData';
import './Product.css'; // Import CSS file for styling

function Product({ isSidebarOpen }) {
  //const columns = ProductData.length > 3 ? "grid-cols-4" : "grid-cols-3";
  const columns = isSidebarOpen ? (ProductData.length > 3 ? "grid-cols-3" : "grid-cols-2") : (ProductData.length > 3 ? "grid-cols-4" : "grid-cols-3");
  return (
    <div className="px-5 w-full max-md:max-w-full">
      <div className={`grid gap-5 max-md:flex-col max-md:gap-0 ${columns}`}>
        {ProductData.map((product, index) => (
          // Show only three products when sidebar is open
          (isSidebarOpen && index >= 3) ? null : (
            <div key={product.id} className="product-container">
              <div className="product-image-container">
                <img
                  loading="lazy"
                  src={product.Productimage}
                  className="product-image"
                  alt={product.name}
                />
              </div>
              <div className="product-details bg-white">
                <div className="text-lg font-bold uppercase whitespace-nowrap text-ellipsis text-stone-800" >
                  {product.name}
                </div>
                <div className="mt-2 text-sm underline  text-zinc-500" style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between' }}>
                  <div>

                    <span className="text-zinc-500">Sign in</span>
                    <span className="text-zinc-500">

                      or Create an account to see pricing
                    </span>
                  </div>
                  <img
                    
                    src={product.image}
                    className="liked-icon"
                    
                    alt="Liked"
                  />


                </div>


              </div>


            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default Product;
