import * as Icons from "@assets/icons";
import * as Images from "@assets/images";

export const profile = {
  name: "Даниил Усатенко",
  role: "Web & Mobile Developer",
  description:
    "Создаю современные приложения с фокусом на производительность, масштабируемость и чистый код. Занимаюсь веб и мобильной разработкой уже 3 года, специализируюсь на React-экосистеме. За это время прошёл путь от вёрстки лендингов до сложных мобильных приложений с нативной интеграцией и построением полноценных пользовательских сценариев. Стараюсь не просто закрывать задачи, а разбираться в продукте целиком — от UX до того, как приложение ведёт себя в продакшене и как его поддерживать. Работаю с React, TypeScript и React Native, уделяю внимание UX/UI и оптимизации. Постоянно учусь и внедряю новые технологии. Ищу первый коммерческий опыт для профессионального роста.",
  avatar: Images.avatar,
  github: "https://github.com/daniilusatenko/business-card",
};

export const about = {
  title: "Обо мне",
  description: [
    "За 3 года я прошёл путь от вёрстки до мобильной разработки: работал с играми, расширениями для IDE и социальными платформами. Каждый проект добавлял новый слой понимания — как строить интерфейсы, которые не только работают, но и приятны в использовании.",
    "Стараюсь следовать индустриальным стандартам, а не изобретать свои: БЭМ в вёрстке, TypeScript вместо чистого JS, Git-flow с ревью и rebase вместо хаотичных коммитов. Из инструментов — Vite и Webpack для сборки, Docker и Nginx для деплоя.",
    "Учусь на направлении «Информационные системы и программирование», но стек освоил самостоятельно — через практику и разбор чужого кода. Ищу команду, где смогу применить накопленный опыт.",
  ],
  terminal: {
    title: "neofetch — developer — 80x24",
    stats: [
      { key: "Name:", value: "Daniil Usatenko" },
      { key: "Role:", value: profile.role },
      { key: "Experience:", value: "3 years" },
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
      "Адаптивная и кросс-браузерная вёрстка с поддержкой всех современных устройств",
      "Построение UI на React с разделением на переиспользуемые компоненты и хуки",
      "Управление состоянием компонентов через useState, useReducer и Context API",
      "Создание плавных анимаций и переходов на CSS и JS без потери производительности",
      "Миграция проектов с JavaScript на TypeScript с постепенным внедрением типизации",
      "Вёрстка по методологии БЭМ для предсказуемой структуры стилей",
      "Использование предпроцессора стилей Sass для улучшения структуры кода",
    ],
  },
  {
    category: "Backend",
    items: ["В процессе изучения", "Стек: TypeScript + NestJS"],
  },
  {
    category: "Mobile",
    items: [
      "Разработка кросс-платформенных приложений на React Native",
      "Настройка сложной навигации: вложенные стеки, табы, модальные экраны",
      "Адаптация интерфейсов под разные размеры экранов и платформенные особенности",
      "Работа со списками (FlatList/SectionList) и оптимизация их рендеринга",
      "Анимации и жесты в мобильных интерфейсах (Reanimated / Gesture Handler)",
      "Настройка стилизации кросс-платформенных компонентов с учётом различий iOS/Android",
      "Сборка и локальный запуск приложений через Expo / React Native CLI",
    ],
  },
  {
    category: "Инструменты",
    items: [
      "Контейнеризация приложений с Docker: Dockerfile, docker-compose",
      "Настройка веб-серверов Nginx для production окружения",
      "Сборка проектов через Vite: алиасы, code splitting, оптимизация бандла",
      "Построение CI/CD пайплайнов для автоматической сборки и деплоя",
      "Уверенная работа с Git в команде: ревью, rebase, разрешение конфликтов",
      "Работа в Bash и администрирование Linux-систем (Arch, Kali и другие)",
      "Настройка окружений и переменных для разных стадий (dev/prod)",
    ],
  },
  {
    category: "Дизайн",
    items: [
      "Создание прототипов и интерактивных макетов в Figma",
      "Проектирование удобных и интуитивных пользовательских сценариев",
      "Адаптация готовых дизайн-систем под технические ограничения",
      "Соблюдение принципов UI/UX во всех проектах",
      "Перевод макетов в вёрстку с сохранением визуальной консистентности",
      "Построение сеток и адаптивных layout-структур под разные разрешения",
      "Внимание к деталям: отступы, типографика, состояния интерфейса (hover/active/disabled)",
    ],
  },
  {
    category: "Софт скилы",
    items: [
      "Самоорганизация и управление временем при работе без жёсткого контроля",
      "Работа в команде: код-ревью, обсуждение архитектурных решений",
      "Эффективная коммуникация и презентация технических решений",
      "Быстрое погружение в незнакомый стек или чужой код",
      "Адаптация к новым технологиям и требованиям проекта",
      "Разбор и исправление чужих ошибок в коде без потери контекста задачи",
      "Способность доводить проект до релиза самостоятельно, от идеи до деплоя",
    ],
  },
];
export const projects = [
  {
    title: "Auralifting",
    description:
      "Спортивный мультиприложение с трекером тренировок, отслежианием питания, встроенной социальной сетью. Позволяет пользователям соревноваться, общаться и отслеживать прогресс.",
    stack: ["React Native", "TypeScript", "Golang", "PostgreSQL", "Docker"],
    repo: "https://github.com/daniilusatenko/auralifting",
    test: "https://ucatbiy.github.io/auralifting",
    image: Images.auralifting,
  },
  {
    title: "Chat",
    description:
      "Минималистичный веб-чат с хранением сообщений в базе данных. Интерфейс выполнен в стиле Liquid Glass с адаптивной вёрсткой под все устройства. Поддерживает обмен данными в реальном времени.",
    stack: ["HTML", "SCSS", "JS", "NodeJS", "ExpressJS"],
    repo: "https://github.com/daniilusatenko/chat",
    test: "https://chat-zsdz.onrender.com",
    image: Images.chat,
  },
  {
    title: "Glow Flow",
    description:
      "Аркадная веб-игра с динамичной физикой и яркими анимациями. Игроку нужно уничтожать фигуры, набирая очки и комбо. По ходу игры сложность увеличивается. Простая механика, но сложно оторваться.",
    stack: ["HTML", "CSS", "JS", "matterJS"],
    repo: "https://github.com/daniilusatenko/glow-flow",
    test: "https://ucatbiy.github.io/glow-flow",
    image: Images.glowFlow,
  },
  {
    title: "Draword",
    description:
      "Логическая игра, где нужно составлять слова из предложенных букв. Меняй буквы местами, чтобы найти правильные комбинации на каждой строке. Проверь свою внимательность и словарный запас.",
    stack: ["HTML", "CSS", "JS", "JSON"],
    repo: "https://github.com/daniilusatenko/draword",
    test: "https://ucatbiy.github.io/draword-game",
    image: Images.draword,
  },
  {
    title: "ACSIITreeParser",
    description:
      "Расширение для VSCode, которое создаёт файловую структуру проекта прямо в IDE на основе ASCII-дерева из буфера обмена. Идеально для быстрого развёртывания структуры, сгенерированной ИИ.",
    stack: ["NodeJS", "JSON", "VSIX"],
    repo: "https://github.com/daniilusatenko/ascii-tree-parser",
    test: "https://marketplace.visualstudio.com/items?itemName=Dannil-Usatenko.ascii-tree-parser",
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
      "Поступил на специальность 'ИСП' в колледже",
      "Начал изучать React Native для мобильной разработки",
      "Освоил работу с Docker и контейнеризацией",
      "Собрал команду разработчиков для совместного проекта",
    ],
  },
  {
    year: "2024",
    title: "Углубление в веб-разработку",
    description: "Активное изучение современного фронтенда",
    details: [
      "Освоил React и TypeScript для построения сложных интерфейсов",
      "Научился адаптивной вёрстке и работе с препроцессорами",
      "Закрепил навыки работы с Git в реальных проектах",
      "Начал собирать портфолио из своих работ",
    ],
  },
  {
    year: "2023",
    title: "Начало пути в IT",
    description: "Первые шаги в веб-разработке",
    details: [
      "Начал изучать HTML и CSS для первых веб-страниц",
      "Освоил основы JavaScript и DOM-манипуляции",
      "Познакомился с Git для управления кодом",
      "Сделал первые небольшие проекты для практики",
    ],
  },
];

export const footer = {
  contacts: [
    { href: "https://t.me/daniilusatenko", label: "Telegram" },
    { href: "https://signal.me/#p/daniilusatenko", label: "Signal" },
    { href: "mailto:daniilusatenko@proton.me", label: "Email" },
    { href: "tel:+79055755751", label: "Phone (RU)" },
    { href: "tel:+995575575575", label: "Phone (GE)" },
  ],
  socials: [
    { href: "https://github.com/daniilusatenko", label: "GitHub" },
    { href: "https://hh.ru/resume/daniilusatenko", label: "HH.ru" },
    { href: "https://habr.com/ru/users/daniilusatenko", label: "Habr" },
    { href: "https://linkedin.com/in/daniilusatenko", label: "LinkedIn" },
    { href: "https://leetcode.com/daniilusatenko", label: "LeetCode" },
  ],
};

export const navigation = [
  { id: "top", label: "Главная" },
  { id: "skills", label: "Навыки" },
  { id: "projects", label: "Проекты" },
  { id: "stack", label: "Стек" },
  { id: "timeline", label: "Путь" },
];
