import { Link } from "react-router-dom";

function Article() {
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

        {/* Article-main */}
        <div className="article-icon-div">
          <img src="./article-icon.svg" alt="" />
          <p className="article-icon-div-data">FBM.ru 22:23</p>
        </div>
        <div className="article-main">
          <div className="article-main-left">
            <p className="article-left__p1">
              Илон Маск принял участие во Всемирной сетевой конференции в Китае
            </p>
            <img className="article-tesla" src="./tesla.svg" alt="" />
            <p className="article-left__p2">
              Илон Маск (Elon Musk, Руководитель фирмы Tesla и других проектов)
              уже второй раз за полторы недели обратился к китайским правящим
              кругам и гражданам. В видеоролике он уверил их в своей готовности
              инвестировать средства в развитие и расширять бизнес на территории
              этой страны. Особое внимание будет уделяться небезопасности
              обрабатываемых данных.
            </p>
            <p className="article-left__p3">
              Они будут храниться только в самом Китае и поэтому будут доступны
              правительству Поднебесной в любой момент.
            </p>
            <p className="article-left__p4">
              Новые заявления Илон Маск сделал во время видеообращения к
              аудитории мероприятия World Internet Conference, которое прошло в
              конце недели в Поднебесной. Компанию ему составили руководители
              Cisco Systems (Чак Роббинс), Intel (Пэт Гелсингер) и Qualcomm
              (Кристиано Амон), а интересы бизнеса Китайской Народной Республики
              представляли руководители Alibaba и Xiaomi.
            </p>
            <p className="article-left__p5">
              Открывал мероприятие Лю Хэ (Liu He, Вице-премьер Госсовета КНР),
              который привёл слова Си Цзиньпина (Xi Jinping) о стремлении
              Поднебесной работать со всеми державами над созданием прозрачной
              цифровой экономики.
            </p>
            <p className="article-left__p6">
              В ближайшее время Tesla собирается не только сделать шире объёмы
              производства автомобилей на электрической тяге в шанхайском
              филиале, но и разработать силами местной студии недорогую модель
              электрического автомобиля (стоимостью менее 25 000 долларов).
            </p>
            <p className="article-left__p7">
              Уже в настоящий момент собранные в Китайской Народной Республике
              электрокары Tesla Model Y и Model 3 поставляются на экспорт в
              Европу.
            </p>
            <hr />
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
        <p className="qiziqishlarm">По вашим интересам</p>
        <div className="article-qiziqishlarm">
          <div className="qiziqishlarim-list1">
            <p className="qiziqishlarm__p1">
              Стали известны ёмкости аккумуляторов всех моделей iPhone 13
            </p>
            <p className="qiziqishlarm__p2">
              Во время презентации iPhone 13 Apple придала большое значения...
            </p>
            <div className="qiziqishlarim__div">
              <img src="./kard-3__icon.svg" alt="" />
              <p className="qiziqishlarm__data">Digger.ru 14:25</p>
            </div>
          </div>
          <div className="qiziqishlarim-list2">
            <p className="qiziqishlarm__p1">
              Nature: ученые смогли доказать природное происхождение
              коронавируса SARS-CoV-2
            </p>
            <p className="qiziqishlarm__p2">
              Во время презентации iPhone 13 Apple придала большое значение...
            </p>
            <div className="qiziqishlarim__div">
              <img src="./kard-4__icon.svg" alt="" />
              <p className="qiziqishlarm__data">Digger.ru 14:25</p>
            </div>
          </div>
          <div className="qiziqishlarim-list3">
            <p className="qiziqishlarm__p1">
              Китайская марка JAC повысила цены на лифтбек и пикап в России
            </p>
            <p className="qiziqishlarm__p2">
              Две модели китайского бренда JAC из пяти, представленных на
              российском...
            </p>
            <div className="qiziqishlarim__div">
              <img src="./kard-5__icon.svg" alt="" />
              <p className="qiziqishlarm__data">Digger.ru 14:25</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
