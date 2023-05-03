// propTypes

import PropTypes from "prop-types"

export default function Joke(props) {
    Joke.propTypes = {
        setup: PropTypes.string.isRequired,
        punchline: PropTypes.string.isRequired,
    }
    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}