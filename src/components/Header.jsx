import PropTypes from "prop-types";

function Header({ text, bgcolor, textcolor }) {
  const headerStyles = {
    backgroundColor: bgcolor,
    color: textcolor,
  };

  return (
    <header style={ headerStyles }>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: "Default Header Text",
};

export default Header;
