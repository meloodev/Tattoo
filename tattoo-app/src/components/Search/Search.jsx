import './search.css';

const Search = () => {
    return (
        <div className="search">
            <div className="search__inner">
                <input id="search" type="text" placeholder="search" />
                <label htmlFor="search"><i className="fa-solid fa-magnifying-glass"></i></label>
            </div>
        </div>
    )
}

export default Search;