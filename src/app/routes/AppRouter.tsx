import { Route, Routes } from 'react-router-dom'
//COMPONENTS
import { Layout } from '@/app/layout/Layout'
import { Products } from '@/pages/products/index'
import { Cart } from '@/pages/cart/index'
import { Favorites } from '@/pages/favorites/index'

function App() {

  return (
   <div className='jcc aic tdnone'>
    <Layout />
          <Routes>
            <Route path="/*" element={<Products />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/favorites" element={<Favorites />}/>
          </Routes>
   </div>
  )
}

export default App
