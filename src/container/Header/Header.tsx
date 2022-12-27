import style from "./Header.module.scss";

type Props = {};

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <h2>Еда как искусство</h2>
        </div>
        <nav className={style.nav}>
          <ul>
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Портфолио</a>
            </li>
            <li>
              <a href="#">Обо мне</a>
            </li>
            <li>
              <a href="#">Книги</a>
            </li>
            <li>
              <a href="#">Блог</a>
            </li>
            <li>
              <a href="#">Связаться</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
