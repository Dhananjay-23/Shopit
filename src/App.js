
import './App.css';
import Heading from './Heading';
import ProdCat from './Prods/ProdCat';
import Shirts from './Prods/Shirts';
import Filter from './Prods/Filters';
import Shirtdata from './Prods/Shirtdata'
import { useState ,useEffect} from 'react';
import Card from "./Prods/Cards"
import Sidebar from './Sidebar';
import Cart from './Cart';
import Foot from './Foot';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './Login';
import Account from './Account';



function App() {

  const[query,setQuery]=useState("");
  const handleInputChange = (event)=>{
  setQuery(event.target.value);
  };
  const filteredItems=Shirtdata.filter((Shirtdata) => (Shirtdata.name.toLowerCase().indexOf(query)!== -1)
      ||(Shirtdata.color.toLowerCase().indexOf(query)!== -1)
      || (Shirtdata.category.toLowerCase().indexOf(query)!== -1));

  const [cart,setCart]=useState([])

  const handleClick = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  
  function filteredData(Shirtdata,query,handleClick)
  {
  let filteredProducts= Shirtdata

  if(query){
  filteredProducts= filteredItems
  }
  return filteredProducts.map(({name,img,price,id})=> (
  <Card 
    name={name}
    img={img}
    price={price}
    id={id}
    handleClick={handleClick}
  />
)
);
}

const [inp,setInput]=useState(5000)

    function changeInc(){
        setInput((previnp) => previnp+1000);
    }
    function changeDec(){
        setInput((previnp) => previnp-1000);
    }
      
  const [selectedColor, setSelectedColor] = useState('');
    
      const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
      };
    
function filteredColor(Shirtdata,selectedColor)
{
  const filteredColorwise= Shirtdata.filter((item)=> item.color===selectedColor);
  return filteredColorwise.map(({ name, img, price,id }) => (
    <Card id={id} name={name} img={img} price={price} handleClick={handleClick}/>
  ));
}

function filteredIt(Shirtdata, inp) {
  const filteredProducts = Shirtdata.filter((item) => (parseFloat(item.price) <= Number(inp)));

  return filteredProducts.map(({ name, img, price,id }) => (
    <Card id={id} name={name} img={img} price={price} handleClick={handleClick}/>
  ));
}



const [fil,setFil]=useState(false);

const [show,setShow]=useState(true);
const [col,setCol]=useState(false);

const handleRemove = (id) => {
  console.log("Remove clicked for id:", id);
  const updatedCart= cart.filter((item)=> parseFloat(item.id) !== Number(id))
  console.log(updatedCart)
  setCart((prevcart) => updatedCart);
}

  useEffect(()=>{
    console.log(cart);
  },[cart])


  return (
    <div >
    <Heading num={cart.length} setShow={setShow}/>
    
    <Routes>
    <Route path='/' element={<ProdCat /> }/>
      <Route path='/explore' element={show ? <div className='grid-container'>
    <Sidebar 
      inp={inp}
      changeInc={changeInc}
      changeDec={changeDec}
      setFil={setFil}
      handleColorChange={handleColorChange}
      setCol={setCol}
    />
    <Filter 
    filteredData={filteredData} 
    query={query} 
    handleClick={handleClick} 
    handleInputChange={handleInputChange}  
    fil={fil}
    setFil={setFil}
    inp={inp}
    filteredIt={filteredIt}
    selectedColor={selectedColor}
    filteredColor={filteredColor}
    col={col}
    />
    </div> : <Cart cart={cart} setCart={setCart} handleRemove={handleRemove} setShow={setShow}/>} />

    <Route path='/Login' element={<Login />}></Route>
    <Route path='/createAccount' element={<Account />}/>
    </Routes>
    <Foot />
    </div>
     );
  
}

export default App;