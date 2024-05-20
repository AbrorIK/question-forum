export function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 mx-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <img
              src="../../cup-hot-fill.svg" // Use the imported logo as the src
              alt="Vite Logo" // Provide alt text for accessibility
              className="bi" // Apply any additional classes if needed
              width="30" // Set the width as needed
              height="24" // Set the height as needed
              role="img" // Set the role as needed
              aria-label="Vite" // Provide an aria-label if necessary
            />
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2024 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://github.com/AbrorIK"
            >
              <img
                src="../../github.svg" // Use the imported logo as the src
                alt="Vite Logo" // Provide alt text for accessibility
                className="bi" // Apply any additional classes if needed
                width="24" // Set the width as needed
                height="24" // Set the height as needed
                role="img" // Set the role as needed
                aria-label="Vite" // Provide an aria-label if necessary
              />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.linkedin.com/in/inomkhujaev"
            >
              <img
                src="../../linkedin.svg" // Use the imported logo as the src
                alt="Vite Logo" // Provide alt text for accessibility
                className="bi" // Apply any additional classes if needed
                width="24" // Set the width as needed
                height="24" // Set the height as needed
                role="img" // Set the role as needed
                aria-label="Vite" // Provide an aria-label if necessary
              />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.instagram.com/abror_inomkhujaev/"
            >
              <img
                src="../../instagram.svg" // Use the imported logo as the src
                alt="Vite Logo" // Provide alt text for accessibility
                className="bi" // Apply any additional classes if needed
                width="24" // Set the width as needed
                height="24" // Set the height as needed
                role="img" // Set the role as needed
                aria-label="Vite" // Provide an aria-label if necessary
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
