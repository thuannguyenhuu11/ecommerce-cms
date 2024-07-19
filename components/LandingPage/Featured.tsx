import { ProductType } from '@/lib/interface';
import React from 'react';
import { ProductCard } from '../CustomCard/CustomCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Link from 'next/link';
interface FeaturedProps {
  featuredProducts: ProductType[];
}

const Featured: React.FC<FeaturedProps> = ({ featuredProducts }) => {
  return (
    <section className="flex flex-col items-center mt-12 font-Outfit">
      <p className="text-[1.5rem] md:text-[3rem] font-normal">Featured</p>

      <div className="">
        <ProductList products={featuredProducts} />
      </div>
      <Link href={'/featured'} className="my-16 font-light text-[1.5rem]">
        Shop more
      </Link>
    </section>
  );
};

export default Featured;

interface ProductListProps {
  products: ProductType[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
      {/* Desktop */}
      <div className="md:col-start-2 md:col-span-4 product-carousel">
        {products?.map((product: ProductType) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      {/* Mobile */}
      <Carousel className="md:hidden mt-6 max-w-[16rem]">
        <CarouselContent>
          {Array?.from(products)?.map((product: ProductType, index) => (
            <CarouselItem key={product.id}>
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};
