//import './style/app.css';
import logo from '../assets/img/argentBankLogo.png'
import {NavLink} from "react-router-dom";

function User() {
  return (
    <div className="App">
        <nav className="main-nav">
            <NavLink to='/'>
                <a className="main-nav-logo" href="./index.html">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
            </NavLink>

            <div>
                <NavLink to='/user'>
                    <a className="main-nav-item" href="./user.html">
                        <i className="fa fa-user-circle"></i>
                        Tony
                    </a>
                </NavLink>
                <NavLink to='/'>
                    <a className="main-nav-item" href="./index.html">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </a>
                </NavLink>
            </div>
        </nav>
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br/>Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
        <footer className="footer">
            <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
    </div>
  );
}

export default User;
