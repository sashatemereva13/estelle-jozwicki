import "../css/Home.css";
import { useLanguage } from "../i18n/LanguageContext";
import artwork from "/accueil/accueil.jpg";

export default function Home() {
  const { t } = useLanguage();
  return (
    <section className="homePage">
      <img className="heroImage" src={artwork} alt="Œuvre principale" />

      <p className="heroDescription">{t("home.description")}</p>
    </section>
  );
}
