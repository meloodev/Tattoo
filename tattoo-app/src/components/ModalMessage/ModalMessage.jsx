import './modalMessage.css';

const Modal = () => {
    return (
        <div className="modal">
            <div className="modal__inner">
                <div className="moda__inner-icon">
                    <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon">
                            <path d="m4.5 12.75 6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                </div>
                <h3 className="modal__title">Payment successful</h3>
                <p className="modal__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p>
                <a className="modal__btn" href="#">Go back to dashboard</a>
            </div>
        </div>
    )
}

export default Modal;