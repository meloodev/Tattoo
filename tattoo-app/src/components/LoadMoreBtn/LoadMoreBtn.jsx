import './loadMoreBtn.css';
const LoadMoreBtn = ({ onLoad, hasMore }) => {
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

export default LoadMoreBtn;