import { useSelector, useDispatch } from "react-redux"

import { removeItemCart } from '../../store/actions/cart';
import { addMessage } from "../../store/actions/alerts";

import ItemCart from '../../components/ItemCart'




export default function Cart() {

    const itemsCart = useSelector( (state) => state.cart )

    const dispatch = useDispatch()

    function removeItemsCart(item) {
        dispatch(removeItemCart(item._id))
        dispatch(addMessage(`${item.name} removed from cart`))
    }

	return (
        <div className="container-fluid">
            <div className="row">
                {itemsCart.length === 0
                    ?
                        <p className="col-sm-12 mt-5 text-warning text-center">
                            Sem produtos no Carrinho...
                        </p>
                    :
                        itemsCart.map( (item, index) => (
                            <ItemCart key={index} item={item} onClick={removeItemsCart}/>
                        ))
                }
            </div>
        </div>
    )
};