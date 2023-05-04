// propTypes

import PropTypes from "prop-types"
import jokes from './jokesData'

export default function Joke(props) {
    Joke.propTypes = {
        setup: PropTypes.string.isRequired,
        punchline: PropTypes.string.isRequired,
        count: PropTypes.string.isRequired,
    }
    let count = 1
    props = jokes.map(joke => {
        joke.count = count++
        console.log(joke.count)
        return (
            <>
                {joke.setup && <h3>Setup: {joke.setup}</h3> }
                <p>Punchline: {joke.punchline}</p>
            </>
        )
        
    })
    console.log(props)
    return (
        <div>
            {props}
            <hr />
        </div>
    )
}