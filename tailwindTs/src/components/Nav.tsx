import { headerLogo } from "../assets/images";
const Navbar = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={headerLogo} />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
