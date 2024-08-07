import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import cl from './index.module.scss'
//MOBX
import FetchProducts from '@/shared/store/products-api'
//COMPONENTS
import { TheProduct } from '@/entities/products/product/index'
import { CircularProgress } from '@mui/material'

 export const ProductList = observer(() => {

    const { products, getProducts } = FetchProducts;

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className={cl.product_list}>
        <div className={`${cl.product_list_main} jcc aic`}>
        {
        products.length ? products.map(p => <TheProduct product={p} key={p.id}/>) 
        : <div className={`${cl.product_loader} jcc aic x-center`}>
        <CircularProgress />
        <p>Products not found or not loaded yet</p>
        </div>
        }
        </div>
    </div>
  )
})