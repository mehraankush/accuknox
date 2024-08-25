import React from 'react'
import { EllipsisVertical, Plus, RefreshCw } from 'lucide-react'
import CustomButton from './CustomBtn'
import CustomSheet from './CustomSheet'
import CustomDIalog from './CustomDIalog'

const InternalNavbar = () => {
    return (
        <nav className="flex justify-between px-5 mt-5">
            <p className='text-xl font-semibold text-slate-700'>CNNAP Dashboard</p>
            <div className="flex gap-2 items-center">
                
                <CustomDIalog>
                    <CustomButton
                        icon={Plus}
                    >
                        <p>Add Category</p>
                    </CustomButton>
                </CustomDIalog>
                
                <CustomSheet>
                    <CustomButton
                        icon={Plus}
                    >
                        <p>Add Widget</p>
                    </CustomButton>
                </CustomSheet>

                <div className='bg-white rounded p-2 cursor-pointer hover:bg-accent hover:text-accent-foreground border'>
                    <RefreshCw size={20} />
                </div>
                <div className='bg-white rounded p-2 cursor-pointer hover:bg-accent hover:text-accent-foreground border'>
                    <EllipsisVertical size={20} />
                </div>
            </div>
        </nav>
    )
}

export default InternalNavbar