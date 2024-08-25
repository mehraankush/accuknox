"use client"
import React from 'react'
import CustomCard from '@/components/common/CustomCard'
import CustomButton from '@/components/common/CustomBtn'
import { Plus } from 'lucide-react'
import CustomSheet from '@/components/common/CustomSheet'
import useDashboardStore from '@/store'

const DisplayAllCategories = () => {
    const { categories, removeWidget } = useDashboardStore();

    console.log("CATEGORIES", categories)

    const handleRemoveWidget = (category: string, widgetTitle: string) => {
        removeWidget(category, widgetTitle);
    };

    return (
        <div className=' w-full'>
            <div className='w-full'>
                {
                    categories.map((data, i) => (
                        <div key={i} className='flex flex-col gap-2 mt-5 w-full '>
                            <p className="text-lg font-medium text-slate-600">{data.categoryDisplayName}</p>
                            <div className='flex gap-5  w-full'>

                                <div className='grid  md:grid-cols-2 lg:grid-cols-3  border w-full border-black gap-5  pb-4'>
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
                                                {/* <CustomButton className='flex gap-1 text-slate-500'>
                                                    <p className=''>Add Widget</p>
                                                    <Plus size={20} />
                                                </CustomButton> */}
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