import "./index.css";

// my first custom component;
function Navbar(){
  return (
  <nav>
      <img src="./react-logo.png" alt="LOGO"/>
      <ul>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
  </nav>)
}

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

function MyPage(){
  return (
    <>
      <h1>Why I learn React</h1>
      <ol>
        <li>access advance level in programming</li>
        <li>improve my skills</li>
        <li>increase job opportunities</li>
      </ol>
    </>
  )
}

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

// header
function Header(){
  return(
    <Navbar />
  )
}


//footer
function Footer(){
  return(
    <p>
      &copy; 2023 Kaaper development. All rights reserved.
    </p>
  )
}
export default function App(){
  return (
    <>
      <Header />
      <MyPage />
      <Footer/>
    </>
  )
}
