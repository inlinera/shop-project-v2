import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import cl from './index.module.scss'
//MOBX
import { productStore } from '@/shared/store/product-store'
import CartStore from '@/shared/store/cart-store'
//COMPONENTS
import { ProdButton } from '@/shared/ui/product-button'


export const ProductPage = observer(() => {
    const { id } = useParams()
    const { product, fetchProduct } = productStore
    const { cart, toggleCart } = CartStore
    const [ imgId, setImgId ] = useState<number>(0)

    useEffect(() => {
        if (id) fetchProduct(Number(id))
    }, [id])

    if (product?.state == 'pending') return <div>Loading...</div>
    if (product?.state == 'rejected') return <div>Error, please try again later</div>

    const isExistsCart = cart.some(p => p.id === product?.value.id)

  return (
    product?.state == 'fulfilled' &&
    <>
    <Link to='/'>Back</Link>
    <div className={`${cl.product_item} jcc`}>
        <div className={cl.product_item__imgs}>
            {product?.value.pictures?.map((p, id) => <button key={p} onClick={() => setImgId(id)}>
            <img src={p} alt={p}/>
            </button>
            )}
        </div>
        <div className={cl.product_item__info}>
            <div>
                <img src={product?.value.pictures[imgId]} alt="img" />
            </div>
            <div>
                <h3>{product?.value.name}</h3>
                <p>{product?.value.brand}</p>
            </div>
        </div>
        <div className={`${cl.product_item__cart} aic`}>
        <p>Price: {product?.value.price}$</p>
            <ProdButton onClick={() => toggleCart(product?.value!)}>
                {isExistsCart ? 'Remove from' : 'Add to'} cart
            </ProdButton>
        </div>
    </div>
    </>
  )
})
