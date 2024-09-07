import { Suspense } from 'react'
import { Link } from "react-router-dom"
import { observer } from 'mobx-react-lite'
//COMPONENTS
import { ListTemplate } from '@/shared/ui/list/list'
import { CartItem } from '@/entities/products/cart'
import { CircularProgress } from '@mui/material'
//MOBX
import CartStore from '@/shared/store/cart-store'

export const Cart = observer(() => {

  const { cart } = CartStore

  return (
    <div className="cb">
        <Link to='/'>Back</Link>
        <Suspense fallback={<CircularProgress color="secondary" />}>
        <ListTemplate>
          {!cart.length && 'Items not found'}
          {cart?.map(e => <CartItem item={e} key={e.id}/>)}
      </ListTemplate>
        </Suspense>
    </div>
  )
})
