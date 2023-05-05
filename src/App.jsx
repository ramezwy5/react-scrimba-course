
import './App.css'

// components
import Navbar from '../public/components/Navbar';
import Footer from '../public/components/Footer';
import Card from '../public/components/Card';
import Hero from '../public/components/Hero';
import data from "../public/components/data.js"

function App() {
  
  const cards = data.map(function (card){
    return(
        <Card 
        key = {card.id}
        coverImg={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
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
