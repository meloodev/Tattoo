import './loadMore.css';
const LoadMore = ({ onLoad, hasMore }) => {
    return (
        <>

            {hasMore &&
                <div className="load-more">
                    <button onClick={onLoad}>loadMore</button>
                </div>
            }
        </>

    )
}

export default LoadMore;