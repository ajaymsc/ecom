 
import './App.css';
import About from './Component/About';

import Header from './Component/Header';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import Calc from './Component/Calc';
import Tictac from './Component/Tictac';
import Tictac2 from './Component/Tictac2';
import Dummyjson from './Component/Dummyjson';
import Category from './Component/Category';
import Todo from './Component/Todo';
import UsseefectApp from './Component/UsseefectApp';
import Formikform from './Component/Formikform';
import FormikBasic from './Component/FormikBasic';
import Formikhook from './Component/Formikhook';
import Formikyup from './Component/Formikyup';
import Reduxcountertask from './Component/Reduxcountertask';
import Snack from './Component/Snack';
import ApiBirdperson from './Component/ApiBirdperson';
import ProductDetails from './Component/ProductDetails';
import Two from './Component/Two';
import { createContext, useState } from 'react';
import One from './Component/One';

export const DataContext = createContext()

function App() {

  const [data,setData] = useState('raj')

  return (
    
    <>
<Header />      
{/* <UsseefectApp/> */}



<DataContext.Provider value={data}>
<One />
<Two/>
</DataContext.Provider>


<Routes> 
        <Route path="/" element={ <Category/> } />
        <Route path="/snackpattern" element={ <Snack/> } />
        <Route path="/reduxcounter" element={ <Reduxcountertask/> } />
        <Route path="/fyup" element={ <Formikyup/> } />
        <Route path="/fhook" element={ <Formikhook/> } />
        <Route path="/fbasic" element={ <FormikBasic/> } />
        <Route path="/formik" element={ <Formikform/> } />
        <Route path="/todo" element={ <Todo/> } />
        <Route path="/category/:selectedcategory" element={ <Dummyjson/> } />
        <Route path="/productdetails/:productid" element={ <ProductDetails/> } />
        <Route path="/category" element={ <Category/> } />
        <Route path="/tictac2" element={ <Tictac2/> } />  
        <Route path="home" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="tictac" element={ <Tictac2/> } />
        <Route path="calc" element={ <Calc/> } />
       </Routes>
 
    </>
  );
}

export default App;
