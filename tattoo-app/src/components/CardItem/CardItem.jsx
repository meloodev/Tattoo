import cardImg from '@images/card-item.png';
import './cardItem.css';

const CardItem = () => {
    return (
        <li className="card">
            <div className="card__image">
                <img src={cardImg} alt="img" />
                <span>39% OFF</span>
            </div>
            <h4 className="card__title">Nike Air MX Super 2500 - Red</h4>
            <div className="card__summary">
                <div className="card__pricing">
                    <span className="card__price">$449</span>
                    <sub className="card__sale">$699</sub>
                </div>
                <div className="card__rate">
                    <div className="card__stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="card__score">5.0</span>
                </div>
            </div>
            <a className="card__btn">
                <i className="fa-solid fa-cart-plus"></i>
                Add to cart
            </a>

        </li>
    )
}

export default CardItem;