import estelle from "/main/estelle.jpg";
import { useLanguage } from "../i18n/LanguageContext";
import "../css/About.css";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="aboutPage">
      <div className="aboutContainer">
        <h2 className="aboutTitle">{t("about.title")}</h2>

        <div className="flexRowAbout">
          <img
            src={estelle}
            alt="Portrait d'Estelle Jozwicki"
            className="aboutImage"
          />

          <div className="aboutTextWrapper">
            <p className="aboutText">{t("about.text1")}</p>
            <p className="aboutText">{t("about.text2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
