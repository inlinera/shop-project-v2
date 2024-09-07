import cl from './index.module.scss'
import { observer } from 'mobx-react-lite'
//COMPONENTS
import { TheProduct } from '@/entities/products/product'
import { Sort } from '@/widgets/filter/index'
import { CircularProgress } from '@mui/material'
//MOBX
import FetchProducts from '@/shared/store/products-api'

export const Products = observer(() => {

  const { products, loading } = FetchProducts

  return  (
    <>
    <Sort />
    <div className={`${cl.products_main} jcc aic w100`}>
      {loading ? (
      <div className="jcc"><CircularProgress /></div>
      )
      :
      (
        <div className={cl.product_list}>
            <div className={`${cl.product_list_main} jcc aic`}>
            {
            products.length ? products.map(p => <TheProduct product={p} key={p.id}/>) 
            : <div className={`${cl.product_loader} jcc aic x-center`}>
            <p>Products not found</p>
            </div>
            }
            </div>
        </div>
        )}
    </div>
    </>
  )
})
