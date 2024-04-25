
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Listing from './Components/Listing';
import Create from './Components/Create';
import Update from './Components/Update';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="my-div">
    <Container className="container-center">

   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Listing />}></Route>
         <Route path='/employee/Create' element={<Create />}></Route>
         <Route path='/Update' element={<Update />}></Route> 
         {/* <Route path='/EmpDetail/:empid' element={<EmpDetail />}></Route>  */}
      </Routes>
    </BrowserRouter>
    </Container>
  </div>
  );
}

export default App;
