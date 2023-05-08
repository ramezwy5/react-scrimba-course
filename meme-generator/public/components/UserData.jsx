
import memesData from "./memesData"


export default function UserD(){


let url
function getMemeImage(e){
    e.preventDefault()
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() *memesArray.length);
    url = memesArray[randomNum].url
    console.log(url) 
}
    return(
        <form className="text">
            <input type="text" className="form--input" placeholder="top text"/>
            <input type="text" className="form--input" placeholder="bottom text"/>
            <input onClick={getMemeImage} className="btn" type="submit" value={"Get a new meme image 🖼"}/>
        </form>
    )
}


/**
"id"
"name"
"url"
"width"
"height"
"box_count"
 */
