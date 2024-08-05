import { FC } from "react"
import { observer } from 'mobx-react-lite'
//MOBX AND TYPE
import FetchProducts, { ProductItem } from '@/shared/store/products-api'
//COMPONENTS
import { ItemTemplate } from '@/shared/ui/itemTemplate'

interface FavItemProps {
    item: ProductItem
}

export const FavoritesItem: FC<FavItemProps> = observer(({ item }) => {

    const { toggleFavorites } = FetchProducts;

  return (
    <ItemTemplate>
      <img src={item.pictures[0]} alt="product" />
      <p>{item.name}</p>
      <span>{item.price}</span>
      <button onClick={() => toggleFavorites(item)}>Delete</button>
    </ItemTemplate>
  )
})
