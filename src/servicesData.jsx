// src/servicesData.js

// === 1. ИМПОРТ ВСЕХ КАРТИНОК ИЗ ПАПКИ ASSETS (кроме hero.png, icons8-telegram.svg, logo.png) ===
import treeOrMetal from "./assets/Tree_or_metal.jpg";
import calendar from "./assets/Calendar.jpg";
import notepad from "./assets/Notepad.jpg";
import notepad2 from "./assets/Notepad-2.jpg";
import tree2 from "./assets/Tree-2.jpg";
import businessCard from "./assets/BusinessCard.jpg";

// Дополнительные изображения (все остальные из списка)
import calendar2 from "./assets/Calendar-2.jpg";
import charmMetal from "./assets/CharmMetal.jpg";
import metal from "./assets/metal.jpg";
import notepad3 from "./assets/Notepad-3.jpg";
import notepad4 from "./assets/Notepad-4.jpg";
import notepad5 from "./assets/Notepad-5.jpg";
import notepad6 from "./assets/Notepad-6.jpg";
import notepad7 from "./assets/Notepad-7.jpg";
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
import tree from "./assets/Tree.jpg";

// === 2. МАССИВ СО ВСЕМИ РАБОТАМИ (без заглушек) ===
export const servicesData = [
  // Уже существующие (1–6)
  { id: 1, title: "Печать на дереве/металле", image: treeOrMetal },
  { id: 2, title: "Календарь", image: calendar },
  { id: 3, title: "Блокнот #1", image: notepad },
  { id: 4, title: "Блокнот #2", image: notepad2 },
  { id: 5, title: "Работа по дереву #2", image: tree2 },
  { id: 6, title: "Визитка", image: businessCard },

  // Добавленные новые работы (7–29)
  { id: 7, title: "Календарь #2", image: calendar2 },
  { id: 8, title: "Charm Metal", image: charmMetal },
  { id: 9, title: "Металл", image: metal },
  { id: 10, title: "Блокнот #3", image: notepad3 },
  { id: 11, title: "Блокнот #4", image: notepad4 },
  { id: 12, title: "Блокнот #5", image: notepad5 },
  { id: 13, title: "Блокнот #6", image: notepad6 },
  { id: 14, title: "Блокнот #7", image: notepad7 },
  { id: 15, title: "Дерево #3", image: tree3 },
  { id: 16, title: "Дерево #4", image: tree4 },
  { id: 17, title: "Дерево #5", image: tree5 },
  { id: 18, title: "Дерево #6", image: tree6 },
  { id: 19, title: "Дерево #7", image: tree7 },
  { id: 20, title: "Дерево #8", image: tree8 },
  { id: 21, title: "Дерево #9", image: tree9 },
  { id: 22, title: "Дерево #10", image: tree10 },
  { id: 23, title: "Дерево #11", image: tree11 },
  { id: 24, title: "Дерево #12", image: tree12 },
  { id: 25, title: "Дерево #13", image: tree13 },
  { id: 26, title: "Дерево #14", image: tree14 },
  { id: 27, title: "Дерево #15", image: tree15 },
  { id: 28, title: "Дерево #16", image: tree16 },
  { id: 29, title: "Дерево", image: tree },
];
