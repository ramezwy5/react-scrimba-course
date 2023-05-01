/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

// page body
export default function MyPage(){
    return (
      <>
        <h1 className="first-header">Why I learn React</h1>
        <ol className="reasons">
          <li>access advance level in programming</li>
          <li>improve my skills</li>
          <li>increase job opportunities</li>
        </ol>
      </>
    )
}
  