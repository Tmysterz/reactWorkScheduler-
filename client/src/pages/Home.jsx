import Auth from '../utils/auth';
import '../App.css';

function Home() {
    return (
        <div>
            {!Auth.loggedIn() ? (
                <div>
                    <h1 className='homeH1'>
                        Make managing time easy!
                    </h1>
                    <div className='homeP'>
                        <p>
                            One of the biggest stresses in life comes from the pressure of time.
                        </p>
                        <p>
                            Use this website to save yourself that trouble and make your life easier.
                        </p>
                        <p>
                            Click the button below to sign up and begin managing your time!
                        </p>
                        <button>
                            Sign Up!
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <h1>
                        Welcome back insert logged in users name !
                    </h1>
                </div>
            )}
        </div>

    );
}

export default Home;