import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { CiShoppingCart } from "react-icons/ci";

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger aria-hidden="true" className='group -m-2 flex items-center p-2'>
        <CiShoppingCart className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500' />
        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
          6
        </span>
      </SheetTrigger>
      <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6'>
          <SheetTitle>Cart {0}</SheetTitle>
        </SheetHeader>

      </SheetContent>
    </Sheet>
  )
}

export default Cart
