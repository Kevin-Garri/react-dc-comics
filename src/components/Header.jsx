

const Header = (props) => {
  const menuLinks = props.menu;
  return (
    <header className="container">
      <figure>
        <img src="/img/dc-logo.png" alt="Logo" />
      </figure>
      <nav>
        <ul>
          {menuLinks.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header