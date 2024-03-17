import { useState } from 'react';
import { Data } from '../../types';
import PSG_LOGO_IMAGE from  '../../../assets/psg-logo.png';
import s from './header-section.module.css';
interface Props {
  data: Data;
}
export const HeaderSection = ({ data }: Props) => {
  const { companyName, companyLogo } = data.common;
  const { menuItems } = data.header;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <div className={s.nav_box}>
          <a href="/" className={s.logo_link}>
            <img
              src={PSG_LOGO_IMAGE}
              className={s.logo}
              alt={companyLogo.alt}
            />
            <span className={s.title}>{companyName}</span>
          </a>

          <div className={s.menu_box}>
            {/*             <a
              href={buttons[0].href}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-purple-800"
            >
              {buttons[0].text}
            </a> */}

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className={s.menu}
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              onClick={toggleMobileMenu}
            >
              <span className={s.menu_header}>Open main menu</span>
              <svg
                className={isMobileMenuOpen ? s.svg_hidden : s.svg}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>

              <svg
                className={isMobileMenuOpen ? s.svg : s.svg_hidden}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={
              isMobileMenuOpen ? s.menu_item_box : s.menu_item_box_hidden
            }
            id="mobile-menu-2"
          >
            <ul className={s.list}>
              {menuItems.map((menuItem, index) => (
                <li key={index} onClick={toggleMobileMenu}>
                  <a
                    href={menuItem.href}
                    className={s.item}
                    /* aria-current={menuItem.isCurrentPage ? 'page' : null} */
                  >
                    {menuItem.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
