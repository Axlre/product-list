import {create} from "zustand"


export const useCartStore = create((set) => ({

  isClose: true,
  cart: [],
  toggleClose: () => set((state) => ({isClose: !state.isClose})),
  addItemToCart: (newItem) => set((state) => ({
    cart: [...state.cart, newItem]
  }))
}))

