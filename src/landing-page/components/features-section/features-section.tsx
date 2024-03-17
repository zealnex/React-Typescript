import { Data } from '../../types';
import s from './features-section.module.css';
interface Props {
  data: Data;
}

export const FeaturesSection = ({ data }: Props) => {
  const { section1, section2, link } = data.features;
  return (
    <section id="features" className={s.background}>
      <div className={s.container}>
        <div className={s.section1}>
          {/* <p className="text-3xl font-semibold text-blue-600 mb-5 dark:text-blue-500">
            Revolutionizing Productivity and Efficiency
          </p> */}
          {section1.map((data, i) => {
            return (
              <>
                <h2 className={s.title1}>{data.title}</h2>
                <p className={s.description1}>{data.description}</p>
              </>
            );
          })}
        </div>

        <div className={s.section2}>
          {section2.map((data, i) => {
            return (
              <div key={i}>
                <svg
                  className={s.icon2}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d={data.icon}
                    clipRule="evenodd"
                  ></path>
                </svg>
                <h3 className={s.item2}>{data.title}</h3>
                <p className={s.description2}>{data.description}</p>
              </div>
            );
          })}
          <div className={s.link}>
            {link.map((data, i) => {
              return (
                <div>
                  <a
                    href={data.href}
                    target="_blank"
                    className={s.anchor}
                    rel="noreferrer"
                  >
                    {data.text}
                    <svg
                      className={s.svg}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
