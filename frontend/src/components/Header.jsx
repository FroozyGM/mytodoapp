import logo from "../assets/img/bars.svg";

function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="Логотип ToDo" className="header-logo" />
      <h1 className="header-title">ToDo</h1>
    </header>
  );
}

export default Header;
