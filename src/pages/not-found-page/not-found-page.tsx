import Logo from '../../components/logo/logo';
import User from '../../components/user/user';
import Sign from '../../components/sign/sign';
import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return(
    <div className="page page--favorites-empty">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <User />
                <Sign />
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <div className="favorites__status-wrapper">
              <b className="favorites__status">404 Not Found</b>
              <Link className="footer__logo-link" to="/">Вернуться на главную</Link>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default NotFound;