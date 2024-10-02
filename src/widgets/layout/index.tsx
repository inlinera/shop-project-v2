import { Link } from 'react-router-dom'
import cl from './index.module.scss'
import { observer } from 'mobx-react-lite'
//MOBX
import CartStore from '@/shared/store/cart-store'
import FavoritesStore from '@/shared/store/favorites-store'
//ICONS
import { ShoppingCart, Heart } from 'lucide-react'

export const Layout = observer(() => {

  const { cart } = CartStore
  const { favorites } = FavoritesStore

  return (
    <nav className={`${cl.layout_navbar} aic`}>
      <h2>znline!</h2>
      <div className={cl.layout_navbar__links}>
      <Link to='/cart'>
        <button>
          <ShoppingCart
          size={'20px'}
          />
          <span>
            {cart.length}
          </span>
        </button>
      </Link>
        <Link to='/favorites'>
        <button>
        <Heart
        size={'20px'}
        />
        <span>
        {favorites.length}
      </span>
        </button>
    </Link>
      </div>
    </nav>
  )
})