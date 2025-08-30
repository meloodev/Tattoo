import logo from '@images/logo.svg';
import github from '@images/github.svg';
import google from '@images/google.svg';
import './registration.css';


const Registration = () => {
    return (
        <div className="registration">
            <div className="registration__header">
                <img className="registration__logo" src={logo} alt="registration-logo" />
                <div className="registration__title">Registration</div>
            </div>
            <form>
                <div className="registration__name">
                    <label htmlFor="reg-name">Name</label>
                    <input className="input" id="reg-name" type="text" required />
                </div>
                <div className="registration__surname">
                    <label htmlFor="reg-surname">Surname</label>
                    <input className="input" id="reg-surname" type="text" required />
                </div>
                <div className="registration__phone">
                    <label htmlFor="reg-phone">Phone</label>
                    <input className="input" id="reg-phone" type="tel" required />
                </div>
                <div className="registration__email">
                    <label htmlFor="reg-email">Email address</label>
                    <input className="input" id="reg-email" type="email" required />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path
                            d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
                    </svg>
                </div>
                <div className="registration__password">
                    <label htmlFor="reg-pwd">Password</label>
                    <input className="input" id="reg-pwd" type="password" placeholder="**********" required />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path
                            d="M73 39.1C63.6 29.7 48.4 29.7 39.1 39.1C29.8 48.5 29.7 63.7 39 73.1L567 601.1C576.4 610.5 591.6 610.5 600.9 601.1C610.2 591.7 610.3 576.5 600.9 567.2L504.5 470.8C507.2 468.4 509.9 466 512.5 463.6C559.3 420.1 590.6 368.2 605.5 332.5C608.8 324.6 608.8 315.8 605.5 307.9C590.6 272.2 559.3 220.2 512.5 176.8C465.4 133.1 400.7 96.2 319.9 96.2C263.1 96.2 214.3 114.4 173.9 140.4L73 39.1zM236.5 202.7C260 185.9 288.9 176 320 176C399.5 176 464 240.5 464 320C464 351.1 454.1 379.9 437.3 403.5L402.6 368.8C415.3 347.4 419.6 321.1 412.7 295.1C399 243.9 346.3 213.5 295.1 227.2C286.5 229.5 278.4 232.9 271.1 237.2L236.4 202.5zM357.3 459.1C345.4 462.3 332.9 464 320 464C240.5 464 176 399.5 176 320C176 307.1 177.7 294.6 180.9 282.7L101.4 203.2C68.8 240 46.4 279 34.5 307.7C31.2 315.6 31.2 324.4 34.5 332.3C49.4 368 80.7 420 127.5 463.4C174.6 507.1 239.3 544 320.1 544C357.4 544 391.3 536.1 421.6 523.4L357.4 459.2z" />
                    </svg>
                </div>
                <div className="registration__pass-confirm">
                    <label htmlFor="reg-pwd-confirm">Password</label>
                    <input className="input" id="reg-pwd-confirm" type="password" placeholder="**********" required />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path
                            d="M73 39.1C63.6 29.7 48.4 29.7 39.1 39.1C29.8 48.5 29.7 63.7 39 73.1L567 601.1C576.4 610.5 591.6 610.5 600.9 601.1C610.2 591.7 610.3 576.5 600.9 567.2L504.5 470.8C507.2 468.4 509.9 466 512.5 463.6C559.3 420.1 590.6 368.2 605.5 332.5C608.8 324.6 608.8 315.8 605.5 307.9C590.6 272.2 559.3 220.2 512.5 176.8C465.4 133.1 400.7 96.2 319.9 96.2C263.1 96.2 214.3 114.4 173.9 140.4L73 39.1zM236.5 202.7C260 185.9 288.9 176 320 176C399.5 176 464 240.5 464 320C464 351.1 454.1 379.9 437.3 403.5L402.6 368.8C415.3 347.4 419.6 321.1 412.7 295.1C399 243.9 346.3 213.5 295.1 227.2C286.5 229.5 278.4 232.9 271.1 237.2L236.4 202.5zM357.3 459.1C345.4 462.3 332.9 464 320 464C240.5 464 176 399.5 176 320C176 307.1 177.7 294.6 180.9 282.7L101.4 203.2C68.8 240 46.4 279 34.5 307.7C31.2 315.6 31.2 324.4 34.5 332.3C49.4 368 80.7 420 127.5 463.4C174.6 507.1 239.3 544 320.1 544C357.4 544 391.3 536.1 421.6 523.4L357.4 459.2z" />
                    </svg>
                </div>


                <div className="registration__options">
                    <div className="registration__remember">
                        <input id="reg-chb" type="checkbox" />
                        <label htmlFor="reg-chb">Remember me</label>
                    </div>
                    <div className="registration__forgot-pass">
                        <a href="#">Forgot password?</a>
                    </div>
                </div>
                <button className="registration__form-btn" type="submit">registration</button>
                <div className="registration__footer">
                    <div className="registration__footer-head">
                        <span>Or continue with</span>
                        <span className="decore"></span>
                    </div>


                    <div className="registration__footer-btns">
                        <button>
                            <img src={google} alt="google-icon" />
                            google
                        </button>
                        <button>
                            <img src={github} alt="github-icon" />
                            GitHub
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Registration;