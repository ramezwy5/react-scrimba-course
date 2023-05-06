import './index.css'

//components
import Card from "/public/components/Card.jsx"

export default function App(){
  return (
    <div className='container'>
      <Card 
      img="../public/images/cat-1.png"
      title="cat-name"
      phone="Phone"
      email="E-mail" 
    />
    <Card 
      img="../public/images/cat-2.jpg"
      title="cat-name"
      phone="Phone"
      email="E-mail" 
    />
    <Card 
      img="../public/images/cat-3.png"
      title="cat-name"
      phone="Phone"
      email="E-mail" 
    />
    <Card 
      img="../public/images/cat-4.png"
      title="cat-name"
      phone="Phone"
      email="E-mail" 
    />
  </div>  
  );
}
