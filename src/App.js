import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Navbar2 from './Components/Navbar2';
import Navbar3 from './Components/Navbar3';
import About from './Pages/Product';
import Home from './Pages/Home';
import Product from './Pages/Product';
import PopularItems from './Pages/PopularItems';
import PagenotFound from './Pages/PagenotFound';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Navbar2 />
            <Navbar3 />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />} />
                <Route path='/product/:category' element={<PopularItems />} />
                <Route path='/*' element={<PagenotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
