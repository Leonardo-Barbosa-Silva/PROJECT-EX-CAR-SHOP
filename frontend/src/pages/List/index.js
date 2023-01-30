import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { getAllCars } from '../../store/actions/fetchActions'
import { addItemCart } from '../../store/actions/cart'
import { addMessage } from '../../store/actions/alerts'

import Car from '../../components/Car';




export default function List() {

	const cars = useSelector( state => state.cars )

	const dispatch = useDispatch()

	useEffect( () => {
		dispatch(getAllCars())
	}, [dispatch])


	function addItemsCart(car) {
		dispatch(addItemCart(car))
		dispatch(addMessage(`${car.name} added in cart`))
	}


	return (
		<div className="container-fluid">
			<div className="row">{cars.map( (car, index) => (
                <Car key={index} car={car} onClick={addItemsCart}/>
            ))}</div>
		</div>
	);
}