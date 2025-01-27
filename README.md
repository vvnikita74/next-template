## **🚀 Next.js Professional Starter Template**  
*Продакшен-готовый шаблон с поддержкой legacy-браузеров и строгим кодстайлом*

---

### **✨ Особенности**  
- **Next.js 15** с App Router и Server Actions  
- **Tailwind CSS 4.0** с кастомными утилитами и плагинами  
- **PostCSS** с полным стеком оптимизаций:  
  ```bash
  tailwindcss | autoprefixer | postcss-flexbugs-fixes | cssnano
  ```
- **SVGR** для иконок (Webpack-интеграция)  
- **ESLint** + **Prettier** с "железными" правилами  
- Поддержка **TypeScript 5.3** из коробки  

---

### **🛠 Технологии**  
- React 19 (с RSC и Progressive Hydration)  
- PostCSS Plugins:  
  - `cssnano` (оптимизация CSS)  
  - `autoprefixer` (кросс-браузерные префиксы)  
  - `postcss-preset-env` (полифиллы CSS4+)  
- Инструменты:  
  - Browserslist (`> 0.1%, IE 11`)  
  - `prettier-plugin-tailwindcss` (сортировка классов)  

---

### **🚀 Быстрый старт**  
```bash
npx create-next-app -e https://github.com/vvnikita74/next-template
cd your-project
npm run dev
```

---

### **🔧 Конфигурация**  
1. **Иконки через SVGR**:  
   ```jsx
   // components/Icon.jsx
   import StarIcon from '../public/icons/star.svg'
   export default () => <StarIcon className="icon-class" />
   ```

2. **Настройка PostCSS**:  
   ```javascript
   // postcss.config.js
   module.exports = {
     plugins: {
       tailwindcss: {},
       autoprefixer: { grid: true },
       'postcss-flexbugs-fixes': {},
       cssnano: { preset: 'default' }
     }
   }
   ```

3. **Кастомизация Tailwind**:  
   ```javascript
   // tailwind.config.js
   module.exports = {
     content: ['./src/**/*.{js,ts,jsx,tsx}'],
     corePlugins: {
       container: false // Отключаем стандартный контейнер
     }
   }
   ```

---

### **📊 Производительность**  
- **CSS**: Минификация + автопрефиксы для 98% браузеров  
- **Иконки**: SVG → React-компоненты без потерь  
- **Билд**: Оптимизированные чанки через Webpack 5  

---

**🌟 Идеально для**:  
- Корпоративных проектов с IE11+ поддержкой  
- Команд, работающих по гайдлайнам Airbnb  
- Приложений с кастомными дизайн-системами  

[![Open in GitHub Codespaces](https://img.shields.io/badge/Open%20in-Codespaces-blue)](https://github.com/vvnikita74/next-template)  
*Поддерживает VSCode, WebStorm, GitHub Actions*  

---

**Лицензия: MIT**  
*Разработано для реальных продакшен-проектов*
