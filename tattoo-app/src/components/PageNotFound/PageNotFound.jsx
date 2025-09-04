import './pageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <div className="pageNotFound__inner">
                <h2>
                    <span>404</span>|<span>Not Found</span>
                </h2>
                <a className='go__back' href='#'>back to home page</a>
            </div>
        </div>
    )
}

export default PageNotFound