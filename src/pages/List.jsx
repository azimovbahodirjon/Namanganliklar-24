import { Link } from "react-router-dom";

function List() {
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
        <hr className="header__hr" />
        {/* yangi-uylar-img */}
        <img className="yangi-uylar" src="./yangi-uylar-img.svg" alt="" />
        <p className="Интересное">Интересное</p>
        <div className="qiziq">
          <div className="qiziq__left">
            <div className="qiziq__left-list1">
              <img
                className="qiziq__img"
                src="./qiziq__img1.svg"
                alt=""
                width={210}
                height={165}
              />
              <div className="qiziq-list1-file1">
                <p className="qiziq-file1__text1">
                  Отопление Ташкента на 30 лет переходит в управление
                  французской Veolia
                </p>
                <p className="qiziq-file1__text2">
                  Система теплоснабжения Ташкента на 30 лет будет передана в
                  управление французской компании Veolia для модернизации и
                  реконструкции, сообщает 22 сентября пресс-служба...
                </p>
                <div className="qiziq-file1-div">
                  <img
                    className="qiziq-div-icon"
                    src="./kard-1__icon.svg"
                    alt=""
                  />
                  <p className="qiziq-div-data">ИА Красная Весна 15:26</p>
                </div>
              </div>
            </div>
            <div className="qiziq__left-list2">
              <img
                className="qiziq__img"
                src="./qiziq__img2.svg"
                alt=""
                width={210}
                height={165}
              />
              <div className="qiziq-list1-file1">
                <p className="qiziq-file1__text1">
                  Пользователи жалуются на новую проблему iPhone 13, связанную с
                  камерой
                </p>
                <p className="qiziq-file1__text2">
                  Пользователи смартфона Apple iPhone 13 продолжают сообщать о
                  новых проблемах, с которыми они сталкиваются при использовании
                  флагмана, поступившего в продажу только позавчера...
                </p>
                <div className="qiziq-file1-div">
                  <img
                    className="qiziq-div-icon"
                    src="./kard-2__icon.svg"
                    alt=""
                  />
                  <p className="qiziq-div-data">Пепелац Ньюс 07:35</p>
                </div>
              </div>
            </div>{" "}
            <div className="qiziq__left-list3">
              <img
                className="qiziq__img"
                src="./qiziq__img3.svg"
                alt=""
                width={210}
                height={165}
              />
              <div className="qiziq-list1-file1">
                <p className="qiziq-file1__text1">
                  Halo Infinite сравнили на Xbox One, Xbox One X, Xbox Series S
                  и Xbox Series X
                </p>
                <p className="qiziq-file1__text2">
                  Ютубер с канала ElAnalistaDeBits сравнил Halo Infinite на
                  консолях Xbox One, Xbox One X, Xbox Series S и Xbox Series X.
                  Графика впечатляет на всех платформах. Также отмечается...
                </p>
                <div className="qiziq-file1-div">
                  <img
                    className="qiziq-div-icon"
                    src="./kard-3__icon.svg"
                    alt=""
                  />
                  <p className="qiziq-div-data">Клуб DNS 15:33</p>
                </div>
              </div>
            </div>{" "}
            <div className="qiziq__left-list4">
              <img
                className="qiziq__img"
                src="./qiziq__img4.svg"
                alt=""
                width={210}
                height={165}
              />
              <div className="qiziq-list1-file1">
                <p className="qiziq-file1__text1">
                  Halo Infinite сравнили на Xbox One, Xbox One X, Xbox Series S
                  и Xbox Series X
                </p>
                <p className="qiziq-file1__text2">
                  Ютубер с канала ElAnalistaDeBits сравнил Halo Infinite на
                  консолях Xbox One, Xbox One X, Xbox Series S и Xbox Series X.
                  Графика впечатляет на всех платформах. Также отмечается...
                </p>
                <div className="qiziq-file1-div">
                  <img
                    className="qiziq-div-icon"
                    src="./kard-4__icon.svg"
                    alt=""
                  />
                  <p className="qiziq-div-data">Клуб DNS 15:33</p>
                </div>
              </div>
            </div>{" "}
            <div className="qiziq__left-list5">
              <img
                className="qiziq__img"
                src="./qiziq__img5.svg"
                alt=""
                width={210}
                height={165}
              />
              <div className="qiziq-list1-file1">
                <p className="qiziq-file1__text1">
                  Время автономной работы iPhone 13 Pro Max стало рекордным для
                  смартфонов Apple
                </p>
                <p className="qiziq-file1__text2">
                  Линейка смартфонов iPhone 13 от Apple была презентована на
                  прошлой неделе. Прием предзаказов на устройство стартовал 22
                  сентября, а 24 сентября новинка появилась в магазинах.
                </p>
                <div className="qiziq-file1-div">
                  <img
                    className="qiziq-div-icon"
                    src="./kard-5__icon.svg"
                    alt=""
                  />
                  <p className="qiziq-div-data">iReactor 12:25</p>
                </div>
              </div>
            </div>{" "}
            <div className="qiziq__left-list6">
              <img
                className="qiziq__img"
                src="./qiziq__img6.svg"
                alt=""
                width={210}
                height={165}
              />
              <div className="qiziq-list1-file1">
                <p className="qiziq-file1__text1">
                  Криптобиржа Huobi закрыла регистрацию пользователей из Китая
                </p>
                <p className="qiziq-file1__text2">
                  Крупнейшая в Китае биржа для торговли биткоинами Huobi
                  приостановила регистрацию пользователей из КНР. Ранее местный
                  Центробанк назвал нелегальными все транзакции...
                </p>
                <div className="qiziq-file1-div">
                  <img
                    className="qiziq-div-icon"
                    src="./kard-1__icon.svg"
                    alt=""
                  />
                  <p className="qiziq-div-data">Компания 11:35</p>
                </div>
              </div>
            </div>{" "}
            <div className="qiziq__left-list7">
              <img
                className="qiziq__img"
                src="./qiziq__img7.svg"
                alt=""
                width={210}
                height={165}
              />
              <div className="qiziq-list1-file1">
                <p className="qiziq-file1__text1">
                  Илон Маск принял участие во Всемирной сетевой конференции в
                  Китае
                </p>
                <p className="qiziq-file1__text2">
                  Илон Маск (Elon Musk, Руководитель фирмы Tesla и других
                  проектов) уже второй раз за полторы недели обратился к
                  китайским правящим кругам и гражданам.
                </p>
                <div className="qiziq-file1-div">
                  <img
                    className="qiziq-div-icon"
                    src="./kard-5__icon.svg"
                    alt=""
                  />
                  <p className="qiziq-div-data">Фергана 15:44</p>
                </div>
              </div>
            </div>{" "}
            <div className="qiziq__left-list1">
              <img
                className="qiziq__img"
                src="./qiziq__img8.svg"
                alt=""
                width={210}
                height={165}
              />
              <div className="qiziq-list1-file1">
                <p className="qiziq-file1__text1">
                  Отопление Ташкента на 30 лет переходит в управление
                  французской Veolia
                </p>
                <p className="qiziq-file1__text2">
                  Система теплоснабжения Ташкента на 30 лет будет передана в
                  управление французской компании Veolia для модернизации и
                  реконструкции, сообщает 22 сентября пресс-служба...
                </p>
                <div className="qiziq-file1-div">
                  <img
                    className="qiziq-div-icon"
                    src="./kard-1__icon.svg"
                    alt=""
                  />
                  <p className="qiziq-div-data">ИА Красная Весна 15:26</p>
                </div>
              </div>
            </div>
            <button className="dunyo__left__btn">Показать ещё </button>
          </div>
          <div className="dunyo__right">
            <div className="dunyo-right__blog1">
              <p className="asosiy">Главное</p>
              <p className="asosiy__text-black">
                В Фергане создадут узбекско-пакистанский университет
              </p>
              <p className="asosiy__text-data">Sputnik Узбекистан 14:09</p>
              <hr className="asosiy__hrr" />
              <p className="asosiy__text-black">
                Узбекистан утвердил соглашение о содействии занятости в странах
                СНГ
              </p>
              <p className="asosiy__text-data">ИА Красная Весна 10:19</p>
              <hr className="asosiy__hrr" />
              <p className="asosiy__text-black">
                В Узбекистане увеличиваются очереди за автомобилями UzAuto
              </p>
              <p className="asosiy__text-data">
                Северная газета (Армянск) 13:50
              </p>
              <hr className="asosiy__hrr" />
              <p className="asosiy__text-black">
                Минтуризма опровергло приостановку выплат за шаги
              </p>
              <p className="asosiy__text-data">Sputnik Узбекистан 14:32</p>
            </div>
            <img className="chegirma" src="./chegirma.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
