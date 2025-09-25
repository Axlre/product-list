import { CartItem } from "./cart-items"
import { CartTotal } from "./cart-total"
import { CartButton } from "./cart-button"
import { useCartStore } from "../store/cart.store"

export const Cart = () => {

  const {toggleClose} = useCartStore()

  return (
   <div className='bg-Rose-50 p-6 rounded-xl'>
       <h2 className="text-Red font-bold text mb-6">Your Cart (7)</h2>
       <CartItem/>
       <CartItem/>
       <CartItem/>
       <CartTotal/>
       <div className="flex justify-between items-center my-6">
        <p className="text-sm">Order Total</p>
        <p className="text-2xl font-bold">$46.50</p>
       </div>
       <div className="bg-Rose-100 rounded-lg flex items-center gap-1 p-4 mb-6 ">
        <img src="/public/assets/images/icon-carbon-neutral.svg" alt="" />
        <p className="text-sm">This is a <span className="font-bold">carbon neutral</span> delivery</p>
       </div>
       <CartButton onClick={toggleClose} text="Confirm Order"/>
   </div>
  )
}
