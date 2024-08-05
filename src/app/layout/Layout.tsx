import {Link} from 'react-router-dom'
import cl from './Layout.module.scss'
//MOBX
import FetchProducts from '@/shared/store/products-api'
//ICONS
import { ShoppingCart, Heart } from 'lucide-react';
import { observer } from 'mobx-react-lite';

export const Layout = observer(() => {
  const { cart, favorites } = FetchProducts
  

  return (
    <nav className={`${cl.layout_navbar} aic`}>
      <h2>znline!</h2>
      <div className={cl.layout_navbar__links}>
      <Link to='/cart'>
        <button>
          <ShoppingCart size={'21px'}/>
      <span>
        {cart.length}
      </span>
        </button>
    </Link>
        <Link to='/favorites'>
        <button>
        <Heart size={'21px'}/>
        <span>
        {favorites.length}
      </span>
        </button>
    </Link>
      </div>
    </nav>
  )
})