import './cardDetails.css';

const CardDetails = () => {
    return (
        <div className="info">
            <div className="info__inner">
                <div className="info__header">
                    <img src="./img/card-item.png" alt="iphone" />
                    <h3 className="info__details-title">
                        Apple iPhone 16 Pro Max Clear Case with MagSafe and Camera Control: Lightweight Phone Case,
                        Wireless Charging Compatible, Smooth Glossy Finish
                    </h3>
                </div>
                <div className="info__details">
                    <div className="info__details-rates">
                        <span className="info__details-rate">5.0</span>
                        <ul className="info__details-stars">
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                    </div>
                    <div className="info__deal">
                        <span className="info__deal-sale">-18%</span>
                        <span className="info__deal-price"><span>39.99</span><sup>99</sup></span>
                    </div>

                    <div className="info__descr">
                        <h3 className="info__descr-title">About this item</h3>
                        <p className="info__descr-text">
                            MAGSAFE CHARGING COMPATIBLE — With built-in magnets that align perfectly with your
                            iPhone 16
                            Pro Max, this case offers a magical attach experience to other MagSafe accessories and
                            is
                            MagSafe charging compatible.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails;