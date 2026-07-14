import * as Icons from "@assets/icons";
import * as Images from "@assets/images";

export const profile = {
  name: "Даниил Усатенко",
  role: "Web & Mobile Developer",
  description:
    "Создаю современные приложения с фокусом на производительность, масштабируемость и чистый код. Работаю с React, TypeScript и React Native, уделяю внимание UX/UI и оптимизации. Постоянно учусь и внедряю новые технологии. Ищу первый коммерческий опыт для профессионального роста.",
  avatar: Images.avatar,
};

export const about = {
  title: "Обо мне",
  text: [
    "Я пишу код, который не стыдно показать. Технологии — это инструмент. Я выбираю тот, который лучше решает конкретную задачу.",
    "За 3 года я прошёл путь от вёрстки до мобильной разработки. Работал с играми, расширениями для VSCode, социальными платформами — и каждый проект научил меня чему-то новому. Я знаю, как довести продукт до ума, чтобы им было удобно пользоваться.",
    "Сейчас учусь на направлении 'ИСП', но всё нужное я уже выучил сам. Ищу команду, где смогу  расти и создавать продукты, которыми будут пользоваться люди.",
  ],
  terminal: {
    title: "neofetch — developer — 80x24",
    stats: [
      { key: "Name:", value: "Daniil Usatenko" },
      { key: "Role:", value: profile.role },
      { key: "Exp:", value: "3 years" },
      { key: "Stack:", value: "React, TypeScript, React Native" },
      { key: "Frontend:", value: "HTML, CSS, Sass, Figma" },
      { key: "Backend:", value: "Node.js, Docker, Nginx, Git" },
      { key: "Education:", value: "IS & Programming" },
      { key: "Status:", value: "Looking for team" },
    ],
    ascii: `
                     -
                    .o+
                    ooo/
                   +oooo:
                  +oooooo:
                 -+oooooo+:
                /:-:++oooo+:
               /++++/+++++++:
              /++++++++++++++:
             /+++ooooooooooooo/
           ./ooosssso++osssssso+
          .oossssso-    /ossssss+
         -osssssso.      :ssssssso.
        :osssssss/        osssso+++.
       /ossssssss/        +ssssooo/-
      /ossssso+/:-        -:/+osssso+-
     +sso+:-                   .-/+oso:
    ++:.                            -/+/
    .                                  /
  `,
    colors: [],
  },
};

export const skills = [
  {
    category: "Frontend",
    items: [
      "Адаптивная и кросс-браузерная вёрстка с учётом всех типов устройств",
      "Создание анимаций и плавных интерфейсов без потери производительности",
      "Взаимодействие с API и обработка состояний приложения",
      "Миграция проектов с JS на TypeScript",
    ],
  },
  {
    category: "Backend",
    items: ["В процессе изучения", "Стек: TS + NestJS"],
  },
  {
    category: "Mobile",
    items: [
      "Разработка кросс-платформенных приложений на React Native",
      "Настройка навигации и управление сложными экранами",
      "Интеграция с нативными модулями и push-уведомлениями",
      "Хорошая оптимизация, как на Andoid, так и на IOS",
    ],
  },
  {
    category: "Инструменты",
    items: [
      "Контейнеризация приложений с Docker",
      "Настройка веб-серверов Nginx для production окружения",
      "Автоматизация сборки и деплоя (Vite, Webpack, CI/CD)",
      "Работа с Git в команде: ревью, rebase, разрешение конфликтов",
    ],
  },
  {
    category: "Дизайн",
    items: [
      "Создание прототипов и макетов в Figma",
      "Проектирование удобных и интуитивных интерфейсов",
      "Адаптация дизайн-систем под технические ограничения",
      "Соблюдение UI/UX концепций во всех проектах",
    ],
  },
  {
    category: "Софт скилы",
    items: [
      "Самоорганизация и управление временем",
      "Работа в команде и код-ревью",
      "Эффективная коммуникация и презентация решений",
      "Постоянное самообучение и адаптация к новым технологиям",
    ],
  },
];

export const projects = [
  {
    title: "Auralifting",
    description:
      "Мултиап для занятия спортом, отслеживания результатом, встроенной соцсетью для межпользовательского взаимодействия и встроенная монетизация",
    stack: ["React Native", "TypeScript", "Golang", "PostgreSQL", "Docker"],
    link: "https://ucatbiy.github.io/auralifting",
    image: Images.auralifting,
  },
  {
    title: "Chat",
    description:
      "Минималистичный чат с возможностью отправки сообщений и хранением сообщений в базе данных. Интерфейс выполненен в стиле Liquid Glass и адаптирован под все типы устройств.",
    stack: ["HTML", "SCSS", "JS", "NodeJS", "expressJS"],
    link: "https://chat-zsdz.onrender.com",
    image: Images.chat,
  },
  {
    title: "Glow Flow",
    description:
      "Фановая игра с захватывающим геймплеем уничтожения фигур, анимациями и реалисточной физикой. Цель игры набрать наибольшее количество очков.",
    stack: ["HTML", "CSS", "JS", "matterJS"],
    link: "https://ucatbiy.github.io/glow-flow-game",
    image: Images.glowFlow,
  },
  {
    title: "Draword",
    description:
      "Логическая игра с составлением слов из предложенных букв. Меняй буквы местами, чтобы составлять слова по горизонтали. Цель игры составить на каждой строке слово из предложенных букв.",
    stack: ["HTML", "CSS", "JS", "JSON"],
    link: "https://ucatbiy.github.io/draword-game",
    image: Images.draword,
  },
  {
    title: "ACSIITreeParser",
    description:
      "Расширение для VSCode создающее файловую структуру проекта внутри IDE из ACSII дерева скопированного в буфер обмена. Например можно скопировать структуру от ИИ и получить  готовую директорию.",
    stack: ["NodeJS", "JSON", "VSIX"],
    link: "https://marketplace.visualstudio.com/items?itemName=Dannil-Usatenko.ascii-tree-parser",
    image: Images.asciiTreeParser,
  },
];

export const stack = [
  { name: "HTML", icon: Icons.HTML },
  { name: "CSS", icon: Icons.CSS },
  { name: "Sass", icon: Icons.Sass },
  { name: "JavaScript", icon: Icons.JavaScript },
  { name: "TypeScript", icon: Icons.TypeScript },
  { name: "React", icon: Icons.React },
  { name: "React Native", icon: Icons.ReactNative },
  { name: "Bootstrap", icon: Icons.Bootstrap },
  { name: "Htmx", icon: Icons.Htmx },
  { name: "Node.js", icon: Icons.NodeJS },
  { name: "Bun", icon: Icons.Bun },
  { name: "Vite", icon: Icons.Vite },
  { name: "Docker", icon: Icons.Docker },
  { name: "Nginx", icon: Icons.Nginx },
  { name: "Git", icon: Icons.Git },
  { name: "Npm", icon: Icons.Npm },
  { name: "Bash", icon: Icons.Bash },
  { name: "Figma", icon: Icons.Figma },
];
export const timeline = [
  {
    year: "2026",
    title: "Настоящее время",
    description: "Продолжаю развиваться и искать возможности",
    details: [
      "Активно изучаю Backend на TypeScript + NestJS",
      "Углубляюсь в архитектуру приложений и паттерны проектирования",
      "Ищу команду для профессионального роста и первого коммерческого опыта",
      "Развиваю портфолио и участвую в open-source",
    ],
  },
  {
    year: "2025",
    title: "Поступление в колледж",
    description: "Начало профессионального образования",
    details: [
      "Поступил на специальность 'Информационные системы и программирование'",
      "Начал изучать React Native для мобильной разработки",
      "Освоил работу с Docker и контейнеризацией",
      "Попробовал себя в хакатонах и командной разработке",
    ],
  },
  {
    year: "2024",
    title: "Углубление в веб-разработку",
    description: "Активное изучение современного фронтенда",
    details: [
      "Освоил React и TypeScript на практике",
      "Научился делать адаптивную вёрстку и работать с препроцессорами",
      "Закрепил навыки работы с Git и GitHub в реальных проектах",
      "Начал собирать портфолио из своих работ",
    ],
  },
  {
    year: "2023",
    title: "Начало пути в IT",
    description: "Первые шаги в веб-разработке",
    details: [
      "Начал изучать HTML и CSS с нуля",
      "Освоил основы JavaScript и DOM-манипуляции",
      "Познакомился с Git и GitHub для управления кодом",
      "Сделал первые небольшие проекты для практики",
    ],
  },
];

export const footer = {
  contacts: {
    telegram: "USATbIY_DEV",
    phones: ["+7 (905) 575-57-51", "+995 (422) 57-55-75"],
    emails: ["daniil@usatenko.dev", "USATbIY@gmail.com"],
  },
  socials: [
    { href: "https://github.com/username", label: "GitHub" },
    { href: "https://hh.ru/resume/username", label: "HH.ru" },
    { href: "https://habr.com/ru/users/username", label: "Habr" },
    { href: "https://linkedin.com/in/username", label: "LinkedIn" },
    { href: "https://leetcode.com/username", label: "LeetCode" },
  ],
};

export const navigation = [
  { id: "top", label: "Главная" },
  { id: "skills", label: "Навыки" },
  { id: "projects", label: "Проекты" },
  { id: "stack", label: "Стек" },
  { id: "timeline", label: "Путь" },
];
