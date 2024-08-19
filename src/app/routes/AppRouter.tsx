import { Route, Routes } from 'react-router-dom'
//COMPONENTS
import { Layout } from '@/widgets/layout/Layout'
import { Products } from '@/pages/products/index'
import { Cart } from '@/pages/cart/index'
import { Favorites } from '@/pages/favorites/index'
import { ProductPage } from '@/pages/product-info'

function App() {

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

export default App
