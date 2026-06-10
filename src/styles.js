// Объект стилей для компонентов (React / React Native StyleSheet)
export const styles = {
  // ---------- ГЛОБАЛЬНЫЕ СТИЛИ СТРАНИЦЫ ----------
  // Основной контейнер страницы (body)
  body: {
    color: "#1a1a1a", // Цвет текста
    backgroundColor: "#ffffff", // Фон страницы
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    lineHeight: "1.6", // Межстрочный интервал
    paddingTop: "70px", // Отступ сверху, чтобы контент не заезжал под фиксированную шапку
    width: "100%",
  },

  // Общий контейнер-центровщик для секций
  container: {
    width: "85%",
    maxWidth: "1200px", // Максимальная ширина для больших экранов
    margin: "0 auto", // Центрирование по горизонтали
    padding: "60px 0", // Вертикальные отступы внутри секции
  },

  // ---------- ШАПКА (HEADER) ----------
  // Фиксированная верхняя панель
  header: {
    position: "fixed", // Прилипает к верху при прокрутке
    top: 0,
    left: 0,
    width: "100%",
    height: "90px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)", // Лёгкая тень
    zIndex: 1000, // Поверх остального контента
    display: "flex",
    alignItems: "center", // Вертикальное выравнивание содержимого
    boxSizing: "border-box",
  },

  // Обёртка для содержимого шапки (логотип + навигация)
  navContainer: {
    display: "flex",
    justifyContent: "space-between", // Лого слева, ссылки справа
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    height: "100%",
    boxSizing: "border-box",
  },

  // Ссылка-логотип
  logo: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },

  // Изображение логотипа
  logoImg: {
    height: "80px",
    width: "auto", // Сохраняет пропорции
    display: "block",
    objectFit: "contain", // Вписывается в контейнер без обрезки
  },

  // ---------- НАВИГАЦИЯ ----------
  // Блок со ссылками
  navLinks: {
    display: "flex",
    gap: "30px", // Расстояние между пунктами
  },

  // Отдельная ссылка в навигации
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
    fontSize: "1rem",
    transition: "color 0.2s ease", // Плавная смена цвета при наведении
  },

  // ---------- ГЕРОЙ-СЕКЦИЯ (ПЕРВЫЙ ЭКРАН) ----------
  // Контейнер hero-блока с фоновым изображением
  hero: {
    position: "relative",
    minHeight: "80vh", // Минимальная высота — 80% высоты экрана
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // Фон на весь блок
    padding: "120px 20px 80px 20px", // Учитываем высоту шапки
    boxSizing: "border-box",
    overflow: "hidden",
  },

  // Затемняющая подложка поверх фона (для читаемости текста)
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Полупрозрачный чёрный
    zIndex: 1,
  },

  // Контейнер для текста и кнопки поверх overlay
  heroContentContainer: {
    position: "relative",
    zIndex: 2, // Поверх overlay
    maxWidth: "800px",
    width: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  // Заголовок в hero
  heroTitle: {
    fontSize: "2.8rem",
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: "20px",
    lineHeight: "1.2",
    textShadow: "0 2px 4px rgba(0,0,0,0.2)", // Тень для читаемости
  },

  // Подзаголовок в hero
  heroSubtitle: {
    fontSize: "1.25rem",
    color: "#f0f0f0",
    marginBottom: "35px",
    maxWidth: "600px",
    lineHeight: "1.5",
    textShadow: "0 1px 3px rgba(0,0,0,0.2)",
  },

  // Кнопка призыва к действию (CTA)
  btn: {
    display: "inline-block",
    background: "linear-gradient(135deg, #0072ff 0%, #00c6ff 100%)", // Градиент
    color: "white",
    padding: "14px 35px",
    textDecoration: "none",
    borderRadius: "30px", // Полностью скруглённые края
    fontWeight: "bold",
    boxShadow: "0 4px 15px rgba(0, 114, 255, 0.3)",
  },

  // ---------- ЗАГОЛОВКИ СЕКЦИЙ ----------
  h2: {
    textAlign: "center",
    fontSize: "2.3rem",
    marginBottom: "40px",
  },

  // ---------- БЛОК «О НАС» (ABOUT) ----------
  // Сетка из двух колонок
  aboutGrid: {
    display: "flex",
    gap: "50px",
    alignItems: "center",
  },

  // Текстовая колонка
  aboutText: {
    flex: 1,
  },

  // Обычный абзац
  p: {
    marginBottom: "15px",
    fontSize: "1.1rem",
    color: "#333",
  },

  // Карточки ключевых особенностей (преимуществ)
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Адаптивная сетка
    gap: "20px",
    marginTop: "30px",
  },

  // Одна карточка преимущества
  featureCard: {
    background: "#f8f9fa",
    padding: "20px",
    borderRadius: "8px",
    borderTop: "4px solid #0072ff", // Цветная полоса сверху
  },

  // Заголовок внутри карточки
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
  // Фон секции
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

  // Карточка услуги
  serviceCard: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
    display: "flex",
    flexDirection: "column",
    minHeight: "220px", // Минимальная высота для единообразия
  },

  // Название услуги
  serviceTitle: {
    fontSize: "1.25rem",
    marginBottom: "10px",
    fontWeight: "700",
  },

  // Описание услуги
  serviceDesc: {
    color: "#555",
    fontSize: "0.95rem",
    flexGrow: 1, // Занимает доступное пространство, выравнивая цену снизу
  },

  // Цена услуги
  price: {
    fontWeight: "bold",
    color: "#0072ff",
    marginTop: "15px",
    fontSize: "1.15rem",
  },

  // ---------- СЕКЦИЯ «НАШИ РАБОТЫ» (СЛАЙДЕР) ----------
  // Обёртка секции
  worksSection: {
    padding: "60px 0",
    backgroundColor: "#ffffff",
    width: "100%",
    overflow: "hidden", // Скрывает лишнее, если слайды выходят за границы
  },

  // Обёртка слайдера (относительное позиционирование для стрелок)
  sliderWrapper: {
    position: "relative",
    width: "100%",
    margin: "0",
    padding: "0",
  },

  // Контейнер самого Swiper (если используется Swiper.js)
  swiperContainer: {
    padding: "20px 0",
    width: "100%",
    transitionTimingFunction: "linear",
    WebkitTransitionTimingFunction: "linear",
  },

  // Карточка одного слайда (превью работы)
  slideCard: {
    backgroundColor: "#f8f9fa",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    cursor: "pointer",
    transition: "transform 0.3s ease", // Анимация при наведении
  },

  // Изображение в слайде
  slideImg: {
    width: "100%",
    height: "350px",
    objectFit: "cover", // Заполняет кадр, обрезая лишнее
    display: "block",
  },

  // Кнопки навигации (стрелки влево/вправо)
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
  // Затемнённый фон
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    zIndex: 2000, // Поверх всего
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // Контейнер изображения в модалке
  modalContent: {
    position: "relative",
    maxWidth: "90%",
    maxHeight: "90%",
  },

  // Само увеличенное изображение
  modalImg: {
    maxWidth: "100%",
    maxHeight: "85vh",
    borderRadius: "8px",
    boxShadow: "0 4px 25px rgba(0,0,0,0.5)",
  },

  // Кнопка закрытия (крестик)
  modalClose: {
    position: "absolute",
    top: "-45px", // Вынесена чуть выше изображения
    right: "0",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "2.5rem",
    cursor: "pointer",
  },

  // ---------- СЕКЦИЯ КОНТАКТОВ ----------
  contactsSection: {
    padding: "60px 0",
    backgroundColor: "#f8f9fa",
    borderTop: "1px solid #eee",
    width: "100%",
  },

  // Сетка из двух колонок: информация + карта
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "50px",
    alignItems: "center",
  },

  // Блок с текстовыми контактами
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  // Строка с одним контактным параметром (телефон, почта и т.п.)
  contactParam: {
    marginBottom: "15px",
    fontSize: "1.1rem",
    color: "#333",
  },

  // Кнопка Telegram
  tgBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    backgroundColor: "#229ED9", // Фирменный цвет Telegram
    color: "white",
    padding: "14px 28px",
    textDecoration: "none",
    borderRadius: "30px",
    fontWeight: "bold",
    alignSelf: "flex-start", // Не растягивается на всю ширину
    boxShadow: "0 4px 12px rgba(34, 158, 217, 0.3)",
  },

  // Контейнер для карты (iframe или компонент)
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
  footer: {
    backgroundColor: "#111111",
    color: "#888",
    textAlign: "center",
    padding: "25px 0",
    fontSize: "0.9rem",
    width: "100%",
  },

  // ---------- ВСПОМОГАТЕЛЬНЫЕ СТИЛИ (ЗАГЛУШКИ ИЗОБРАЖЕНИЙ) ----------
  // Обёртка для иконки/логотипа в карточке (например, в услугах)
  cardImgWrapper: {
    width: "100%",
    height: "140px",
    backgroundColor: "#f9f9f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    marginBottom: "15px",
    padding: "10px",
    boxSizing: "border-box",
  },

  // Изображение-заглушка внутри обёртки (например, иконка сервиса)
  cardImgPlaceholder: {
    height: "100%",
    width: "auto",
    objectFit: "contain", // Вписывается без искажений
    opacity: 0.6, // Полупрозрачное, как водяной знак
  },
};
