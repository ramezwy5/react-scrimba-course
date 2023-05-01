
// my first custom component;
function Navbar(){
    return (
    <nav>
        <img src="../images/react-logo.png" alt="logo"/>
        <ul className="nav-list">
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )

}

// header
export default function Header(){
  return(
    <Navbar />
  )
} 