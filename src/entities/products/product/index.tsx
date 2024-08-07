import { FC, useCallback, useEffect, useState } from 'react'
import cl from './index.module.scss'
import { observer } from 'mobx-react-lite';
//  MOBX AND TYPES
import CartStore from '@/shared/store/cart-store'
import FavoritesStore from '@/shared/store/favorites-store'
import { ProductItem } from '@/shared/store/products-api'
// ICONS
import { CircularProgress } from '@mui/material';
import { ShoppingBasket, Heart } from 'lucide-react';

interface TheProductProps {
    product: ProductItem
}

export const TheProduct: FC<TheProductProps> = observer(({ product }) => {
    const { pictures, price, name } = product;

    const { cart, toggleCart } = CartStore
    const { favorites, toggleFavorites } = FavoritesStore

    const [isActive, setIsActive] = useState(false)
  
    const [currentImage, setCurrentImage] = useState(pictures && pictures[0]);
    const [isLoading, setIsLoading] = useState(true);
  
    const handleImageLoad = useCallback(() => setIsLoading(false), []);
  
    const handleMouseEnter = useCallback(() => {
      if (pictures && pictures.length > 1) {
        setIsLoading(true);
        const img = new Image();
        img.src = pictures[1];
        img.onload = () => {
          setCurrentImage(pictures[1]);
          setIsLoading(false);
        };
      }
    }, [pictures]);
  
    const handleMouseLeave = useCallback(() => {
      setIsLoading(false);
      setCurrentImage(pictures && pictures[0]);
    }, [pictures]);

    const toggleClassBtn = (product: ProductItem) => {
      toggleFavorites(product)
    }

    const isExistsCart = cart.some(p => p.id === product.id)
    const isExistsFavs = favorites.some(p => p.id === product.id)

    useEffect(() => {
      setIsActive(prevState => prevState !== isExistsFavs ? isExistsFavs : prevState)
    }, [isExistsFavs])

    return (
      <div className={cl.product}>
        <div className={cl.product_image}>
          {isLoading && <CircularProgress color="secondary" />}
          <button className={cl.hearticon} onClick={() => toggleClassBtn(product)}>
          <Heart color={isActive? 'red' : '#000'}/>
          </button>
          <img src={currentImage} onLoad={handleImageLoad}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            className={cl.product_image_preview} alt={name} />
        </div>
        <div className={cl.product_info}>
          <p>{name}</p>
        </div>
        <div className={`${cl.product_cart} aic jcc`}>
        <span>{price}$</span>
          <button onClick={() => toggleCart(product)}>
            <ShoppingBasket size={'23px'} />
            <span>
              { isExistsCart ? 'Remove from' : 'Add to' } cart
              </span>
          </button>
        </div>
      </div>
    );
  })