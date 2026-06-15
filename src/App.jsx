import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { styles } from "./styles.js";
import { servicesData } from "./servicesData";
import { productsData } from "./productsData";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import placeholderLogo from "./assets/logo.png";
import telegramIcon from "./assets/icons8-телеграм.svg";
import heroLogo from "./assets/rgb.png";
import maxIcon from "./assets/max.png";

const App = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeModalImg, setActiveModalImg] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={styles.body}>
      {/* Шапка сайта */}
      <header style={{ ...styles.header, height: "90px" }}>
        <div
          style={{
            ...styles.navContainer,
            justifyContent: isMobile ? "center" : "space-between",
          }}
        >
          {!isMobile && (
            <a
              href="#"
              onClick={(e) => handleScroll(e, "hero")}
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                textDecoration: "none",
              }}
            >
              <img
                src={placeholderLogo}
                alt="Логотип"
                style={{
                  height: "170px",
                  width: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </a>
          )}

          <nav
            style={{
              ...styles.navLinks,
              gap: isMobile ? "15px" : "30px",
            }}
          >
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              style={styles.navLink}
            >
              О нас
            </a>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, "services")}
              style={styles.navLink}
            >
              Услуги
            </a>
            <a
              href="#works"
              onClick={(e) => handleScroll(e, "works")}
              style={styles.navLink}
            >
              Работы
            </a>
            <a
              href="#contacts"
              onClick={(e) => handleScroll(e, "contacts")}
              style={styles.navLink}
            >
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Главный баннер */}
      <section
        id="hero"
        style={{
          ...styles.hero,
          backgroundImage: `url(${heroLogo})`,
        }}
      >
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContentContainer}>
          <h1 style={styles.heroTitle}>
            Качественная полиграфия в кратчайшие сроки
          </h1>
          <p style={styles.heroSubtitle}>
            Печатаем визитки, флаеры, баннеры и сувенирную продукцию от 1
            экземпляра
          </p>
          <a
            href="#contacts"
            style={styles.btn}
            onClick={(e) => handleScroll(e, "contacts")}
          >
            Связаться с нами
          </a>
        </div>
      </section>

      {/* О нас */}
      <section id="about" style={styles.container}>
        <h2 style={styles.h2}>О нашей типографии</h2>
        <div style={styles.aboutGrid}>
          <div style={styles.aboutText}>
            <p style={styles.p}>
              Мы — современная типография полного цикла. Помогаем бизнесу и
              частным лицам создавать яркую, запоминающуюся печатную продукцию
              уже более 5 лет.
            </p>
            <p style={styles.p}>
              Используем только профессиональное оборудование, что гарантирует
              точную цветопередачу и четкость каждой детали.
            </p>
            <div style={styles.features}>
              <div style={styles.featureCard}>
                <h4 style={styles.featureTitle}>Скорость</h4>
                <p style={styles.featureDesc}>Цифровая печать за 1 день</p>
              </div>
              <div style={styles.featureCard}>
                <h4 style={styles.featureTitle}>Качество</h4>
                <p style={styles.featureDesc}>Контроль брака на всех этапах</p>
              </div>
              <div style={styles.featureCard}>
                <h4 style={styles.featureTitle}>Тираж</h4>
                <p style={styles.featureDesc}>От 1 штуки до бесконечности</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" style={styles.servicesSection}>
        <div style={styles.container}>
          <h2 id="catalog-title" style={styles.h2}>
            Что мы печатаем
          </h2>

          <div style={styles.servicesGrid}>
            {productsData.slice(0, visibleCount).map((item) => (
              <div
                key={item.id}
                style={{
                  ...styles.serviceCard,
                  ...styles.serviceCardAnimated,
                  cursor: "pointer",
                }}
                onClick={() => setActiveProduct(item)}
              >
                <div style={styles.cardImgWrapper}>
                  <img
                    src={item.images && item.images[0]}
                    alt={item.title}
                    style={styles.cardImgPlaceholder}
                  />
                </div>
                <h3 style={styles.serviceTitle}>{item.title}</h3>
                <p style={styles.serviceDesc}>{item.desc}</p>
                <div style={styles.price}>{item.price}</div>
              </div>
            ))}
          </div>

          {productsData.length > 4 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
                width: "100%",
              }}
            >
              <button
                style={styles.loadMoreBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  if (visibleCount < productsData.length) {
                    setVisibleCount((prev) => prev + 4);
                  } else {
                    setVisibleCount(4);
                    document
                      .getElementById("catalog-title")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {visibleCount < productsData.length ? "Показать еще" : "Скрыть"}
              </button>
            </div>
          )}

          {activeProduct && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.85)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
              }}
              onClick={() => setActiveProduct(null)}
            >
              <div
                style={{
                  position: "relative",
                  width: "90%",
                  maxWidth: "800px",
                  height: "70vh",
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    background: "none",
                    border: "none",
                    fontSize: "28px",
                    cursor: "pointer",
                    zIndex: 10,
                    color: "#333",
                  }}
                  onClick={() => setActiveProduct(null)}
                >
                  &times;
                </button>

                <h3
                  style={{
                    margin: "0 0 15px 0",
                    fontSize: "1.4rem",
                    color: "#333",
                    textAlign: "center",
                  }}
                >
                  {activeProduct.title}
                </h3>

                <div
                  style={{
                    flex: 1,
                    width: "100%",
                    height: "100%",
                    minHeight: 0,
                  }}
                >
                  <Swiper
                    modules={[Navigation]}
                    navigation={activeProduct.images.length > 1}
                    spaceBetween={10}
                    slidesPerView={1}
                    style={{ width: "100%", height: "100%" }}
                  >
                    {activeProduct.images.map((imgUrl, index) => (
                      <SwiperSlide
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={imgUrl}
                          alt={`${activeProduct.title} - фото ${index + 1}`}
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                            borderRadius: "8px",
                          }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <p
                  style={{
                    marginTop: "15px",
                    color: "#666",
                    fontSize: "0.95rem",
                    textAlign: "center",
                  }}
                >
                  Цена:{" "}
                  <strong style={{ color: "#0085ff" }}>
                    {activeProduct.price}
                  </strong>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Примеры работ */}
      <section id="works" style={styles.worksSection}>
        <h2 style={styles.h2}>Примеры наших работ</h2>

        <div style={styles.sliderWrapper}>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            loop={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            allowTouchMove={true}
            navigation={{
              nextEl: "#next-btn",
              prevEl: "#prev-btn",
            }}
            breakpoints={{
              480: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4.2 },
              1366: { slidesPerView: 5.2 },
              1600: { slidesPerView: 6.2 },
            }}
            style={styles.swiperContainer}
          >
            {servicesData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  style={styles.slideCard}
                  onClick={() => {
                    if (slide.src) {
                      setActiveModalImg(slide.src);
                    } else if (slide.image) {
                      setActiveModalImg(slide.image);
                    }
                  }}
                  title="Нажмите, чтобы увеличить"
                >
                  <img
                    src={slide.src || slide.image}
                    alt={slide.title}
                    style={styles.slideImg}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" style={styles.contactsSection}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Контакты</h2>

          <div
            style={{
              ...styles.contactGrid,
              flexDirection: isMobile ? "column" : "row",
              display: "flex",
              gap: "30px",
            }}
          >
            <div
              style={{
                ...styles.contactInfo,
                width: isMobile ? "100%" : "50%",
                textAlign: "left",
                padding: isMobile ? "0 20px" : "0",
                boxSizing: "border-box",
              }}
            >
              <p style={styles.contactParam}>
                <strong>Адрес:</strong> ул. Щорса, 1А, Партизанск
              </p>
              <p style={styles.contactParam}>
                <strong>Телефон:</strong> +7 (914) 325-62-11
              </p>
              <p style={styles.contactParam}>
                <strong>Email:</strong> shmatko_0@mail.ru
              </p>
              <p style={styles.contactParam}>
                <strong>Режим работы:</strong> Пн–Пт с 08:30 до 17:00 (обед
                12:00–13:00)
              </p>
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  width: "100%",
                  gap: "20px",
                }}
              >
                <a
                  href="https://t.me/PolygrafiyaPartizansk"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.tgBtn}
                >
                  <img src={telegramIcon} alt="tg" />
                </a>

                <a
                  href="https://t.me/PolygrafiyaPartizansk"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.maxBtn}
                >
                  <img src={maxIcon} alt="max" style={{ width: 48 }} />
                </a>
              </div>
            </div>

            <div style={{ width: isMobile ? "100%" : "50%" }}>
              <div
                style={{
                  ...styles.mapContainer,
                  height: isMobile
                    ? "300px"
                    : styles.mapContainer?.height || "400px",
                  width: "100%",
                }}
              >
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A77462952917be66c309f21dce7ec5b804abc29313266d312b65934e378139369&source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen={true}
                  style={{
                    border: "none",
                    display: "block",
                    borderRadius: "12px",
                  }}
                  title="Яндекс Карта"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer style={styles.footer}>
        <p>&copy; 2026 Печатный салон «Полиграфия». Все права защищены.</p>
      </footer>

      {activeModalImg && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={() => setActiveModalImg(null)}
        >
          <div
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "800px",
              height: "70vh",
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "none",
                border: "none",
                fontSize: "28px",
                cursor: "pointer",
                zIndex: 10,
                color: "#333",
              }}
              onClick={() => setActiveModalImg(null)}
            >
              &times;
            </button>

            <div
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                minHeight: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={activeModalImg}
                alt="Просмотр работы"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
