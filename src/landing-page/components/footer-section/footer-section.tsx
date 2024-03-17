import { Link } from 'react-router-dom';
import s from './footer-section.module.css';
import { Data } from '../../types';
interface Props {
  data: Data;
}
export const FooterSection = ({ data }: Props) => {
  const { companyFooterInfo } = data.common;
  const { menuItems } = data.footer;

  return (
    <footer id="CONTACT" className={s.background}>
      <div className={s.container}>
        <div className={s.body}>
          {menuItems.map((menuItem, index) => (
            <div key={index}>
              <h3 className={s.category}>{menuItem.category}</h3>
              <ul className={s.list}>
                {menuItem.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={s._bottom}>
                    <a href={link.href} target="_blanck" className={s.item}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className={s.line} />
        <div className={s.align_center}>
        </div>
      </div>
    </footer>
  );
};
