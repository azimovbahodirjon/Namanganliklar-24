function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__top-div1">
              <p className="footer__div1__p1">NAMANGANLIKLAR 24</p>
              <p className="footer__div1__p2">
                Воспроизводство, копирование, использование информации с сайта
                «NAMANGANLIKLAR24.UZ» возможно только с предварительного
                письменного разрешения редакции.
              </p>
            </div>
            <div className="footer__top-div2">
              <p className="footer__div2__p">Информация о сайте</p>
              <p className="footer__div2__p">Напишите нам</p>
              <p className="footer__div2__p">Реклама</p>
              <p className="footer__div2__p">Прислать новость</p>
            </div>
            <div className="footer__top-div3">
              <p className="footer__div3__p">Использование материалов</p>
              <p className="footer__div3__p">Темы дня</p>
              <p className="footer__div3__p">Наша команда</p>
            </div>
          </div>
          <hr />
          <div className="footer__bottom">
            <div className="footer__bottom__div1">
              <p>
                Наши <br /> социальные сети
              </p>
            </div>
            <div className="footer__bottom__div2">
              <img src="./Facebook.png" alt="" />
              <img src="./Instagram.svg" alt="" />
              <img src="./Telegram.svg" alt="" />
              <img src="./Youtube.svg" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
