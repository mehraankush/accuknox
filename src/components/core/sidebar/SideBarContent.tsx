"use client";
import React, { useEffect } from 'react';
import InputForm from './InputForm';
import useDashboardStore from '@/store';
import { useSearchParams, useRouter } from 'next/navigation';

const SideBarContent = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const { categories } = useDashboardStore();


    const handleCategoryClick = (newCategory: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('category', newCategory);
        router.push(`?${params.toString()}`, { scroll: false });
    };

    useEffect(() => {
        if (!category) {
            handleCategoryClick(categories[0].category);
        }
    }, [categories,category]);

    

    return (

        <div>
            <div className='flex gap-5 text-xs border-b-2 overflow-x-auto'>
                {categories.map((cate, i) => (
                    <p
                        key={i}
                        className={`cursor-pointer transition-all ease-in-out duration-200 p-1 ${category === cate.category ? 'border-b-2 border-blue-600' : ''}`}
                        onClick={() => handleCategoryClick(cate.category)}
                    >
                        {cate.category}
                    </p>
                ))}
            </div>

            <InputForm/>

            <div className='pt-3 space-y-2 flex flex-col gap-3'>
                {categories.find((item) => item.category === category)?.widgets?.map((widget, i) => (
                    <div key={i}>
                        <h3 className='text-sm'>{widget.title}</h3>
                        <p className='text-xs font-light text-slate-300'>{widget.describe}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideBarContent