import cl from './Products.module.scss'
import { ProductList } from '@/widgets/lists/products/index'

export const Products = () => {
  return  (
    <div className={`${cl.products_main} jcc aic w100`}>
        <ProductList />
    </div>
  )
}
