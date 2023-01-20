import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer.js'
import Center from './components/center/Center.js'
import Carousel from './components/carousel/Carousel';
import ProductList from './components/products/ProductList';
import StateDemo1 from './components/state/StateDemo1';
import ShowhideDemo2 from './components/state/ShowhideDemo2';
import MaxlengthTextbox from './components/state/MaxlengthTextbox';
import RegistrationForm from './components/forms/RegistrationForm';
import PropsDemo1 from './components/props/PropsDemo1';
import Stateaddition from './components/stateexample/Stateaddition';
import EmployeeEntry from './components/employee/EmployeeEntry';
import List from './components/list/List';

function App() {
  return (
    <>
    {/* <Header></Header>    */}
     {/* <Carousel></Carousel>  */}
    {/* <ProductList></ProductList> */}
    {/* <Footer></Footer>  */}
    {/* <PropsDemo1 name="HI"></PropsDemo1> */}
    {/* <StateDemo1></StateDemo1> */}
    {/* <ShowhideDemo2></ShowhideDemo2> */}

{/* <MaxlengthTextbox></MaxlengthTextbox> */}
{/* <RegistrationForm></RegistrationForm> */}
{/* <Stateaddition></Stateaddition> */}
{/* <EmployeeMain/> */}
<EmployeeEntry/>
{/* <List/> */}
    </>
  );
}

export default App;
