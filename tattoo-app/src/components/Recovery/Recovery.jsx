import logo from '@images/logo.svg';
import './recovery.css';

const Recovery = () => {
    return (
        <div className="recovery">
            <div className="recovery__header">
                <img className="recovery__logo" src={logo} alt="recovery-logo" />
                <div className="recovery__title">Sign in to your account</div>
            </div>
            <form>
                <h2 className="form__title">recovery password</h2>
                <p className="form__text">Enter the email address you used to regoster and we'll send you the
                    instruction</p>
                <div className="recovery__email">
                    <label htmlFor="recovery-email">Email address</label>
                    <input className="input" id="recovery-email" type="email" required />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path
                            d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
                    </svg>
                </div>
                <button className="recovery__form-btn" type="submit">reset password</button>
                <div className="recovery__footer">
                    <div className="recovery__footer-head">
                        <a href="#">
                            back to sign in</a>
                        <span className="decore"></span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Recovery;