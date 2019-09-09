import Link from "next/link";
import { NavItem } from "reactstrap";
import NavLinks from "../../links/NavLinks";
import "./NavMenu.scss";

export default () => {
  const Menu = NavLinks.map(({ label, href, style, download }, key) => {
    return (
      <NavItem key={key}>
        <Link href={href}>
          <a className={style}>{label}</a>
        </Link>
      </NavItem>
    );
  });
  return Menu;
};
