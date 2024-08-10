import { FC, useCallback } from 'react'
import { observer } from 'mobx-react-lite'
//MOBX
import CartStore from '@/shared/store/cart-store'
//INTERFACE
import { IProduct } from '@/shared/interfaces/IProduct'
//COMPONENTS
import { ItemTemplate } from '@/shared/ui/list/item'

interface CartItemProps {
    item: IProduct
}

export const CartItem: FC<CartItemProps> = observer(({ item }) => {

  const { toggleCart } = CartStore

  const hadleClick = useCallback(() => toggleCart(item), [item])

  return (
    <ItemTemplate>
      <img src={item.pictures[0]} alt="product" />
      <p>{item.name}</p>
      <span>{item.price}</span>
      <button onClick={hadleClick}>Delete</button>
    </ItemTemplate>
  )
})
