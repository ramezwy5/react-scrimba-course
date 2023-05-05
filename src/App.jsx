
import './App.css'

// components
import Navbar from '../public/components/Navbar';
import Footer from '../public/components/Footer';
import Card from '../public/components/Card';
import Hero from '../public/components/Hero';
import data from "../public/components/data"; // import data here to map it 

function App() {
  
  const cards = data.map(function (card){
    return(
        <Card 
        key = {card.id}
        item = {card}  //exetract data argument element to variable
        />    
    )
})

  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <section className='main'>{cards}</section>
      <Footer />
    </div>
  )
}

export default App
