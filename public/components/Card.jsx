//propTypes
import PrpoTypes from "prop-types"


export default function Card(props){
    Card.propTypes = {
        coverImg: PrpoTypes.node.isRequired,
        rating: PrpoTypes.number.isRequired,
        reviewCount: PrpoTypes.node.isRequired,
        location: PrpoTypes.node.isRequired,
        title: PrpoTypes.string.isRequired,
        price: PrpoTypes.number.isRequired,

    }


    return(
        <div className="card">
                <img src={`../images/${props.coverImg}`} className="card--image" />
                <div className="card--stats">
                    <img src="../images/star.png" className="card--star" />
                    <span>{props.rating}</span>
                    <span className="gray">({props.reviewCount}) • </span>
                    <span className="gray">{props.location}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}