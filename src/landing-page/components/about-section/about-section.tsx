/* eslint-disable react-hooks/rules-of-hooks */
import { Data } from '../../types';
import s from './about-section.module.css';
interface Props {
  data: Data;
}
export const AboutSection = ({ data }: Props) => {
  const { items, heading, topicTop, topicBottom } = data.about;

  const listItems = items.map((item, index) => (
    <li key={index} data-aos="fade-left" className={s.li}>
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
          {/* <img
            data-aos="fade-right"
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src="feature-2.jpg"
            alt="feature 2"
          /> */}
          <div className={s.box}>
            <h2
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="30"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className={s.heading}
            >
              {heading}
            </h2>
            <p data-aos="fade-left" className={s.top_topic}>
              {topicTop}
            </p>

            <h4
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="30"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              className={s.choose}
            >
              Why Choose Us?
            </h4>

            <ul className={s.list}>{listItems}</ul>

            <p data-aos="fade-left" className={s.fade}>
              {topicBottom}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
