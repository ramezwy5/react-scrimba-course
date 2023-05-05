//propTypes
import PrpoTypes from "prop-types"
// import card from "./data.js" don't need to import data here 
//data extract from .map in app file with card var 
// need to validate map argument (card) here



export default function Card(props){
    Card.propTypes = {
        item: PrpoTypes.node,
        coverImg: PrpoTypes.node.isRequired,
        rating: PrpoTypes.number.isRequired,
        reviewCount: PrpoTypes.node.isRequired,
        location: PrpoTypes.node.isRequired,
        title: PrpoTypes.string.isRequired,
        price: PrpoTypes.number.isRequired,
        openSpots: PrpoTypes.number,
    }

    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"; 
    } else if(props.item.location ==="Online"){
        badgeText= "Online";
    }else{
        badgeText = props.item.openSpots
    }


    return(
        <div className="card">
                {badgeText && <div className ="open-spots">{badgeText}</div>}
                <img src={`../images/${props.item.coverImg}`} className="card--image" />
                <div className="card--stats">
                    <img src="../images/star.png" className="card--star" />
                    <span>{props.item.stats.rating}</span>
                    <span className="gray">({props.item.stats.reviewCount}) • </span>
                    <span className="gray">{props.item.location}</span>
                </div>
                <p>{props.item.title}</p>
                <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}