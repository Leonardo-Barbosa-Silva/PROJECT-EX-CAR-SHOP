import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import './style.css'



const indexLayout = ({ children }) => {

    return (
        <> 
            <Header />
            <Content>{children}</Content>
            <Footer />
        </>
    )
}


export default indexLayout;