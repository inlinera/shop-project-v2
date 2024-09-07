import { Route, Routes } from 'react-router-dom'
//COMPONENTS
import { Layout } from '@/widgets/layout/index'
import { Products } from '@/pages/products/index'
import { Cart } from '@/pages/cart/index'
import { Favorites } from '@/pages/favorites/index'
import { ProductPage } from '@/pages/product-info'

export const App = () => {

  return (
   <div className='jcc aic tdnone'>
    <Layout />
          <Routes>
            <Route path="/" element={<Products />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/favorites" element={<Favorites />}/>
            <Route path='/product/:id' element={<ProductPage/>}/>
          </Routes>
   </div>
  )
}