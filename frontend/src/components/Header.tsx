import { useState } from "react";

interface Props {
  navBarItems: string[];
  menuItems: string[];
  handleNavigation: (item: string) => void;
}

export function Header({ navBarItems, menuItems, handleNavigation }: Props) {
  const [selectedNav, setSelectedNav] = useState(-1);

  // State to manage whether the link is selected or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the isMenuOpen state
  const toggleSelected = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define the classNames based on the isMenuOpen state
  const linkClassNameForA = isMenuOpen
    ? "d-block link-body-emphasis text-decoration-none dropdown-toggle show"
    : "d-block link-body-emphasis text-decoration-none dropdown-toggle";

  // Define the classNames based on the isMenuOpen state for the ul element
  const linkClassNameForUl = isMenuOpen
    ? "dropdown-menu text-small show"
    : "dropdown-menu text-small";

  const linkDataPopperPlacementForUl = isMenuOpen ? "bottom-start" : "";

  return (
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start my-2">
        <a
          href="/"
          className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
        >
          <img
            src="../../cup-hot-fill.svg" // Use the imported logo as the src
            alt="Vite Logo" // Provide alt text for accessibility
            className="bi me-2" // Apply any additional classes if needed
            width="40" // Set the width as needed
            height="32" // Set the height as needed
            role="img" // Set the role as needed
            aria-label="Vite" // Provide an aria-label if necessary
          />
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          {navBarItems.map((item, index) => (
            <li>
              <a
                href="#"
                className={
                  selectedNav === index
                    ? "nav-link px-2 link-secondary"
                    : "nav-link px-2 link-body-emphasis"
                }
                key={item}
                onClick={() => {
                  setSelectedNav(index);
                  handleNavigation(item);
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div className="dropdown text-end">
          <a
            href="#"
            className={linkClassNameForA}
            data-bs-toggle="dropdown"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleSelected} // Toggle the isSelected state on click
          >
            <img
              src="../../person-circle.svg"
              alt="mdo"
              width="32"
              height="32"
              className="rounded-circle"
            />
          </a>
          <ul
            className={linkClassNameForUl}
            style={
              isMenuOpen
                ? {
                    position: "absolute",
                    inset: "0px auto auto 0px",
                    margin: "0px",
                    transform: "translate(0px, 34px)",
                  }
                : {}
            }
            data-popper-placement={linkDataPopperPlacementForUl}
          >
            {menuItems.map((item) => (
              <li>
                <a href="#" className="dropdown-item" key={item}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
