import { Search } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <nav className=' bg-white border-b border-slate-200'>
            <div className='flex gap-5 justify-between items-center p-2' >
                <h1   className='text-xl font-semibold'> AccuKnox</h1>

                <div className='w-full'>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <Search size={20} className='dark:text-white' />
                        </div>
                        <input
                            //   onChange={(e) => handleChange(e)}
                            //   onKeyDown={(e) => e.key === 'Enter' && handleUserQuery()}
                            type="search"
                            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for recipes..."
                            required
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar