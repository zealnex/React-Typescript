import { Data } from '../../types';
import s from './services-section.module.css';

interface Props {
  data: Data;
}

export const ServicesSection = ({ data }: Props) => {
  const { title, services } = data.services;

  return (
    <section id="services" className={s.background}>
      <div className={s.container}>
        <div className={s.flex}>
          <div className={s.display}>
            <h2 className={s.title}>{title}</h2>
          </div>
          {services.map((service, index) => (
            <div className={`${s.section}`} key={index}>
              <div className={`${s.item}, , ${s.hoverEffect}`}> 
                <svg
                  className={s.svg}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d={service.icon}
                    clipRule="evenodd"
                  ></path>
                </svg>
                <h3 className={s.sub_title}>{service.title}</h3>
                <p className={s.description}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
