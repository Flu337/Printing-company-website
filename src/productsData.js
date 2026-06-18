// src/productsData.js

// ==========================================
// 1. ИМПОРТ ВСЕХ КАРТИНОК ИЗ НОВЫХ ПАПОК
// ==========================================

// --- Сувениры из фанеры (Plywood souvenirs) ---
import treeMain from "./assets/Plywood souvenirs/main.jpg";
import tree1 from "./assets/Plywood souvenirs/Tree (1).jpg";
import tree2 from "./assets/Plywood souvenirs/Tree (2).jpg";
import tree3 from "./assets/Plywood souvenirs/Tree (3).jpg";
import tree4 from "./assets/Plywood souvenirs/Tree (4).jpg";
import tree5 from "./assets/Plywood souvenirs/Tree (5).jpg";
import tree6 from "./assets/Plywood souvenirs/Tree (6).jpg";
import tree7 from "./assets/Plywood souvenirs/Tree (7).jpg";
import tree8 from "./assets/Plywood souvenirs/Tree (8).jpg";
import tree9 from "./assets/Plywood souvenirs/Tree (9).jpg";
import tree10 from "./assets/Plywood souvenirs/Tree (10).jpg";
import tree11 from "./assets/Plywood souvenirs/Tree (11).jpg";
import tree12 from "./assets/Plywood souvenirs/Tree (12).jpg";
import tree13 from "./assets/Plywood souvenirs/Tree (13).jpg";
import tree14 from "./assets/Plywood souvenirs/Tree (14).jpg";
import tree15 from "./assets/Plywood souvenirs/Tree (15).jpg";
import tree16 from "./assets/Plywood souvenirs/Tree (16).jpg";

// --- Гравировка на металле (Metal engraving) ---
import metalMain from "./assets/Metal engraving/main.jpg";
import metal1 from "./assets/Metal engraving/metal (1).jpg";
import metal2 from "./assets/Metal engraving/metal (2).jpg";
import metal3 from "./assets/Metal engraving/metal (3).jpg";
import metal4 from "./assets/Metal engraving/metal (4).jpg";
import metal5 from "./assets/Metal engraving/metal (5).jpg";
import metal6 from "./assets/Metal engraving/metal (6).jpg";
import metal7 from "./assets/Metal engraving/metal (7).jpg";
import metal8 from "./assets/Metal engraving/metal (8).jpg";
import metal9 from "./assets/Metal engraving/metal (9).jpg";
import metal10 from "./assets/Metal engraving/metal (10).jpg";
import metal11 from "./assets/Metal engraving/metal (11).jpg";
import metal12 from "./assets/Metal engraving/metal (12).jpg";
import metal13 from "./assets/Metal engraving/metal (13).jpg";
import metal14 from "./assets/Metal engraving/metal (14).jpg";

// --- Блокноты (A variety of notebooks) ---
import notepad1 from "./assets/A variety of notebooks/notepad (1).jpg";
import notepad2 from "./assets/A variety of notebooks/notepad (2).jpg";
import notepad3 from "./assets/A variety of notebooks/notepad (3).jpg";
import notepad4 from "./assets/A variety of notebooks/notepad (4).jpg";
import notepad5 from "./assets/A variety of notebooks/notepad (5).jpg";
import notepad6 from "./assets/A variety of notebooks/notepad (6).jpg";
import notepad7 from "./assets/A variety of notebooks/notepad (7).jpg";
import notepad8 from "./assets/A variety of notebooks/notepad (8).jpg";
import notepad9 from "./assets/A variety of notebooks/notepad (9).jpg";
import notepad10 from "./assets/A variety of notebooks/notepad (10).jpg";
import notepad11 from "./assets/A variety of notebooks/notepad (11).jpg";
import notepad12 from "./assets/A variety of notebooks/notepad (12).jpg";
import notepad13 from "./assets/A variety of notebooks/notepad (13).jpg";

// --- Печать книг (Book printing) ---
import book1 from "./assets/Book printing/book (1).jpg";
import book2 from "./assets/Book printing/book (2).jpg";
import book3 from "./assets/Book printing/book (3).jpg";

// --- Визитки и полиграфия (Business cards and printing) ---
import printing1 from "./assets/Business cards and printing/printing (1).jpg";
import printing2 from "./assets/Business cards and printing/printing (2).jpg";
import printing3 from "./assets/Business cards and printing/printing (3).jpg";
import printing4 from "./assets/Business cards and printing/printing (4).jpg";
import printing5 from "./assets/Business cards and printing/printing (5).jpg";

// --- Печать на футболках и кружках (Printing on white T-shirts and mugs) ---
import print1 from "./assets/Printing on white T-shirts and mugs/print (1).jpg";
import print2 from "./assets/Printing on white T-shirts and mugs/print (2).jpg";
import print3 from "./assets/Printing on white T-shirts and mugs/print (3).jpg";
import print4 from "./assets/Printing on white T-shirts and mugs/print (4).jpg";
import print5 from "./assets/Printing on white T-shirts and mugs/print (5).jpg";
import print6 from "./assets/Printing on white T-shirts and mugs/print (6).jpg";
import print7 from "./assets/Printing on white T-shirts and mugs/print (7).jpg";
import print8 from "./assets/Printing on white T-shirts and mugs/print (8).jpg";

// --- Брелоки, значки, магниты (Production of keychains, badges, and magnets) ---
import charm1 from "./assets/Production of keychains, badges, and magnets/charm (1).jpg";
import charm2 from "./assets/Production of keychains, badges, and magnets/charm (2).jpg";
import charm3 from "./assets/Production of keychains, badges, and magnets/charm (3).jpg";
import charm4 from "./assets/Production of keychains, badges, and magnets/charm (4).jpg";
import charm5 from "./assets/Production of keychains, badges, and magnets/charm (5).jpg";
import charm6 from "./assets/Production of keychains, badges, and magnets/charm (6).jpg";
import charm7 from "./assets/Production of keychains, badges, and magnets/charm (7).jpg";

// --- Съедобная печать А4 (A4 Edible Print) ---
import a4print1 from "./assets/A4 Edible Print/A4Printing (1).jpg";
import a4print2 from "./assets/A4 Edible Print/A4Printing (2).jpg";
import a4print3 from "./assets/A4 Edible Print/A4Printing (3).jpg";
import a4print4 from "./assets/A4 Edible Print/A4Printing (4).jpg";
import a4print5 from "./assets/A4 Edible Print/A4Printing (5).jpg";

// ==========================================
// 2. МАССИВ ДАННЫХ
// ==========================================

export const productsData = [
  {
    id: 1,
    title: "Сувениры из фанеры",
    desc: "Яркие картинки, фотографии, элементы декора и вывески на деревянной основе с сохранением красивой текстуры дерева.",
    price: "от 250 руб / шт",
    images: [
      treeMain,
      tree1,
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
    ],
  },
  {
    id: 2,
    title: "Гравировка на металле",
    desc: "Долговечные таблички, шильды, наградные дипломы, сертификаты и офисные вывески на металлических пластинах.",
    price: "от 500 руб / шт",
    images: [
      metalMain,
      metal1,
      metal2,
      metal3,
      metal4,
      metal5,
      metal6,
      metal7,
      metal8,
      metal9,
      metal10,
      metal11,
      metal12,
      metal13,
      metal14,
    ],
  },
  {
    id: 3,
    title: "Разнообразные блокноты",
    desc: "Изготовление уникальных фирменных блокнотов: на металлической спирали, с мягкой или твердой обложкой и разной линовкой.",
    price: "от 50 руб / шт",
    images: [
      notepad8,
      notepad2,
      notepad3,
      notepad4,
      notepad5,
      notepad6,
      notepad7,
      notepad1,
      notepad9,
      notepad10,
      notepad11,
      notepad12,
      notepad13,
    ],
  },
  {
    id: 4,
    title: "Печать книг",
    desc: "Качественная печать и переплет книг, методичек и брошюр в различных форматах.",
    price: "от 180 руб / шт",
    images: [book1, book2, book3],
  },
  {
    id: 5,
    title: "Визитки и полиграфия",
    desc: "Классическая экспресс-печать рекламных материалов, листовок, флаеров, буклетов, календарей и визитных карточек любого формата.",
    price: "от 5 руб / шт",
    images: [printing1, printing2, printing3, printing4, printing5],
  },
  {
    id: 6,
    title: "Печать на белых футболках и кружках",
    desc: "Яркая сувенирная продукция с вашими принтами, логотипами или фотографиями. Отличный подарок для близких и коллег.",
    price: "от 430 руб",
    images: [print5, print2, print3, print1, print4, print6, print7, print8],
  },
  {
    id: 7,
    title: "Изготовление брелоков, значков и магнитов",
    desc: "Брендированные сувениры малых форм: закатные значки, магниты на холодильник и акриловые брелоки для промо-акций.",
    price: "от 50 руб",
    images: [charm4, charm2, charm1, charm3, charm5, charm6, charm7],
  },
  {
    id: 8,
    title: "Съедобная печать А4",
    desc: "Качественная кондитерская печать ярких картинок и фотографий на сахарной или вафельной бумаге для декора тортов и капкейков.",
    price: "от 300 руб",
    images: [a4print1, a4print2, a4print3, a4print4, a4print5],
  },
];
