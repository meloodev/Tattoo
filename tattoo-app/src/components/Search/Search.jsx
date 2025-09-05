import './search.css';

const Search = ({value, inputValue}) => {
    return (
        <div className="search">
            <div className="search__inner">
                <input id="search" type="text" placeholder="search" value={value} onChange={inputValue}/>
                <label htmlFor="search"><i className="fa-solid fa-magnifying-glass"></i></label>
            </div>
        </div>
    )
}

export default Search;