"use client"
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
} from "@/components/ui/card"
import { X } from 'lucide-react'
import { ChartsComponent } from './CharsComponent'

interface CustomCardProps {
    title?: string
    description?: string
    children?: React.ReactNode,
    className?: string,
    onRemove?: () => void;
    showCross?: boolean
}

const CustomCard: React.FC<CustomCardProps> = ({
    title,
    description,
    children,
    className,
    onRemove,
    showCross = false,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
            className={`bg-white rounded-xl w-[350px] relative overflow-hidden p-2 h-[180px] ${className} ${isHovered ? 'border border-blue-200' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {showCross && isHovered && (
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-colors duration-200"
                    onClick={onRemove}
                >
                    <X size={20} />
                </button>
            )}
            {children ? (
                children
            ) : (
                <>
                        <CardContent className='flex gap-1 items-center h-full  p-0'>
                            <div className='h-full flex justify-center items-center '>
                            <ChartsComponent />
                        </div>
                        <CardDescription
                            className='flex flex-col gap-2'
                        >
                            <p className='font-semibold'>{title}</p>
                            <p className='text-xs font-light'> {description}</p>

                        </CardDescription>
                    </CardContent>
                </>
            )}
        </Card>
    )
}

export default CustomCard
