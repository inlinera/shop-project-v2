import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import cl from './index.module.scss'
//MOBX
import { productStore } from '@/shared/store/product-api'
import CartStore from '@/shared/store/cart-store'
//COMPONENTS
import { ProdButton } from '@/shared/ui/product-button'
import Carousel from 'react-material-ui-carousel'

export const ProductPage = observer(() => {

    const { id } = useParams()
    const { product, fetchProduct } = productStore
    const { cart, toggleCart } = CartStore

    useEffect(() => {
        fetchProduct(Number(id))
    }, [id])

    //CHECK PRODUCT LOADING STATES
    if (product?.state == 'pending') return <div>Loading...</div>
    if (product?.state == 'rejected') return <div>Error, please try again later</div>

    const isExistsCart = cart.some(p => p.id === product?.value.id)

  return (
    product?.state == 'fulfilled' &&
    <>
    <Link to='/'>Back</Link>
    <div className={`${cl.product_item} jcc`}>
        <div className={cl.product_item__info}>
            <div className='grid jcc aic'>
                <Carousel
                navButtonsAlwaysVisible
                >
                    {product?.value.pictures.map(i => <img src={i} alt={i} key={i} />)}
                </Carousel>
            </div>
            <div>
                <h3>{product?.value.name}</h3>
                <p>{product?.value.brand}</p>
            </div>
        </div>
        <div className={`${cl.product_item__cart} aic`}>
        <p>Price: {product?.value.price}$</p>
            <ProdButton onClick={() => toggleCart(product?.value)}>
                {isExistsCart ? 'Remove from' : 'Add to'} cart
            </ProdButton>
        </div>
    </div>
    </>
  )
})