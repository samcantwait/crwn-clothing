import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <nav className="navigation" role="navigation">
                <Link className="logo-container" to='/' aria-label="go to homepage">
                    <div>
                        <CrwnLogo className="logo" aria-label="website logo" />
                    </div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop' aria-label="go to shop page">
                        SHOP
                    </Link>
                    <Link className="nav-link" to='/auth' aria-label="go to sign-in page">
                        SIGN IN
                    </Link>
                </div>
            </nav>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;