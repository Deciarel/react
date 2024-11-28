import { useState } from 'react'
import './App.css'

//perus funktiot sovelluksen alkuun

function App() {
  return(
    <>
    <Header/>
    <Product/>
    </>
    )
  }

  //headeri pää komponenttiin

  function Header() {
    return(
      <div className='content'>
        <h2>
          Welcome to product page
        </h2>
      </div>
    )
  }

//listattu tuotteet

function Product(){
  const[counter,setCounter] = useState(1)
  const[select, setSelect] = useState('phone')
  const products = [
    {name: 'iPhone', price: '450'},
    {name: 'RTX 3060', price: '610'},
    {name: 'Airpods Pro 2', price: '270'},
    {name: 'MSI katana', price: '1220'},
    {name: 'Logitech G Pro X', price: '320'},
    ]
  
    const ValittuTuote = products.find(p => p.name == select)
    const KokoHinta = ValittuTuote ? ValittuTuote.price * counter : 0

    const sisaltoCounter = () => {
      setCounter(counter + 1)
    }
  
    const aineSisalto = () => {
      if (counter !== 1) {
        setCounter(counter -1)
      }
  }

  const handleInputChange = (event) => {
    setSelect(event.target.value)
  }
}
//palauttaa ja laskee tuotteen hinnan

 /* return(
    <div>

    <h1> select product</h1>

    <div className='valikko'>
      <p>product:</p>
      <select value={select} onChange ={handleInputChange}> {
        
      products.map(p =>¨
        <option value={p.name} key={p.name}>{p.name} ({p.price})€></option>
      )
     } */