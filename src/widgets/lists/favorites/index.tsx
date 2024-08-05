import { observer } from 'mobx-react-lite'
//MOBX
import FetchProducts from '@/shared/store/products-api'
//COMPONENTS
import { ListTemplate } from '@/shared/ui/listTemplate/index'
import { FavoritesItem } from '@/entities/products/favorites/index'


export const FavList = observer(() => {
    const { favorites } = FetchProducts;

  return (
    <div>
      <ListTemplate>
      {favorites?.map(e => <FavoritesItem item={e} key={e.id}/>)}
      </ListTemplate>
    </div>
  )
})
