import { query,mutation } from "./_generated/server";
import { v } from "convex/values";
// import { text } from "stream/consumers";


export const getTask=query({

    args:{},
    handler:async (ctx) => {
        const tasks=await ctx.db.query("tasks").collect();
        return tasks;
    }

});

export const addTask=mutation({
    args:{
        text:v.string(),
    },
    handler:async(ctx,args)=>{
        const taskId= await ctx.db.insert("tasks",{text:args.text,completed:false});
        return taskId;
    },
});

export const completeTask=mutation({
    args:{
        id:v.id("tasks"),
    },
    handler:async(ctx, args) =>{
        await ctx.db.patch(args.id,{
            completed:true
        })
        
    },
});

export const deleteTask=mutation({
    args:{
        id:v.id("tasks"),
    },
        handler:async (ctx,args)=>{
            await ctx.db.delete(args.id)
     
    }
})