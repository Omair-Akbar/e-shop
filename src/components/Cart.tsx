import React from 'react'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { CiShoppingCart } from "react-icons/ci";
import { Separator } from './ui/separator';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import Image from 'next/image';

const Cart = () => {

const fee =1  
const itemCount = 0



  return (
    <Sheet>
      <SheetTrigger aria-hidden="true" className='group -m-2 flex items-center hover:bg-blue-50 p-2 rounded-sm'>
        <CiShoppingCart className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500' />
        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
          {itemCount}
        </span>
      </SheetTrigger>
      <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6'>
          <SheetTitle>Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? <>
        <div className='flex w-full flex-col pr-6'>Cart Items</div>
        <div className='space-y-6 pr-6'>
          <Separator/>
          <div className='space-y-1.5 pr-6'>
          <div className="flex"><span className='flex-1'>Shipping</span>Free<span></span></div>
          <div className="flex"><span className='flex-1'>Transistion Fee</span>{formatPrice(fee)}<span></span></div>
          <div className="flex"><span className=' font-semibold flex-1'>Total</span >{formatPrice(fee)}<span className="font-semibold "></span></div>

          </div>
          <SheetFooter>
            <SheetTrigger asChild>
              <Link
                    href='/cart'
                    className={buttonVariants({
                      className: 'w-full',
                    })}>
                    Continue to Checkout
                  </Link>
                  </SheetTrigger>
          </SheetFooter>
        </div>
        </>:( 
        <><div className='flex h-full flex-col items-center justify-center space-y-1'>
            <div
              aria-hidden='true'
              className='relative mb-4 h-60 w-60 text-muted-foreground'>
              <Image
                src='/hippo-empty-cart.png'
                fill
                alt='empty shopping cart hippo'
              />
            </div>
            <div className='text-xl font-semibold'>
              Your cart is empty
            </div>
            <SheetTrigger asChild>
              <Link
                href='/products'
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className:
                    'text-sm text-muted-foreground',
                })}>
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div></>
        )
        }
      </SheetContent>
    </Sheet>
  )
}

export default Cart
