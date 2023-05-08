
import './App.css'


// components
import Header from "../public/components/Header";
import UserD from "../public/components/UserData";
import MemeImg from "../public/components/memeImg";


export default function App() {


return (
    <div className='container'>
      <Header />
       <UserD 
       
      /> 
      <MemeImg />
    </div>
    
  )
}

{/* key = {meme.id}
        name = {meme.name}
        url = {meme.url}
        width = {meme.width}
        height = {meme.height}
        box_count = {meme.box_count}*/}