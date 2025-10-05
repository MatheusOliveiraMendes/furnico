import React from 'react';
import ProductTabs from './ProductTabs';

const Products: React.FC = () => {
  return (
    <section className="bg-[rgba(247,247,247,1)] flex w-full flex-col items-center text-lg text-[rgba(30,30,30,1)] font-normal mt-[120px] px-20 py-[50px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <h2 className="text-[42px]">Best Selling Product</h2>
      <ProductTabs />
      <img
        src="https://api.builder.io/api/v1/image/assets/7014096b18dd4e9abcb3939bccbecaad/2fa0da9c16a0c09201a80fad7759fd8c3dc19631?placeholderIfAbsent=true"
        className="aspect-[2.54] object-contain w-full max-w-[1248px] mt-20 rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10"
        alt="Best selling products showcase"
      />
    
    </section>
  );
};

export default Products;
