import { Link } from "react-router-dom"
//COMPONENTS
import { FavList } from '@/widgets/lists/favorites/index'

export const Favorites = () => {

  return (
    <div className="cb">
        <Link to='/'>Back</Link>
       <FavList />
    </div>
  )
}
