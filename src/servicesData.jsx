// src/servicesData.js

// =========================================================================
// 1. ИМПОРТ РАСШИРЕННОГО СПИСКА ФОТОГРАФИЙ (36 ШТУК)
// =========================================================================

// --- Сувениры из фанеры (5 шт) ---
import plywood1 from "./assets/Plywood souvenirs/main.jpg";
import plywood2 from "./assets/Plywood souvenirs/Tree (2).jpg";
import plywood3 from "./assets/Plywood souvenirs/Tree (5).jpg";
import plywood4 from "./assets/Plywood souvenirs/Tree (8).jpg";
import plywood5 from "./assets/Plywood souvenirs/Tree (12).jpg";

// --- Гравировка на металле (5 шт) ---
import metal1 from "./assets/Metal engraving/metal (14).jpg";
import metal2 from "./assets/Metal engraving/metal (3).jpg";
import metal3 from "./assets/Metal engraving/metal (6).jpg";
import metal4 from "./assets/Metal engraving/metal (9).jpg";
import metal5 from "./assets/Metal engraving/metal (13).jpg";

// --- Разнообразные блокноты (5 шт) ---
import notebook1 from "./assets/A variety of notebooks/notepad (1).jpg";
import notebook2 from "./assets/A variety of notebooks/notepad (4).jpg";
import notebook3 from "./assets/A variety of notebooks/notepad (7).jpg";
import notebook4 from "./assets/A variety of notebooks/notepad (10).jpg";
import notebook5 from "./assets/A variety of notebooks/notepad (13).jpg";
import notebook6 from "./assets/A variety of notebooks/notepad (8).jpg";

// --- Печать книг (3 шт - все, что есть) ---
import book1 from "./assets/Book printing/book (1).jpg";
import book2 from "./assets/Book printing/book (2).jpg";
import book3 from "./assets/Book printing/book (3).jpg";

// --- Визитки и полиграфия (4 шт) ---
import print1 from "./assets/Business cards and printing/printing (1).jpg";
import print2 from "./assets/Business cards and printing/printing (2).jpg";
import print3 from "./assets/Business cards and printing/printing (4).jpg";
import print4 from "./assets/Business cards and printing/printing (5).jpg";
import print5 from "./assets/Business cards and printing/printing (3).jpg";

// --- Печать на белых футболках и кружках (6 шт) ---
import shirt1 from "./assets/Printing on white T-shirts and mugs/print (1).jpg";
import shirt2 from "./assets/Printing on white T-shirts and mugs/print (3).jpg";
import shirt3 from "./assets/Printing on white T-shirts and mugs/print (5).jpg";
import shirt4 from "./assets/Printing on white T-shirts and mugs/print (6).jpg";
import shirt5 from "./assets/Printing on white T-shirts and mugs/print (8).jpg";
import shirt6 from "./assets/Printing on white T-shirts and mugs/print (7).jpg";

// --- Брелоки, значки, магниты (5 шт) ---
import charm1 from "./assets/Production of keychains, badges, and magnets/charm (1).jpg";
import charm2 from "./assets/Production of keychains, badges, and magnets/charm (3).jpg";
import charm3 from "./assets/Production of keychains, badges, and magnets/charm (4).jpg";
import charm4 from "./assets/Production of keychains, badges, and magnets/charm (6).jpg";
import charm5 from "./assets/Production of keychains, badges, and magnets/charm (7).jpg";
import charm6 from "./assets/Production of keychains, badges, and magnets/charm (5).jpg";
// =========================================================================
// 2. МАССИВ БОЛЬШОЙ ГАЛЕРЕИ РАБОТ (Перемешаны для динамики)
// =========================================================================
export const servicesData = [
  // Ряд 1
  { id: 1, title: "Деревянная вывеска", image: plywood1 },
  { id: 2, title: "Офисная табличка", image: metal1 },
  { id: 3, title: "Фирменный блокнот", image: notebook1 },
  { id: 4, title: "Печать книг в переплете", image: book1 },
  { id: 8, title: "Промо-материалы", image: charm6 },

  // Ряд 2
  { id: 5, title: "Рекламные визитки", image: print1 },
  { id: 6, title: "Принт на футболке", image: shirt1 },
  { id: 7, title: "Брендированные брелоки", image: charm1 },
  { id: 16, title: "Подарочная гравировка", image: print5 },
  { id: 24, title: "Сувенирные магниты", image: notebook6 },
  { id: 27, title: "Уникальный блокнот", image: charm4 },

  // Ряд 3
  { id: 9, title: "Сувенир из фанеры", image: plywood2 },
  { id: 10, title: "Гравировка на металле", image: metal2 },
  { id: 11, title: "Ежедневник на спирали", image: notebook2 },
  { id: 12, title: "Печать методических пособий", image: book2 },

  // Ряд 4
  { id: 13, title: "Фирменные бланки", image: print2 },
  { id: 14, title: "Кружка с фотопечатью", image: shirt2 },
  { id: 15, title: "Закатные значки", image: charm2 },

  // Ряд 5
  { id: 17, title: "Изделие из дерева", image: plywood3 },
  { id: 18, title: "Металлический шильд", image: metal3 },
  { id: 19, title: "Блокнот в твердой обложке", image: notebook3 },
  { id: 20, title: "Мягкий переплет брошюр", image: book3 },

  // Ряд 6
  { id: 21, title: "Печатная полиграфия", image: print3 },
  { id: 22, title: "Корпоративный мерч", image: shirt3 },
  { id: 23, title: "Магниты с логотипом", image: charm3 },

  // Ряд 7
  { id: 25, title: "Декор из фанеры", image: plywood4 },
  { id: 26, title: "Наградной диплом", image: metal4 },
  { id: 27, title: "Уникальный блокнот", image: notebook4 },
  { id: 28, title: "Информационный буклет", image: print4 },

  // Ряд 8
  { id: 29, title: "Футболка с логотипом", image: shirt4 },
  { id: 30, title: "Акриловый брелок", image: charm4 },

  { id: 32, title: "Подарочная гравировка", image: metal5 },

  // Ряд 9
  { id: 33, title: "Лазерная резка дерева", image: plywood5 },
  { id: 34, title: "Дизайнерский блокнот", image: notebook5 },
  { id: 35, title: "Печать на кружках", image: shirt5 },
  { id: 36, title: "Сувенирные магниты", image: charm5 },
  { id: 37, title: "Промо-брелоки", image: shirt6 },
];
