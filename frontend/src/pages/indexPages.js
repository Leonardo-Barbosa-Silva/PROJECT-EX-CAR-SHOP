import { Routes, Route, Navigate, useRouteError } from 'react-router-dom';

import Add from './Add';
import List from './List';
import Cart from './Cart';




function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return <div>Dang!</div>;
}


const indexPages = () => {

    return(
        <Routes>
            <Route path='/list' element={<List />} />
            <Route path='/add' element={<Add />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/' element={<Navigate to='/list' />} />
            <Route errorElement={< ErrorBoundary />}/>
        </Routes>
    )
}


export default indexPages;