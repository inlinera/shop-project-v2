import { observer } from "mobx-react-lite"
//MOBX
import FetchProducts from '@/shared/store/products-api'
//COMPONENTS
import { ListTemplate } from '@/shared/ui/listTemplate/index'
import { CartItem } from '@/entities/products/cart/index'

export const CartList = observer(() => {
    const { cart } = FetchProducts

  return (
    <div>
      <ListTemplate>
      {cart?.map(e => <CartItem item={e} key={e.id}/>)}
      </ListTemplate>
    </div>
  )
})
