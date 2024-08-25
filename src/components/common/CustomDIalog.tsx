import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import DialogContentComponent from '../core/HomeComponent/DialogContent'


interface CustomDIalogProps {
    children: React.ReactNode
}
const CustomDIalog: React.FC<CustomDIalogProps> = ({
    children
}) => {
    return (
        <Dialog>
            <DialogTrigger>
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogContentComponent/>
            </DialogContent>
        </Dialog>

    )
}

export default CustomDIalog

