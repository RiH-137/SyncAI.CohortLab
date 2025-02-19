import { boolean, serial, varchar } from "drizzle-orm/pg-core"
import { pgTable } from "drizzle-orm/pg-core"
export const USER_TABLE=pgTable('user',{
    id:serial().primaryKey(),
    name:varchar(655).notNull(),
    email:varchar(655).notNull().unique(),
    isMember:boolean().default(false),
    
})