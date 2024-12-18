import { query,mutation } from "./_generated/server";
import { v } from "convex/values";
// import { text } from "stream/consumers";


export const getProduct=query({

    args:{},
    handler:async (ctx) => {
        const products=await ctx.db.query("products").collect();
        return products;
    }

});

export const addProduct=mutation({
    args:{
        name:v.string(),
        price:v.number()
    },
    handler:async(ctx,args)=>{
        const ProductId= await ctx.db.insert("products",{name:args.name,price:args.price});
        return ProductId;
    },
});

