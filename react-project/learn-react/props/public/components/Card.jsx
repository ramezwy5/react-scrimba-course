import PropTypes from 'prop-types';
// disable proptype in eslintrc rule "react/prop-types": "off"(NOT REQUMMENDED)


//cards

export default function Card(props){
    Card.propTypes = {
        img: PropTypes.node.isRequired,
        title: PropTypes.node.isRequired,
        phone: PropTypes.node.isRequired,
        email: PropTypes.node.isRequired,
        };
    return (
        <div className="card">
            <div className='card-image'><img src={props.img} alt="cat"/></div>
            <h2 className="card--title">{props.title}</h2>
            <div>
            <p className='fa fa-phone'>{props.phone}</p>
            </div>
            <div><p className='fa-regular fa-envelope'>{props.email}</p></div>
        </div>
    )
}