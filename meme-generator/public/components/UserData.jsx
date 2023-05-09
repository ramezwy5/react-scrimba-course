import React from "react"
import memesData from "./memesData"







export default function UserD(){

    const [memeImage, setMemeImage] =  React.useState("")
    const [topText, setTopText] =  React.useState("")
    // const [memeImage, setMemeImage] =  React.useState("")

    function getMemeImage(e){
        e.preventDefault()
        const memesArray = memesData.data.memes;
        const randomNum = Math.floor(Math.random() *memesArray.length);
        setMemeImage(memesArray[randomNum].url)
    }



    return(
        <div className="main">
            <form className="text">
                <input type="text" className="form--input" placeholder="top text"/>
                <input type="text" className="form--input" placeholder="bottom text"/>
                <input onClick={getMemeImage} className="btn" type="submit" value={"Get a new meme image 🖼"}/>
            </form>
            <section className="meme-content">
                <img src={memeImage} className="meme-img"/>
                <p className="first-quote">{setTopText(prevState => prevState = document.querySelectorAll(".form-input")[0])}</p>
                <p className="second-quote">AND TAKE MY MONEY</p>
            </section>
        </div>
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
