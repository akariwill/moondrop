import { inngest } from "@/config/inngest";
import Product from "@/models/Product";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST(requestt) {
    try {

        const {userId} = getAuth(request)
        const {address, items} = await request.json();

        if (!address || items.length === 0) {
            return NextResponse.json({success:false, message:'Invalid data'})
        }

        const amout = await items.reduce(async(acc, item)=>{
            const product = await Product.findById(item.product);
            return acc + product.offerPrice * item.quantity;
        },0)

        await inngest.send({
            name:'order/created',
            data:{
                userId,
                address,
                items,
                amount: amount + Math.floor(amount * 0.02),
                date: Date.now()
            }
        })

        const user = await User.findById(userId)
        user.cartItems = {}
        await user.save()
        
        return NextResponse.json({success:true, message:'Order placed'})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({success:false, message:'Order placed'})
    }
}