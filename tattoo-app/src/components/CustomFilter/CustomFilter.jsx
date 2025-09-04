import './customFilter.css';

const CustomFilter = () => {
    return (
        <div className="filter">
            <ul className="filter__items">
                <li><a className="filter__item" href="#">iPhone</a></li>
                <li><a className="filter__item" href="#">Galaxy</a></li>
                <li><a className="filter__item" href="#">Pixel</a></li>
                <li><a className="filter__item" href="#">ThinkPad</a></li>
                <li><a className="filter__item" href="#">IdeaPad</a></li>
            </ul>
        </div>
    )
}

export default CustomFilter;