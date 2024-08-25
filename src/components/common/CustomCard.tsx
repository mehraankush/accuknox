"use client"
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { X } from 'lucide-react'

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
            className={`bg-white rounded-xl w-[350px] relative overflow-hidden p-2 h-[180px] ${className}`}
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
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </>
            )}
        </Card>
    )
}

export default CustomCard
