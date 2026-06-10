import { useState } from "react";
// Импортируем Swiper и его модули
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { styles } from "./styles.js";
import { servicesData } from "./servicesData";
// Импортируем стили Swiper
import "swiper/css";
import "swiper/css/navigation";
import placeholderLogo from "./assets/logo.png";
import telegramIcon from "./assets/icons8-телеграм.svg";

const App = () => {
  const [activeModalImg, setActiveModalImg] = useState(null);
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
        <div style={styles.navContainer}>
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

          {/* Навигация */}
          <nav style={styles.navLinks}>
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
          backgroundImage: `url(${placeholderLogo})`,
        }}
      >
        {/*темный оверлей */}
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
          <h2 style={styles.h2}>Что мы печатаем</h2>
          <div style={styles.servicesGrid}>
            {/* Карточка 1 */}
            <div style={styles.serviceCard}>
              <div style={styles.cardImgWrapper}>
                <img
                  src={placeholderLogo}
                  alt="Печать на дереве"
                  style={styles.cardImgPlaceholder}
                />
              </div>
              <h3 style={styles.serviceTitle}>Печать на дереве и фанере</h3>
              <p style={styles.serviceDesc}>
                Яркие картинки, фотографии, элементы декора и вывески на
                деревянной основе с текстурой.
              </p>
              <div style={styles.price}>от 600 руб / шт</div>
            </div>

            {/* Карточка 2 */}
            <div style={styles.serviceCard}>
              <div style={styles.cardImgWrapper}>
                <img
                  src={placeholderLogo}
                  alt="Печать на металле"
                  style={styles.cardImgPlaceholder}
                />
              </div>
              <h3 style={styles.serviceTitle}>Печать на металле</h3>
              <p style={styles.serviceDesc}>
                Таблички, шильды, наградные дипломы и долговечные изображения на
                металлических пластинах.
              </p>
              <div style={styles.price}>от 500 руб / шт</div>
            </div>

            {/* Карточка 3 */}
            <div style={styles.serviceCard}>
              <div style={styles.cardImgWrapper}>
                <img
                  src={placeholderLogo}
                  alt="Разнообразные блокноты"
                  style={styles.cardImgPlaceholder}
                />
              </div>
              <h3 style={styles.serviceTitle}>Разнообразные блокноты</h3>
              <p style={styles.serviceDesc}>
                Изготовление уникальных блокнотов: на спирали, с мягкой или
                твердой обложкой, разной линовкой.
              </p>
              <div style={styles.price}>от 180 руб / шт</div>
            </div>

            {/* Карточка 4 */}
            <div style={styles.serviceCard}>
              <div style={styles.cardImgWrapper}>
                <img
                  src={placeholderLogo}
                  alt="Визитки и полиграфия"
                  style={styles.cardImgPlaceholder}
                />
              </div>
              <h3 style={styles.serviceTitle}>Визитки и полиграфия</h3>
              <p style={styles.serviceDesc}>
                Классическая печать рекламных материалов, листовок и визитных
                карточек любого формата.
              </p>
              <div style={styles.price}>от 2 руб / шт</div>
            </div>
          </div>
        </div>
      </section>

      {/* Примеры работ*/}
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

          <div style={styles.contactGrid}>
            {/* Левая колонка */}
            <div style={styles.contactInfo}>
              <p style={styles.contactParam}>
                <strong>Адрес:</strong> ул. Щорса, 1А, Партизанск
              </p>
              <p style={styles.contactParam}>
                <strong>Телефон:</strong> +7 (991) 496-79-12
              </p>
              <p style={styles.contactParam}>
                <strong>Email:</strong>
              </p>
              <p style={styles.contactParam}>
                <strong>Режим работы:</strong> Пн-Пт: 08:30–12:00, 13:00–17:00
              </p>
              <br />
              <a
                href="https://t.me/PolygrafiyaPartizansk"
                target="_blank"
                rel="noreferrer"
                style={styles.tgBtn}
              >
                <img src={telegramIcon} alt="tg" />
              </a>
            </div>

            {/* Правая колонка с картой */}
            <div>
              <div style={styles.mapContainer}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A77462952917be66c309f21dce7ec5b804abc29313266d312b65934e378139369&source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen={true}
                  style={{ border: "none", display: "block" }}
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

      {/* Модальное окно просмотра полноразмерного фото */}
      {activeModalImg && (
        <div
          style={styles.modalOverlay}
          onClick={() => setActiveModalImg(null)}
        >
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.modalClose}
              onClick={() => setActiveModalImg(null)}
            >
              &times;
            </button>
            <img src={activeModalImg} alt="Просмотр" style={styles.modalImg} />
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
