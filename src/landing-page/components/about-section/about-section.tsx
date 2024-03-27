import { Data } from '../../types';
import s from './about-section.module.css';

interface Props {
  data: Data;
}

export const AboutSection = ({ data }: Props) => {
  const { items, heading, topicTop, topicBottom } = data.about;

  const listItems = items.map((item, index) => (
    <li key={index} className={s.li}>
      <svg
        className={s.svg}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className={s.title}>{item.title}</span>
    </li>
  ));

  return (
    <section id="about" className={s.background}>
      <div className={s.container}>
        <div className={s.section}>
          <div className={s.box}>
            <h2 className={s.heading}>{heading}</h2>
            <p className={s.top_topic}>{topicTop}</p>
            <h4 className={s.choose}>Why Choose Us?</h4>
            <ul className={s.list}>{listItems}</ul>
            <p className={s.fade}>{topicBottom}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
