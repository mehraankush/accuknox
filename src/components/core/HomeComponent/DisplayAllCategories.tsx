"use client"
import React from 'react'
import CustomCard from '@/components/common/CustomCard'
import CustomButton from '@/components/common/CustomBtn'
import { Plus } from 'lucide-react'
import CustomSheet from '@/components/common/CustomSheet'
import useDashboardStore from '@/store'
import { useRouter, useSearchParams } from 'next/navigation'

const DisplayAllCategories = () => {
    const { categories, removeWidget, getFilteredWidgets } = useDashboardStore();
    const filteredWidgets = getFilteredWidgets();
    const router = useRouter()


    // console.log("CATEGORIES", categories)

    const handleRemoveWidget = (category: string, widgetTitle: string) => {
        removeWidget(category, widgetTitle);
    };

    const displayWidgets = filteredWidgets.length > 0 ? filteredWidgets : categories

    const handleCategoryClick = (newCategory: string) => {
        const params = new URLSearchParams();
        params.set('category', newCategory);
        router.push(`?${params.toString()}`);
    };

    return (
        <div className=' w-full'>
            <div className='w-full'>
                {
                    displayWidgets.map((data, i) => (
                        <div key={i} className='flex flex-col gap-2 mt-5 w-full '>
                            <p className="text-lg font-medium text-slate-600">{data.categoryDisplayName}</p>
                            <div className='flex gap-5  w-full'>
                                <div className='grid  md:grid-cols-2 lg:grid-cols-3  w-full gap-5  pb-4'>
                                    {
                                        data.widgets.map((widget, i: number) => (
                                            <CustomCard
                                                key={i}
                                                title={widget.title}
                                                showCross
                                                description={widget.describe}
                                                onRemove={() => handleRemoveWidget(data.category, widget.title)}
                                            />
                                        ))
                                    }
                                    <div>
                                        <CustomSheet>
                                            <CustomCard className='bg-white/50'>
                                                <div className='h-full w-full flex justify-center items-center'>
                                                    <CustomButton
                                                        className='flex gap-1 text-slate-500'
                                                        onClick={() => handleCategoryClick(data.category)}
                                                    >
                                                        <p className=''>Add Widget</p>
                                                        <Plus size={20} />
                                                    </CustomButton>
                                                </div>
                                            </CustomCard>
                                        </CustomSheet>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DisplayAllCategories