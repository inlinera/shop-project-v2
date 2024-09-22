import cl from './index.module.scss'
import { observer } from 'mobx-react-lite'
//COMPONENTS
import { TheProduct } from '@/entities/products/product'
import { Sort } from '@/widgets/filter/index'
import { CircularProgress } from '@mui/material'
//MOBX
import { fetchProducts } from '@/shared/store/products-api'

export const Products = observer(() => {

  const { products } = fetchProducts

  return  (
    <>
    <Sort />
    <div className={`${cl.products_main} jcc aic w100`}>
      {products?.state == 'pending' ? (
      <div className="jcc">
        <CircularProgress />
      </div>
      )
      :
      (
        <div className={cl.product_list}>
            <div className={`${cl.product_list_main} jcc aic`}>
            {
            products?.state == 'fulfilled' && products.value.length
            ? 
            products.value.map(p => <TheProduct product={p} key={p.id}/>) 
            : 
            <div className={`x-center`}>
            <p>Products not found</p>
            </div>
            }
            {products?.state == 'rejected' 
            &&
            <div className={`x-center`}>
            <p>Error, please try again later!</p>
            </div>
            }
            </div>
        </div>
        )}
    </div>
    </>
  )
})
