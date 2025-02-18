import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="container">
        <ul className="header__ul">
          <li className="header__li">
            <a className="header__a" href="/">
              Главное
            </a>
          </li>
          <li>
            <Link className="header__a" to="/List">
              Интересное
            </Link>
          </li>
          <li>
            <Link className="header__a" to="/Contact">
              Экономика
            </Link>
          </li>
          <li>
            <Link className="header__a" to="/Article">
              Политика
            </Link>
          </li>
          <li>
            <Link className="header__a" to="/">
              Общество
            </Link>
          </li>
          <li>
            <Link className="header__a" to="/">
              Технологии
            </Link>
          </li>
          <li>
            <Link className="header__a" to="/">
              Спорт
            </Link>
          </li>
          <li>
            <Link className="header__a" to="/">
              Культура
            </Link>
          </li>
          <li>
            <Link className="header__a" to="/">
              Происшествия
            </Link>
          </li>
          <li>
            <Link className="header__a" to="/">
              Наука
            </Link>
          </li>
        </ul>
        <div className="contact__main">
          <div className="contact-main__left">
            <p className="contact-left__p1">Напишите нам</p>
            <div className="contact-left-input-div">
              <input className="ism__input" type="text" placeholder="Имя" />
              <input
                className="nomer__input"
                type="text"
                placeholder="Номер телефона"
              />
            </div>
            <input
              className="pochta__input"
              type="text"
              placeholder="Электронная почта"
            />
            <input className="text__input" type="text" placeholder="Текст" />
            <button className="contact__btn">Отправить</button>
          </div>
          <div className="contact-main__right">
            <div className="contact-right">
              <p className="pochta__text">Электронная почта</p>
              <p className="pochta">info@namanganliklar24.uz</p>
              <hr />
              <p className="nomer__text">Номер телефона</p>
              <p className="nomer">+998 88 522-54-76</p>
              <hr />
              <p className="manzil__text">Адрес</p>
              <p className="manzil">Ташкент, площадь Мустакиллик, 6 </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
