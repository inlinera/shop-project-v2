import { Suspense } from 'react'
import { Link } from "react-router-dom"
import { observer } from 'mobx-react-lite'
//COMPONENTS
import { ListTemplate } from '@/shared/ui/list/list'
import { FavoritesItem } from '@/entities/products/favorites'
import { CircularProgress } from '@mui/material'
//MOBX
import FavoritesStore from '@/shared/store/favorites-store'

export const Favorites = observer(() => {

  const { favorites } = FavoritesStore

  return (
    <div className="cb">
        <Link to='/'>Back</Link>
        <Suspense fallback={<CircularProgress color="secondary"/>}>
        <ListTemplate>
          {!favorites.length && 'Items not found'}
          {favorites?.map(e => <FavoritesItem item={e} key={e.id}/>)}
      </ListTemplate>
        </Suspense> 
    </div>
  )
})
