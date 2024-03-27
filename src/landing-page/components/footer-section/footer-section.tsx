import s from './footer-section.module.css';
import { Data } from '../../types';

interface Props {
  data: Data;
}

export const FooterSection = ({ data }: Props) => {
  const { menuItems } = data.footer;

  return (
    <footer id="CONTACT" className={s.footer}>
      <div className={s.container}>
        <div className={s.grid}>
          {menuItems.map((menuItem, index) => (
            <div key={index}>
              <h3 className={s.category}>{menuItem.category}</h3>
              <ul className={s.list}>
                {menuItem.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} target="_blank" className={s.link}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className={s.line} />
        <p className={s.companyInfo}>Your Company Info Here</p>
      </div>
    </footer>
  );
};
