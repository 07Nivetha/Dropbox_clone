import {pgTable, text, uuid, integer, boolean,timestamp} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { InferModel } from "drizzle-orm";


export const files = pgTable ("files", {
    id: uuid("id").defaultRandom().primaryKey(),

    //basic file/folder information
    name: text("name").notNull(),
    path: text("path").notNull(), // /document/project/resume/
    size: integer("size").notNull(), 
    type: text("type").notNull(),//"folder"

    //storage information
    fileUrl: text("file_url").notNull(), //url to access a file 
    thumbnailUrl: text("thumbnail_url"),

    //ownership
    userId: text("user_id").notNull(),
    parentId: uuid("parent_id"), //parent folder if(null for root items)

    //file folder flags
    isFolder: boolean("is_folder").default(false).notNull(),
    isStarred: boolean("is_starred").default(false).notNull(),
    isTrash: boolean("is_trash").default(false).notNull(),

    //Timestamps
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

/*
parent : each file/folder can have one parent folder
children: each folder can have many child files/folder
*/
export const fileRelations = relations(files, ({one,many}) => ({
    parent: one(files, {
        fields: [files.parentId],
        references: [files.id]
    }),
    //retionship to child file/folder
    children: many(files)
}))

//type definitions

export const File = typeof files.$inferSelect;
export const NewFile = typeof files.$inferInsert;
export type File = InferModel <typeof files>;
