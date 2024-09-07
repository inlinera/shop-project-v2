import { Suspense, lazy } from 'react'
import { Link } from "react-router-dom"
//COMPONENTS
import { CircularProgress } from '@mui/material'
const List = lazy(() => import('@/widgets/lists/favorites/index'))

export const Favorites = () => {

  return (
    <div className="cb">
        <Link to='/'>Back</Link>
        <Suspense fallback={<CircularProgress color="secondary"/>}>
        <List />
        </Suspense>
    </div>
  )
}
