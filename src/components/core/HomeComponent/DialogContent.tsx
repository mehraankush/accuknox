"use client"
import React from 'react'
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { Captions, Code } from 'lucide-react'
import { zodResolver } from "@hookform/resolvers/zod"

import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '@/components/ui/form'

import useDashboardStore from '@/store'
import CustomButton from '@/components/common/CustomBtn';
import { categoryFormSchema } from '@/schema'
import { useToast } from '@/components/ui/use-toast'


const DialogContentComponent = () => {

    const { addCategory } = useDashboardStore();
    const { toast } = useToast()

    const form = useForm<z.infer<typeof categoryFormSchema>>({
        resolver: zodResolver(categoryFormSchema),
        defaultValues: {
            category: "",
            categoryDisplayName: ''
        },
    })

    function onSubmit(values: z.infer<typeof categoryFormSchema>) {
        // addCategory(params ?? 'CSPM', values)
        // console.log(values)
        addCategory(values.category, values.categoryDisplayName)
    }

    return (
        <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </DialogDescription>
            <DialogContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='w-full mt-5 px-5 space-y-5 p-5'>

                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem >
                                    <FormControl>
                                        <div>
                                            <label htmlFor="title" className="text-sm mb-1 text-slate-500 font-medium">
                                                Title
                                                <span className='text-yellow-500'>*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                    <Captions />
                                                </div>
                                                <input
                                                    {...field}
                                                    type="text"
                                                    id="title"
                                                    name='title'
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="widget title"
                                                />
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="categoryDisplayName"
                            render={({ field }) => (
                                <FormItem >
                                    <FormControl>
                                        <div >
                                            <label htmlFor="description" className="text-sm mb-1 text-slate-500 font-medium">
                                                Description
                                                <span className='text-yellow-500'>*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                                    <Code />
                                                </div>
                                                <input
                                                    {...field}
                                                    type="text"
                                                    id="description"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " placeholder="This widget is for ..."
                                                    name='description'
                                                />
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <DialogFooter className='flex w-full justify-end gap-2 '>
                            <DialogClose asChild>
                                <CustomButton>
                                    <p>Cancle</p>
                                </CustomButton>
                            </DialogClose>
                            <DialogClose>
                                <CustomButton
                                    className='bg-blue-500 text-white'
                                    type='submit'
                                    onClick={() => {
                                        toast({
                                            title: "Category Saved Successfully 🥳",
                                            description: "Your widget has been saved successfully.",
                                        })
                                    }}
                                >
                                    <p>Save</p>
                                </CustomButton>
                            </DialogClose>
                        </DialogFooter>

                    </form>
                </Form>
            </DialogContent>
        </DialogHeader>
    )
}

export default DialogContentComponent