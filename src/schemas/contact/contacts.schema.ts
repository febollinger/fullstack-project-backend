import {z} from "zod";


const createContactSchema = z.object({
    name: z.string().min(3).max(60),
    email: z.string().email().max(80),
    number: z.string().max(11),
})

const returnContactSchema = createContactSchema.extend({
    id: z.number(),
    createdAt: z.string()
})

const returnAllContactsSchema = returnContactSchema.array()
const updateContactSchema = createContactSchema.partial()

export {
    createContactSchema,
    returnContactSchema, 
    returnAllContactsSchema,
    updateContactSchema
}