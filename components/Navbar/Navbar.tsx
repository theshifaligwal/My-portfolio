// CSS
import navbarStyles from "../../styles/components/Navbar.module.css";

// Next Js Components
import Link from "next/link";

// Components
import NavbarDesktopLinks from "./NavbarDesktopLinks";
import NavbarMobileLinks from "./NavbarMobileLinks";

const Navbar = () => {
  return (
    <nav className={navbarStyles.navbar}>
      <Link href="/">
        <a>
          <h1 className={navbarStyles.main_logo}>theshifaligwal</h1>
        </a>
      </Link>
      <NavbarMobileLinks />
      <NavbarDesktopLinks />
    </nav>
  );
};

export default Navbar;
