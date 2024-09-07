import { FC } from "react"
import { observer } from 'mobx-react-lite'
//MOBX
import FavoritesStore from '@/shared/store/favorites-store'
//INTERFACE
import { IProduct } from "@/shared/interfaces/IProduct"
//COMPONENTS
import { ItemTemplate } from '@/shared/ui/list/item'
//HOOKS
import { useNav } from '@/shared/hooks/useNav'

interface FavItemProps {
    item: IProduct
}

export const FavoritesItem: FC<FavItemProps> = observer(({ item }) => {

    const { toggleFavorites } = FavoritesStore

    const useNavigationFunction = useNav()

  return (
    <ItemTemplate>
      <img src={item.pictures[0]} alt="product" onClick={() => useNavigationFunction(item.id)}/>
      <p onClick={() => useNavigationFunction(item.id)}>{item.name}</p>
      <span>{item.price}</span>
      <button onClick={() => toggleFavorites(item)}>Delete</button>
    </ItemTemplate>
  )
})
