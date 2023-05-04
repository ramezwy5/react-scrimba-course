//propTypes
import PrpoTypes from "prop-types"
import ethlics from "./ethlics"

export default function Card(props){
    Card.propTypes = {
        img: PrpoTypes.node.isRequired,
        rating: PrpoTypes.number.isRequired,
        reviewCount: PrpoTypes.node.isRequired,
        location: PrpoTypes.node.isRequired,
        title: PrpoTypes.string.isRequired,
        price: PrpoTypes.number.isRequired,

    }

    props = ethlics.map(function (ethlic){
        return(
            <>
                <img src={`../images/${ethlic.img}`} className="card--image" />
                <div className="card--stats">
                    <img src="../images/star.png" className="card--star" />
                    <span>{ethlic.rating}</span>
                    <span className="gray">({ethlic.reviewCount}) • </span>
                    <span className="gray">{props.location}</span>
                </div>
                <p>{ethlic.title}</p>
                <p><span className="bold">From \${ethlic.price}</span> / person</p>
            </>     
        )
    })

    return(
        <div className="card">
            {props}
        </div>
    )
}