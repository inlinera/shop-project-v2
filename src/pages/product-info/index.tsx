import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import cl from './index.module.scss'
//MOBX
import ProductStore from '@/shared/store/product-store'
import CartStore from '@/shared/store/cart-store'


export const ProductPage = observer(() => {
    const { id } = useParams()
    const { product, fetchProduct, isLoading, error } = ProductStore
    const { cart, toggleCart } = CartStore

    useEffect(() => {
        if (id !== undefined) fetchProduct(Number(id))
            console.log(product)
    }, [id])

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    const isExistsCart = cart.some(p => p.id === product.id)


  return (
    <>
    <Link to='/'>Back</Link>
    <div className={`${cl.product_item} jcc`}>
        <div className={cl.product_item__imgs}>
            {product.pictures.map(p => <button key={p}>
            <img src={p} alt={p}/>
            </button>
            )}
        </div>
        <div className={cl.product_item__info}>
            <div>
                <h3>{product.name}</h3>
                <p>{product.brand}</p>
            </div>
        </div>
        <div className={cl.product_item__cart}>
            <button onClick={() => toggleCart(product)}>
                {isExistsCart ? 'Remove from' : 'Add to'} cart
            </button>
        </div>
    </div>
    </>
  )
})
