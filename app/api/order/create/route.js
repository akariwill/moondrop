import { inngest } from "@/config/inngest";
import Product from "@/models/Product";
import Order from "@/models/Order";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const { address, items } = await request.json();

    if (!address || items.length === 0) {
      return NextResponse.json({ success: false, message: "Invalid data" });
    }

    let amount = 0;
    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) continue;
      amount += product.offerPrice * item.quantity;
    }

    const totalAmount = amount + Math.floor(amount * 0.02);

    await Order.create({
      userId,
      address,
      items,
      amount: totalAmount,
      date: Date.now()
    });

    const user = await User.findById(userId);
    if (user) {
      user.cartItems = {};
      await user.save();
    }

    await inngest.send({
      name: "order/created",
      data: {
        userId,
        address,
        items,
        amount: totalAmount,
        date: Date.now()
      }
    });

    return NextResponse.json({ success: true, message: "Order placed" });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, message: error.message });
  }
}
