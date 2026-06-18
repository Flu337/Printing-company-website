// Объект стилей для компонентов (React / React Native StyleSheet)
export const styles = {
  // ---------- ГЛОБАЛЬНЫЕ СТИЛИ СТРАНИЦЫ ----------
  // Основной контейнер страницы (div-обёртка всего приложения)
  body: {
    color: "#1a1a1a",
    backgroundColor: "#ffffff",
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    lineHeight: "1.6",
    paddingTop: "70px",
    width: "100%",
  },

  // Центрирующий контейнер для секций (О нас, Услуги, Контакты)
  container: {
    width: "85%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 0",
  },

  // ---------- ШАПКА (HEADER) ----------
  // Фиксированная шапка сайта (элемент <header>)
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "90px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  },

  // Контейнер для логотипа и навигации внутри шапки
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    height: "100%",
    boxSizing: "border-box",
  },

  // Ссылка-обёртка для логотипа
  logo: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },

  // Изображение логотипа
  logoImg: {
    height: "80px",
    width: "auto",
    display: "block",
    objectFit: "contain",
  },

  // ---------- НАВИГАЦИЯ ----------
  // Блок с навигационными ссылками (элемент <nav>)
  navLinks: {
    display: "flex",
    gap: "30px",
  },

  // Отдельная ссылка в навигации (элемент <a>)
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
    fontSize: "1rem",
    transition: "color 0.2s ease",
  },

  // ---------- ГЕРОЙ-СЕКЦИЯ (ПЕРВЫЙ ЭКРАН) ----------
  // Контейнер главного баннера (секция #hero)
  hero: {
    position: "relative",
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "120px 20px 80px 20px",
    boxSizing: "border-box",
    overflow: "hidden",
  },

  // Затемняющий слой поверх фонового изображения
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",

    zIndex: 1,
  },

  // Контейнер для текста и кнопки внутри героя
  heroContentContainer: {
    position: "relative",
    zIndex: 2,
    maxWidth: "800px",
    width: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  // Главный заголовок в герое
  heroTitle: {
    fontSize: "2.8rem",
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: "20px",
    lineHeight: "1.2",
    textShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },

  // Подзаголовок в герое
  heroSubtitle: {
    fontSize: "1.25rem",
    color: "#f0f0f0",
    marginBottom: "35px",
    maxWidth: "600px",
    lineHeight: "1.5",
    textShadow: "0 1px 3px rgba(0,0,0,0.2)",
  },

  // Кнопка призыва к действию в герое
  btn: {
    display: "inline-block",
    background: "linear-gradient(135deg, #0072ff 0%, #00c6ff 100%)",
    color: "white",
    padding: "14px 35px",
    textDecoration: "none",
    borderRadius: "30px",
    fontWeight: "bold",
    boxShadow: "0 4px 15px rgba(0, 114, 255, 0.3)",
  },

  // ---------- ЗАГОЛОВКИ СЕКЦИЙ ----------
  // Заголовок h2 для всех секций (О нас, Услуги, Работы, Контакты)
  h2: {
    textAlign: "center",
    fontSize: "2.3rem",
    marginBottom: "40px",
  },

  // ---------- БЛОК «О НАС» (ABOUT) ----------
  // Сетка из двух колонок в секции "О нас"
  aboutGrid: {
    display: "flex",
    gap: "50px",
    alignItems: "center",
  },

  // Текстовая колонка в секции "О нас"
  aboutText: {
    flex: 1,
  },

  // Обычный абзац в секции "О нас"
  p: {
    marginBottom: "15px",
    fontSize: "1.1rem",
    color: "#333",
  },

  // Контейнер с карточками преимуществ (Скорость, Качество, Тираж)
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },

  // Карточка одного преимущества
  featureCard: {
    background: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px",
    borderTop: "4px solid #0072ff",
  },

  // Заголовок внутри карточки преимущества
  featureTitle: {
    marginBottom: "8px",
    fontSize: "1.1rem",
  },

  // Описание преимущества
  featureDesc: {
    color: "#556666",
    fontSize: "0.95rem",
  },

  // ---------- СЕКЦИЯ УСЛУГ ----------
  // Фон всей секции "Услуги"
  servicesSection: {
    backgroundColor: "#f8f9fa",
    width: "100%",
  },

  // Сетка карточек услуг
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },

  // Карточка отдельной услуги
  serviceCard: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
    display: "flex",
    flexDirection: "column",
    minHeight: "220px",
  },

  // Название услуги внутри карточки
  serviceTitle: {
    fontSize: "1.25rem",
    marginBottom: "10px",
    fontWeight: "700",
  },

  // Описание услуги
  serviceDesc: {
    color: "#555",
    fontSize: "0.95rem",
    flexGrow: 1,
  },

  // Цена услуги
  price: {
    fontWeight: "bold",
    color: "#0072ff",
    marginTop: "15px",
    fontSize: "1.15rem",
  },

  // Обёртка для изображения в карточке услуги
  cardImgWrapper: {
    width: "100%",
    height: "140px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    marginBottom: "15px",
    padding: "10px",
    boxSizing: "border-box",
  },

  // Изображение-заглушка в карточке услуги
  cardImgPlaceholder: {
    height: "170px",
    width: "auto",
    objectFit: "contain",

    borderRadius: "8px",
  },

  // Дополнительные стили для анимации появления карточки
  serviceCardAnimated: {
    animation: "fadeIn 0.5s ease-out forwards",
  },

  // Кнопка "Показать ещё" / "Скрыть" в секции услуг
  loadMoreBtn: {
    backgroundColor: "#0085ff",
    color: "#ffffff",
    border: "none",
    padding: "12px 30px",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "0 4px 15px rgba(0, 133, 255, 0.3)",
  },

  // ---------- СЕКЦИЯ «НАШИ РАБОТЫ» (СЛАЙДЕР) ----------
  // Обёртка секции "Примеры работ"
  worksSection: {
    padding: "60px 0",
    backgroundColor: "#ffffff",
    width: "100%",
    overflow: "hidden",
  },

  // Обёртка слайдера с относительным позиционированием для стрелок
  sliderWrapper: {
    position: "relative",
    width: "100%",
    margin: "0",
    padding: "0",
  },

  // Контейнер Swiper (если используется Swiper.js)
  swiperContainer: {
    padding: "20px 0",
    width: "100%",
    transitionTimingFunction: "linear",
    WebkitTransitionTimingFunction: "linear",
  },

  // Карточка одного слайда в галерее работ
  slideCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },

  // Изображение внутри слайда
  slideImg: {
    width: "100%",
    height: "350px",
    objectFit: "cover",
    display: "block",
  },

  // Кнопки навигации слайдера (стрелки влево/вправо)
  navBtn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "1px solid #eee",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    cursor: "pointer",
    zIndex: 10,
    fontSize: "1.4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.2s, transform 0.2s",
  },

  // ---------- МОДАЛЬНОЕ ОКНО (ПРОСМОТР ИЗОБРАЖЕНИЯ) ----------
  // Затемнённый фон модального окна
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    zIndex: 2000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // Контейнер для увеличенного изображения
  modalContent: {
    position: "relative",
    maxWidth: "90%",
    maxHeight: "90%",
  },

  // Увеличенное изображение в модальном окне
  modalImg: {
    maxWidth: "100%",
    maxHeight: "85vh",
    borderRadius: "8px",
    boxShadow: "0 4px 25px rgba(0,0,0,0.5)",
  },

  // Кнопка закрытия модального окна (крестик)
  modalClose: {
    position: "absolute",
    top: "-45px",
    right: "0",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "2.5rem",
    cursor: "pointer",
  },

  // ---------- СЕКЦИЯ КОНТАКТОВ ----------
  // Фон секции "Контакты"
  contactsSection: {
    padding: "60px 0",
    backgroundColor: "#f8f9fa",
    borderTop: "1px solid #eee",
    width: "100%",
  },

  // Сетка из двух колонок (информация + карта)
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "50px",
    alignItems: "center",
  },

  // Блок с текстовыми контактами (адрес, телефон, email)
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  // Строка с одним контактным параметром
  contactParam: {
    marginBottom: "15px",
    fontSize: "1.1rem",
    color: "#333",
  },

  // Кнопка для связи в Telegram
  tgBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    backgroundColor: "#229ED9",
    color: "white",
    padding: "14px 28px",
    textDecoration: "none",
    borderRadius: "30px",
    fontWeight: "bold",
    alignSelf: "flex-start",
    boxShadow: "0 4px 12px rgba(34, 158, 217, 0.3)",
  },

  // Контейнер для карты (iframe Яндекс.Карты)
  mapContainer: {
    width: "100%",
    height: "400px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    border: "1px solid #e1e8ed",
    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
  },

  // ---------- ПОДВАЛ (FOOTER) ----------
  // Подвал сайта (элемент <footer>)
  footer: {
    backgroundColor: "#111111",
    color: "#888",
    textAlign: "center",
    padding: "25px 0",
    fontSize: "0.9rem",
    width: "100%",
  },
};
