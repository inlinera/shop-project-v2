import { FC, useCallback, useEffect, useState } from 'react'
import cl from './index.module.scss'
import { observer } from 'mobx-react-lite'
//MOBX
import CartStore from '@/shared/store/cart-store'
import FavoritesStore from '@/shared/store/favorites-store'
//INTERFACES
import { IProduct } from '@/shared/interfaces/IProduct'
//COMPONENTS
import { ProdButton } from '@/shared/ui/product-button'
// ICONS
import { CircularProgress } from '@mui/material'
import { ShoppingBasket, Heart } from 'lucide-react'
//HOOKS
import { useNav } from '@/shared/hooks/useNav'
import { useMouseEnter } from '@/shared/hooks/useMouseEnter'

interface TheProductProps {
    product: IProduct
}

export const TheProduct: FC<TheProductProps> = observer(({ product }) => {

    const useNavigationFunction = useNav()

    const { pictures, price, name, id } = product

    const { cart, toggleCart } = CartStore
    const { favorites, toggleFavorites } = FavoritesStore

    const [isActive, setIsActive] = useState(false)
    const [currentImage, setCurrentImage] = useState<string>(pictures?.[0])
    const [isLoading, setIsLoading] = useState(true)

    const handleMouseEnter = useCallback(() => useMouseEnter({
       pictures, setIsLoading, setCurrentImage 
      }), [])

    const handleMouseLeave = useCallback(() => {
      setIsLoading(false)
      setCurrentImage(pictures?.[0])
    }, [])

    const toggleClassBtn = (product: IProduct) => toggleFavorites(product)

    const isExistsCart = cart.some(p => p.id === product.id)
    const isExistsFavs = favorites.some(p => p.id === product.id)

    useEffect(() => {
      setIsActive(isExistsFavs)
    }, [isExistsFavs])

    return (
      <div className={cl.product}>
        <div className={cl.product_image}>
          {
          isLoading && <CircularProgress
          color="secondary"
          />
          }

          <button
          className={cl.hearticon}
          onClick={() => toggleClassBtn(product)}
          >
          <Heart
          color={isActive? 'red' : '#000'}
          />
          </button>

          <img
          src={currentImage}
          className={cl.product_image_preview} 
          onLoad={() => setIsLoading(false)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => useNavigationFunction(id)}
          loading='lazy'
          alt={name} 
          />
        </div>
        
        <div
        className={cl.product_info}
        onClick={() => useNavigationFunction(id)}
        >
          <p>{name}</p>
        </div>
        <div className={`${cl.product_cart} aic jcc`}>
        <span>{price}$</span>
          <ProdButton onClick={() => toggleCart(product)}>
            <ShoppingBasket
            size={'23px'}
            />
            <span>
              { isExistsCart ? 'Remove from' : 'Add to' } cart
            </span>
          </ProdButton>
        </div>
      </div>
    )
  })