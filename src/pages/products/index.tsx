import { useEffect } from 'react'
import cl from './Products.module.scss'
//MOBX
import TypeStore from '@/shared/store/sort/type/type-store';
//COMPONENTS
import { ProductList } from '@/widgets/lists/products/index'
import { Filter } from '@/widgets/filter/index'

export const Products = () => {

  useEffect(() => {
    TypeStore.changeType(TypeStore.chosedType)
  }, [])

  return  (
    <>
    <Filter />
    <div className={`${cl.products_main} jcc aic w100`}>
        <ProductList />
    </div>
    </>
  )
}
