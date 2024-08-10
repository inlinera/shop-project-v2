import React from 'react'
import { Link } from "react-router-dom"
//COMPONENTS
import { CircularProgress } from '@mui/material'
const List = React.lazy(() => import('@/widgets/lists/favorites/index'))

export const Favorites = () => {

  return (
    <div className="cb">
        <Link to='/'>Back</Link>
        <React.Suspense fallback={<CircularProgress color="secondary"/>}>
        <List />
        </React.Suspense>
    </div>
  )
}
