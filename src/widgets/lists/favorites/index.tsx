import { observer } from 'mobx-react-lite'
//MOBX
import FavoritesStore from '@/shared/store/favorites-store'
//COMPONENTS
import { ListTemplate } from '@/shared/ui/list/list/index'
import { FavoritesItem } from '@/entities/products/favorites/index'


export const FavList = observer(() => {
    const { favorites } = FavoritesStore

  return (
    <div>
      <ListTemplate>
      {favorites?.map(e => <FavoritesItem item={e} key={e.id}/>)}
      </ListTemplate>
    </div>
  )
})
