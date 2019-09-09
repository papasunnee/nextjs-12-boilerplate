import Link from "next/link";
import NewsLetter from "./NewsLetter";
import { Phone, Email } from "../Common/ContactInfo";
import "./index.scss";

export default () => {
  return (
    <footer>
      <div className="container">
        <div className="row gutters">
          <div className="col-md-3">
            <div className="first">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <p>
                <Phone />
              </p>
              <p>
                <Email />
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <h6 className="title">Navigate</h6>
            <ul className="link">
              {NavigateLinks.map((link, key) => {
                return (
                  <li key={key}>
                    <Link href={link.href}>
                      <a>{link.label}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="title">Schemes</h6>
            <ul className="link">
              {SchemesLinks.map(({ label, href }, key) => {
                return (
                  <li key={key}>
                    <Link href={href}>
                      <a>{label}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="title">Newsletter</h6>
            <NewsLetter />
          </div>
        </div>
        <hr className="my-4" />
        <p className="copyright">
          Copyright &copy; 2019. Companys Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

const NavigateLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" }
];

const SchemesLinks = [
  { label: "Link 1", href: "" },
  { label: "Link 2", href: "" },
  { label: "Link 3", href: "" }
];
