import { pgTable, text } from "drizzle-orm/pg-core";

//testing is the table having id,name as columns of type text(isko import krna zaruri hai)
export const testing = pgTable("testing",{
    id: text("id").notNull().primaryKey(),
    name: text("name"),
});