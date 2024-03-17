import DASHBOARD_IMAGE from "../../../assets/dashboard.png";
import { Data } from "../../types";
import s from "./main-section.module.css";

interface Props {
  data: Data;
}
export const MainSection = ({ data }: Props) => {
  const { heading, content, buttons } = data.main;

  return (
    <section id="home" className={s.section}>
      <div className={s.section_box}>
        <div className={s.box}>
          <h1 data-aos="fade-right" className={s.heading}>
            {heading[0]}
          </h1>
          <h1 data-aos="fade-right" className={s.heading}>
            {heading[1]}
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="30"
            data-aos-duration="800"
            className={s.content}
          >
            {content}
          </p>
          <div className={s.btn_box}>
            <a
              data-aos="fade-right"
              data-aos-delay="40"
              data-aos-duration="900"
              href={buttons[0].href}
              target="_blanck"
              className={s.btn_link}
            >
              <div className={s.center}>
                {/* <img className="h-5 w-5" src="/github.png" alt="github" /> */}
                <p className={s.white_color}> {buttons[0].text}</p>
              </div>
            </a>
            <a
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              href={buttons[1].href}
              target="_blanck"
              className={s.btn_link}
            >
              <div className={s.center}>
                <p className={s.white_color}> {buttons[1].text}</p>
              </div>
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className={s.img_box}>
          <img className={s.img} src={DASHBOARD_IMAGE} alt="representational" />
        </div>
      </div>
    </section>
  );
};
