import { useEffect } from 'react'
import cl from './Products.module.scss'
//MOBX
import FetchProducts from '@/shared/store/products-api';
//COMPONENTS
import { ProductList } from '@/widgets/lists/products/index'
import { Sort } from '@/entities/sort'

export const Products = () => {

  useEffect(() => {
    FetchProducts.changeType('All Products')
  }, [])
  return  (
    <>
    <Sort/>
    <div className={`${cl.products_main} jcc aic w100`}>
        <ProductList />
    </div>
    </>
  )
}
