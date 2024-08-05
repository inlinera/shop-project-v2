import { Link } from "react-router-dom"
//COMPONENTS
import { CartList } from '@/widgets/lists/cart/index'


export const Cart = () => {

  return (
    <div className="cb">
        <Link to='/'>Back</Link>
        <CartList />
    </div>
  )
}
