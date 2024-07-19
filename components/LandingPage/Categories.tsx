import { CategoriesBannerDataType } from '@/lib/interface';
import React from 'react';
import { LabelCard } from '../CustomCard/CustomCard';

interface CategoriesProps {
  categoriesData: CategoriesBannerDataType[];
}

const Categories: React.FC<CategoriesProps> = ({ categoriesData }) => {
  return (
    <section className="flex justify-center flex-col md:flex-row gap-4 items-center mt-6">
      {categoriesData.map((category: any) => {
        return <LabelCard customText="text-[2rem]" category={category} btnLabel="View Detail" custom="" />;
      })}
    </section>
  );
};

export default Categories;
