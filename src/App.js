import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import PlacedOrder from './components/PlacedOrder/PlacedOrder';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<Shop></Shop>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/review' element={<OrderReview></OrderReview>}></Route>
          <Route path='/inventory' element={<Inventory />}></Route>
          <Route path='/placed-order' element={<PlacedOrder />}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
