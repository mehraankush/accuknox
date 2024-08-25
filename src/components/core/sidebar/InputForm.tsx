"use client"
import React from 'react'
import { z } from "zod"
import { Captions, Code } from 'lucide-react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"


import { formSchema } from '@/schema';
import useDashboardStore from '@/store'
import { useSearchParams } from 'next/navigation';
import { SheetClose, SheetFooter } from '@/components/ui/sheet';
import CustomButton from '@/components/common/CustomBtn';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '@/components/ui/form'

const InputForm = () => {

    const addWidget = useDashboardStore(state => state.addWidget);
    const searchParams = useSearchParams()
    const params = searchParams.get('category');
    const { toast } = useToast()



    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            describe: ''
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        addWidget(params ?? 'CSPM', values)
        console.log(values)
        form.reset();
    }


    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='flex w-full justify-between items-center gap-2 mt-5'>

                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem className='flex-1'>
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
                    name="describe"
                    render={({ field }) => (
                        <FormItem className='flex-1'>
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


                <SheetFooter className='flex w-full justify-end gap-2 absolute bottom-5 right-5'>
                    <SheetClose asChild>
                        <CustomButton>
                            <p>Cancle</p>
                        </CustomButton>
                    </SheetClose>
                        <CustomButton
                            className='bg-blue-500 text-white'
                            type='submit'
                            onClick={() => {
                                toast({
                                    title: "Widget Saved Successfully 🥳",
                                    description: "Your widget has been saved successfully.",
                                })
                            }}
                        >
                            <p>Save</p>
                        </CustomButton>
                </SheetFooter>

            </form>
        </Form>
    )
}

export default InputForm