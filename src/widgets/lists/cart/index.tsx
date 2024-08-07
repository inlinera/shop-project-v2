import { observer } from "mobx-react-lite"
//MOBX
import CartStore from '@/shared/store/cart-store'
//COMPONENTS
import { ListTemplate } from '@/shared/ui/list/list/index'
import { CartItem } from '@/entities/products/cart/index'

export const CartList = observer(() => {
    const { cart } = CartStore

  return (
    <div>
      <ListTemplate>
      {cart?.map(e => <CartItem item={e} key={e.id}/>)}
      </ListTemplate>
    </div>
  )
})
