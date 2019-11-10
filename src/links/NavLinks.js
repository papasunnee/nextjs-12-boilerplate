export default [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" }
].map(link => {
  link.style = `nav-link`;
  return link;
});
