require("dotenv").config();
import Stripe from "stripe";
const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function checkout(req, res) {
  if (req.method === "POST") {
    const { cart } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cart.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.name,
              description: item.description,
              images: [item.image],
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),

      mode: "payment",
      success_url: `http://localhost:3000?success=true`,

      cancel_url: `http://localhost:3000/cart?cancelled=true`,
    });

    res.json({ id: session.id });
  }
}
