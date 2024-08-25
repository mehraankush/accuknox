import { z } from "zod"

export const formSchema = z.object({
    title: z.string().min(2).max(50),
    describe: z.string().min(2).max(200),
})

export const categoryFormSchema = z.object({
    category: z.string().min(2).max(50),
    categoryDisplayName: z.string().min(2).max(200),
})
