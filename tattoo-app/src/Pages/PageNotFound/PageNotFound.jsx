import { Link } from 'react-router';
import './pageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <div className="pageNotFound__inner">
                <h2>
                    <span>404</span>|<span>Not Found</span>
                </h2>
                <Link to='/' className='go__back' href='#'>back to home page</Link>
            </div>
        </div>
    )
}

export default PageNotFound