import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-container container">
          <div className="header-left">
            <img className="header__img" src="./NAMANGANLIKLAR24.svg" alt="" />
            <p className="header__p">
              <span className="header__span">$</span>10137.2
            </p>
            <p className="header__p2">
              <span className="header__span">P</span>138.26
            </p>
          </div>
          <div className="header-right">
            <input type="text" placeholder="Поиск" />
            <div className="uzb__rus">
              <span className="Uzb">УЗ</span>
              <span className="Rus">РУ</span>
            </div>
            <button className="Header__btn">Войти</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
