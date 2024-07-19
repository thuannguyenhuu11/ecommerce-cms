'use client';
import { getProductByID } from '@/app/action';
import Loading from '@/components/Button/Loading';
import ProductPage from '@/components/ProductPage/page';
import { ProductType } from '@/lib/interface';
import React, { useEffect, useState } from 'react';

const page = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<ProductType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async (id: string) => {
      setLoading(true);
      const data = await getProductByID(parseInt(id));
      setProduct(data[0]);
      setLoading(false);
    };

    getProduct(params.id);
  }, []);

  return <div>{loading && !product ? <Loading /> : <ProductPage product={product} productId={params.id} />}</div>;
};

export default page;
