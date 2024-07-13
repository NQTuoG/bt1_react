import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Body from './components/Body'
import Footer from './components/Footer'
import Item from './components/Item'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Body/>
      <Item/>
      <Footer/>
    </>
  )
}

export default App
