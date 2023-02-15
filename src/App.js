import './App.css';
import Navbar from './Navbar.js'
import Hero from './Hero.js'
import Card from './Card.js'
import data from './data.js'

export default function App() {
  const cards= data.map(item =>{
    return (
        <Card
          key={item.id}
          img={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
          openSpots={item.openSpots}/>
    )
  })

  return (
    <div className='screen'>
      <Navbar/>
      <Hero/>
      <section className='cards--container'>
        {cards}
      </section>

    </div>
  )
}