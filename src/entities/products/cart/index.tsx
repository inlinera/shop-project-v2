import { FC } from 'react'
import { observer } from 'mobx-react-lite'
//MOBX AND TYPE
import FetchProducts, { ProductItem } from '@/shared/store/products-api'
//COMPONENTS
import { ItemTemplate } from '@/shared/ui/itemTemplate'

interface CartItemProps {
    item: ProductItem
}

export const CartItem: FC<CartItemProps> = observer(({ item }) => {

  const { toggleCart } = FetchProducts
  
  return (
    <ItemTemplate>
      <img src={item.pictures[0]} alt="product" />
      <p>{item.name}</p>
      <span>{item.price}</span>
      <button onClick={() => toggleCart(item)}>Delete</button>
    </ItemTemplate>
  );
})
