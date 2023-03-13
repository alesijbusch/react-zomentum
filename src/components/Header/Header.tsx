import "./styles.scss";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <a href="/" className="header__logo">
          <LogoIcon />
        </a>
        <nav className="header__nav">
          <a href="/" className="header__link header__link--active">
            Features
          </a>
          <a href="/" className="header__link">
            Blog
          </a>
          <a href="/" className="header__link">
            Pricing
          </a>
          <a href="/" className="header__link">
            Company
          </a>
        </nav>
        <button type="button" className="header__btn">
          Get a demo
        </button>
      </div>
    </header>
  );
};
