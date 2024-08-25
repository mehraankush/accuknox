import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import SideBarContent from '../core/sidebar/SideBarContent';

const CustomSheet = ({
    children,
}: {
    children: React.ReactNode;
}) => {

    return (
        <Sheet>
            <SheetTrigger>
                {children}
            </SheetTrigger>
            <SheetContent className='min-w-[50vw]'>
                <SheetHeader>
                    <SheetTitle>Add Widget</SheetTitle>
                    <SheetDescription>
                        personalize your dashboard by adding the following widget
                    </SheetDescription>

                </SheetHeader>
                    <SideBarContent />
          
            </SheetContent>
        </Sheet>
    );
};

export default CustomSheet;