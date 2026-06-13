// src/productsData.js

// === 1. ИМПОРТ ВСЕХ КАРТИНОК ===

// Заглушка (если понадобится)
import logoImg from "./assets/logo.png";

// Печать на дереве (Tree)
import treeMain from "./assets/Tree.jpg";
import tree2 from "./assets/Tree-2.jpg";
import tree3 from "./assets/Tree-3.jpg";
import tree4 from "./assets/Tree-4.jpg";
import tree5 from "./assets/Tree-5.jpg";
import tree6 from "./assets/Tree-6.jpg";
import tree7 from "./assets/Tree-7.jpg";
import tree8 from "./assets/Tree-8.jpg";
import tree9 from "./assets/Tree-9.jpg";
import tree10 from "./assets/Tree-10.jpg";
import tree11 from "./assets/Tree-11.jpg";
import tree12 from "./assets/Tree-12.jpg";
import tree13 from "./assets/Tree-13.jpg";
import tree14 from "./assets/Tree-14.jpg";
import tree15 from "./assets/Tree-15.jpg";
import tree16 from "./assets/Tree-16.jpg";
import treeOrMetal from "./assets/Tree_or_metal.jpg";

// Печать на металле
import metalMain from "./assets/metal.jpg";
import charmMetal from "./assets/CharmMetal.jpg";

// Блокноты (Notepad)
import notepadMain from "./assets/Notepad.jpg";
import notepad2 from "./assets/Notepad-2.jpg";
import notepad3 from "./assets/Notepad-3.jpg";
import notepad4 from "./assets/Notepad-4.jpg";
import notepad5 from "./assets/Notepad-5.jpg";
import notepad6 from "./assets/Notepad-6.jpg";
import notepad7 from "./assets/Notepad-7.jpg";

// Визитки и полиграфия
import businessCard from "./assets/BusinessCard.jpg";
import calendarMain from "./assets/Calendar.jpg";
import calendar2 from "./assets/Calendar-2.jpg";

// === 2. МАССИВ ДАННЫХ ===

export const productsData = [
  {
    id: 1,
    title: "Печать на дереве и фанере",
    desc: "Яркие картинки, фотографии, элементы декора и вывески на деревянной основе с сохранением красивой текстуры дерева.",
    price: "от 600 руб / шт",
    // Сюда закидываем всю пачку деревянных изделий
    images: [
      treeMain,
      tree2,
      tree3,
      tree4,
      tree5,
      tree6,
      tree7,
      tree8,
      tree9,
      tree10,
      tree11,
      tree12,
      tree13,
      tree14,
      tree15,
      tree16,
      treeOrMetal,
    ],
  },
  {
    id: 2,
    title: "Печать на металле",
    desc: "Долговечные таблички, шильды, наградные дипломы, сертификаты и офисные вывески на металлических пластинах.",
    price: "от 500 руб / шт",
    images: [metalMain, charmMetal],
  },
  {
    id: 3,
    title: "Разнообразные блокноты",
    desc: "Изготовление уникальных фирменных блокнотов: на металлической спирали, с мягкой или твердой обложкой и разной линовкой.",
    price: "от 180 руб / шт",
    images: [
      notepadMain,
      notepad2,
      notepad3,
      notepad4,
      notepad5,
      notepad6,
      notepad7,
    ],
  },
  {
    id: 4,
    title: "Визитки и полиграфия",
    desc: "Классическая экспресс-печать рекламных материалов, листовок, флаеров, буклетов, календарей и визитных карточек любого формата.",
    price: "от 2 руб / шт",
    images: [businessCard, calendarMain, calendar2],
  },
  {
    id: 5,
    title: "Печать на белых футболках и кружках",
    desc: "Яркая сувенирная продукция с вашими принтами, логотипами или фотографиями. Отличный подарок для близких и коллег.",
    price: "от 430 руб",
    images: [logoImg], // Как появятся фотки, просто заменишь logoImg на импорты, как выше
  },
  {
    id: 6,
    title: "Изготовление брелоков, значков и магнитов",
    desc: "Брендированные сувениры малых форм: закатные значки, магниты на холодильник и акриловые брелоки для промо-акций.",
    price: "от 50 руб",
    images: [logoImg],
  },
  {
    id: 7,
    title: "Съедобная печать А4",
    desc: "Качественная кондитерская печать ярких картинок и фотографий на сахарной или вафельной бумаге для декора тортов и капкейков.",
    price: "от 300 руб",
    images: [logoImg],
  },
];
