import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      sortBy: 'Sort By',
      date: 'Date',
      text: 'Text',
      estimatedTime: 'Estimated Time',
      addTag: 'Add Tag',
      addToDo: 'Add ToDo',
      selectTime: 'Chose Time',
      todo: {
        text: "Text",
        status: "Status",
        createdAt: "Created At",
        tags: "Tags",
        estimatedTime: "Estimated Time",
        left: "Left",
        actions: "Actions",
        statuses: {
          "All": "All",
          "Active": "Active",
          "Completed": "Completed",
          "In Progress": "In Progress",
          "Paused": "In Pause",    
        } 
      },
    }
  },
  ua: {
    translation: {
      sortBy: 'Сортувати по',
      date: 'Даті',
      text: 'Тексту',
      estimatedTime: 'Запланованому часу',
      addTag: 'Додати тег',
      addToDo: 'Додати завдання',
      selectTime: 'Виберіть час',
      todo: {
        text: "Текст",
        status: "Статус",
        createdAt: "Створено в",
        tags: "Теги",
        estimatedTime: "Заплановано",
        left: "Залишилось",
        actions: "Дії",
        statuses: {
          "All": "Всі",
          "Active": "Активні",
          "Completed": "Завершені",
          "In Progress": "В прогресі",
          "Paused": "На паузі",    
        } 
      },
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ua",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;