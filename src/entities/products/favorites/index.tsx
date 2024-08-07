import { FC } from "react"
import { observer } from 'mobx-react-lite'
//MOBX
import FavoritesStore from '@/shared/store/favorites-store'
//INTERFACE
import { IProduct } from "@/shared/interfaces/IProduct"
//COMPONENTS
import { ItemTemplate } from '@/shared/ui/list/item'

interface FavItemProps {
    item: IProduct
}

export const FavoritesItem: FC<FavItemProps> = observer(({ item }) => {

    const { toggleFavorites } = FavoritesStore;

  return (
    <ItemTemplate>
      <img src={item.pictures[0]} alt="product" />
      <p>{item.name}</p>
      <span>{item.price}</span>
      <button onClick={() => toggleFavorites(item)}>Delete</button>
    </ItemTemplate>
  )
})
