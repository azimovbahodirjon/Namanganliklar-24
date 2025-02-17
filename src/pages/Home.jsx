import { Link } from "react-router-dom";

function Home() {
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
            <Link className="header__a" to="./List">
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
        {/* Shop */}
        <img className="Shop__img" src="./Shop.svg" alt="" />
        {/* Kardlar */}
        <div className="grid__container">
          <div className="kard__1">
            <p className="kard__p1">
              Кандидат на пост канцлера ФРГ Шольц назвал условия коалиционного
              соглашения
            </p>
            <p className="kard__p2">
              Лидер Социал-демократической партии Германии (СДПГ) и кандидат на
              должность...
            </p>
            <img className="kard__img" src="./kard-1__img.svg" alt="" />
            <div className="kard__bottom">
              <img className="kard__icon" src="./kard-1__icon.svg" alt="" />
              <p className="kard__bottom_text">ИА Красная Весна 15:55</p>
            </div>
          </div>
          <div className="kard__2">
            <p className="kard__p1">
              Ученые доказали экспериментальным путем пользу покровных культур
            </p>
            <p className="kard__p2">
              Новое исследование ученых университета Иллинойса объединяет
              полевые данные...
            </p>
            <img className="kard__img" src="./kard-2__img.svg" alt="" />
            <div className="kard__bottom">
              <img className="kard__icon" src="./kard-2__icon.svg" alt="" />
              <p className="kard__bottom_text">Газета.Ru 12:54</p>
            </div>
          </div>
          <div className="kard__3">
            <p className="kard__p1">
              Baidu запустила публичный сервис роботакси Apollo Go в Шанхае
            </p>
            <p className="kard__p2">
              Автопарк Baidu состоит из модифицированных электромобилей EV...
            </p>
            <img className="kard__img" src="./kard-3__img.svg" alt="" />
            <div className="kard__bottom">
              <img className="kard__icon" src="./kard-3__icon.svg" alt="" />
              <p className="kard__bottom_text">Хайтек+ 13:44</p>
            </div>
          </div>
          <div className="kard__4">
            <p className="kard__p1">
              Стали известны ёмкости аккумуляторов всех моделей iPhone 13
            </p>
            <p className="kard__p2">
              Во время презентации iPhone 13 Apple придала большое значения...
            </p>
            <img className="kard__img" src="./kard-4__img.svg" alt="" />
            <div className="kard__bottom">
              <img className="kard__icon" src="./kard-4__icon.svg" alt="" />
              <p className="kard__bottom_text">Digger.ru 14:25</p>
            </div>
          </div>
          <div className="kard__5">
            <p className="kard__p1">
              Nature: ученые смогли доказать природное происхождение
              коронавируса SARS-CoV-2
            </p>
            <p className="kard__p2">
              Во время презентации iPhone 13 Apple придала большое значение...
            </p>
            <img className="kard__img" src="./kard-5__img.svg" alt="" />
            <div className="kard__bottom">
              <img className="kard__icon" src="./kard-5__icon.svg" alt="" />
              <p className="kard__bottom_text">Lenta.ru 10:54</p>
            </div>
          </div>
          <div className="kard__6">
            {" "}
            <p className="kard__p1">
              Nature: ученые смогли доказать природное происхождение
              коронавируса SARS-CoV-2
            </p>
            <p className="kard__p2">
              Во время презентации iPhone 13 Apple придала большое значение...
            </p>
            <img className="kard__img" src="./kard-6__img.svg" alt="" />
            <div className="kard__bottom">
              <img className="kard__icon" src="./kard-6__icon.svg" alt="" />
              <p className="kard__bottom_text">Lenta.ru 10:54</p>
            </div>
          </div>
        </div>
        {/* group-33*/}
        <div className="group-33">
          <p className="group-33__text1">
            Хотите быть в курсе свежих новостей? Включите уведомления!
          </p>
          <button className="group-33__btn">Включит </button>
        </div>
        {/* В мире */}
        <p className="мире">В мире</p>
        <div className="Dunyo">
          <div className="dunyo__left">
            <div className="dunyo__blog1">
              <img
                className="dunyo__img"
                src="./dunyo__img1.svg"
                alt=""
                width={210}
                height={165}
              />
              <div className="dunyo__blog1__list1">
                <p className="dunyo__list1__p1">
                  Китайский Чунцин запустил чартерный рейс для студентов до
                  Британии
                </p>
                <p className="dunyo__list1__p2">
                  Чартерный рейс с 244 китайскими студентами вылетел из города
                  центрального подчинения Чунцина на юго-западе Китая в
                  британский Манчестер...
                </p>
                <div className="kard__bottom">
                  <img className="kard__icon" src="./kard-4__icon.svg" alt="" />
                  <p className="kard__bottom_text">Digger.ru 14:25</p>
                </div>
              </div>
            </div>
            <div className="dunyo__blog2">
              <img
                className="dunyo__img"
                src="./dunyo__img2.svg"
                alt=""
                width={210}
                height={165}
              />
              <div className="dunyo__blog1__list1">
                <p className="dunyo__list1__p1">
                  В Германии выпустят ограниченную партию плюшевых мишек в
                  образе Меркель
                </p>
                <p className="dunyo__list1__p2">
                  БЕРЛИН, 19 сентября. / ТАСС/. Знаменитая фабрика по
                  производству плюшевых игрушек в городе Кобург (федеральная
                  земля Бавария) изготовила уникального...
                </p>
                <div className="kard__bottom">
                  <img className="kard__icon" src="./kard-3__icon.svg" alt="" />
                  <p className="kard__bottom_text">Digger.ru 14:25</p>
                </div>
              </div>
            </div>
            <div className="dunyo__blog3">
              <img
                className="dunyo__img"
                src="./dunyo__img3.svg"
                alt=""
                width={210}
                height={165}
              />
              <div className="dunyo__blog1__list1">
                <p className="dunyo__list1__p1">
                  Акции КНР утратили доверие инвесторов. Что делать с бумагами
                  прямо сейчас
                </p>
                <p className="dunyo__list1__p2">
                  За последние месяцы инвесторы в китайский рынок пережили
                  настоящее потрясение — из-за ужесточения регулирования
                  технологического сектора и критики некоторых...
                </p>
                <div className="kard__bottom">
                  <img className="kard__icon" src="./kard-1__icon.svg" alt="" />
                  <p className="kard__bottom_text">РБК Инвестиции 09:35</p>
                </div>
              </div>
            </div>
            <div className="dunyo__blog3">
              <img
                className="dunyo__img"
                src="./dunyo__img4.svg"
                alt=""
                width={210}
                height={165}
              />
              <div className="dunyo__blog1__list1">
                <p className="dunyo__list1__p1">
                  Китай раскритиковал заключенный Австралией, США и
                  Великобританией антикитайский союз AUKUS
                </p>
                <p className="dunyo__list1__p2">
                  Не только Франция, которая лишилась многомиллиардного
                  контракта с Австралий, осталась недовольна созданием
                  трехстороннего оборонного альянса AUKUS, пишет Anna-News.info
                </p>
                <div className="kard__bottom">
                  <img className="kard__icon" src="./kard-5__icon.svg" alt="" />
                  <p className="kard__bottom_text">РБК Инвестиции 09:35</p>
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

export default Home;
