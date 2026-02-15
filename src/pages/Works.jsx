import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { seriesData } from "../lists/seriesData";
import "../css/Works.css";
import { useLanguage } from "../i18n/LanguageContext";

export default function Works() {
  const [currentSeries, setCurrentSeries] = useState("serie1");
  const [index, setIndex] = useState(0);
  const { t } = useLanguage();

  const introRef = useRef(null);
  const touchStartX = useRef(null);

  const images = seriesData[currentSeries];
  const current = images[index];

  const details1Key = `works.details1_${currentSeries}`;
  const details2Key = `works.details2_${currentSeries}`;

  const seriesKeys = Object.keys(seriesData);
  const currentSeriesIndex = seriesKeys.indexOf(currentSeries) + 1;

  const moduleLabel = `Module ${currentSeriesIndex}`;

  /* -------------------------
     SCROLL CONTROL
  ------------------------- */

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.85], [1, 1, 0]);

  const textY = useTransform(scrollYProgress, [0, 0.3, 0.85], [0, 0, -80]);

  const instructionOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

  const imageBrightness = useTransform(scrollYProgress, [0, 0.6], [0.75, 1]);
  const brightnessFilter = useTransform(
    imageBrightness,
    (v) => `brightness(${v})`,
  );

  /* -------------------------
     SERIES CHANGE
  ------------------------- */

  function changeSeries(name) {
    setCurrentSeries(name);
    setIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* -------------------------
     NAVIGATION
  ------------------------- */

  function nextImage() {
    setIndex((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  /* -------------------------
     KEYBOARD
  ------------------------- */

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images]);

  /* -------------------------
     MOBILE SWIPE
  ------------------------- */

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e) {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - touchStartX.current;

    if (Math.abs(diff) > 40) {
      diff < 0 ? nextImage() : prevImage();
    }
  }

  return (
    <section className="worksPage">
      {/* NAV */}
      <div className="seriesNav">
        {Object.keys(seriesData).map((serie) => (
          <span
            key={serie}
            className={`seriesItem ${currentSeries === serie ? "active" : ""}`}
            onClick={() => changeSeries(serie)}
          >
            {serie}
          </span>
        ))}
      </div>

      <div ref={introRef} className="seriesIntro">
        {/* LEFT SIDE TEXT */}
        <motion.div
          className="introText"
          style={{
            opacity: textOpacity,
            y: textY,
          }}
        >
          <h2>{currentSeries}</h2>

          <p>{t(details1Key)}</p>
          <p>{t(details2Key)}</p>
        </motion.div>
      </div>

      {/* GALLERY */}
      {/* GALLERY */}
      <div
        className="gallerySection"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.src}
            className="galleryItem"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            {/* IMAGE */}
            <img
              src={current.src}
              alt={current.title}
              className="workImage"
              onClick={nextImage}
              draggable={false}
            />

            {/* DESCRIPTION */}
            <div className="workDescription">
              <div className="clickHint">{t("works.clickHint")}</div>
              <p>{current.title}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
