import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a  href="/about" className="link link-hover">About us</a>
          <a href="/contact" className="link link-hover">Contact</a>
          {/* <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a> */}
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="mailto:singhashutosh6895@gmail.com" title="Email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 13.16L4.28 6h15.44L12 13.16zm0 2.83L2.45 6.6C2.15 6.22 2 5.72 2 5.2V18.8c0 .52.15 1.02.45 1.4L12 16.06l9.55 4.14c.3.38.45.88.45 1.4V5.2c0-.52-.15-1.02-.45-1.4L12 15.99z"></path>
              </svg>
            </a>
            <a href="https://github.com/ashu-2808" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.4 2.85 8.13 6.84 9.45.5.09.68-.22.68-.49 0-.24-.01-.86-.01-1.69-2.79.61-3.38-1.35-3.38-1.35-.46-1.17-1.13-1.48-1.13-1.48-.92-.63.07-.62.07-.62 1.02.07 1.55 1.05 1.55 1.05.91 1.56 2.38 1.11 2.97.85.09-.66.36-1.11.66-1.36-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.71 0 0 .83-.27 2.7 1.03.78-.22 1.61-.33 2.43-.33.82 0 1.65.11 2.43.33 1.87-1.3 2.7-1.03 2.7-1.03.55 1.41.2 2.45.1 2.71.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.69-4.57 4.94.37.32.7.96.7 1.95 0 1.41-.01 2.55-.01 2.89 0 .27.18.59.69.49C19.15 20.13 22 16.4 22 12c0-5.52-4.48-10-10-10z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ashu2808/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.03 20.45H3.58V9.73h3.45v10.72zM5.31 8.45c-1.1 0-2.01-.9-2.01-2.01s.91-2.01 2.01-2.01c1.1 0 2.01.9 2.01 2.01 0 1.11-.91 2.01-2.01 2.01zM20.45 20.45h-3.45v-5.69c0-1.35-.03-3.08-1.88-3.08-1.89 0-2.18 1.48-2.18 3.01v5.76h-3.45V9.73h3.31v1.46h.05c.46-.88 1.6-1.81 3.3-1.81 3.52 0 4.16 2.32 4.16 5.35v6.72z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by @Ashu2808 </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
