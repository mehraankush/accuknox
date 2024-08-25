"use client"
import React from 'react'
import { Search } from 'lucide-react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"
import useDashboardStore from '@/store'


const Navbar = () => {
    const { setSearchTerm } = useDashboardStore()

    const handleChange = (search: string) => {
        setSearchTerm(search)
    }

    return (
        <nav className=' bg-white border-b border-slate-200  p-2 px-3' >
            <div className='flex gap-5 justify-between items-center p-2' >
                <h1 className='text-xl font-semibold'> AccuKnox</h1>

                <div className='w-3/5'>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <Search size={20} className='dark:text-white' />
                        </div>
                        <input
                            onChange={(e) => handleChange(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleChange((e.target as HTMLInputElement).value);
                                }
                            }}
                            type="search"
                            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Search for recipes..."
                            required
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>AN</AvatarFallback>
                        </Avatar>
                        <div className="font-medium ">
                            <div>Ankush Mehra</div>
                            <div className="text-sm text-gray-500 ">Joined in August 2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar