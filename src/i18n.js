import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import MusiciansAPI from "./MusiciansAPI";

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi) // Registering the back-end plugin
    .use(Backend)

    .init({
        debug: true,
        fallbacklng: "ru",
        supportedLngs: ["en", "ru"],

        interpolation: {
            escapeValue: false
        },

        resources: {
            en: {
              translation: {  
                  id:"en",                   
                  home_page: "Home",
                  list_of_ph: 'Musicians',
                  russian_lang: "Russian",
                  english_lang: "English",
                  mus: "Musisians",
                  mus_of_day: "Figure of the day",
                  l_more: "Learn more",
                  back_to_list: "Back to the list",
                  home_text:"The modern world cannot be imagined without the most widespread form of art today - photography. We offer you to get acquainted with Belarusian photography from its origins to the present.",
                  devs: "Developers:",
                  Vanya: "Vanya Vasilenko",
                  Fedya: "Fedor Krivitskiy",
                  Maxim:"Maxim Dadush",
                  Vlad:"Vlad Lashkin",
                  searchCaption: "Search for a musisian", 
                  list_ph: "List of musisians",
                  albums:"Albums",
                    
                  name1: "Slava KPSS",
                  name2: "Scally Milano",
                  name3: "Kizyaka",
                  name4: "Krovostok",
                  name5: "Soloduha",
                  name6: "Kunteynir",
              },
            },
              
            
            ru: {
              translation: {     
                    id:"ru",           
                    home_page: "Главная",
                    list_of_ph: 'Музыканты',
                    russian_lang: "Русский",
                    english_lang: "Английский",
                    mus: "Музыканты",
                    mus_of_day: "Деятель дня",
                    l_more: "Узнать больше",
                    back_to_list:"Вернуться к списку",
                    home_text: "Современный мир невозможно представить без самого распространённого вида искусств – фотографии. Предлагаем познакомиться с белорусской фотографией от истоков до современности.",
                    devs: "Разработчики",  
                    Vanya: "Ваня Василенко",
                    Fedya: "Федор Кривицкий",
                    Maxim:"Максим Дадуш",
                    Vlad:"Влад Лашкин", 
                    searchCaption: "Поиск фотографа",  
                    list_ph: "Список фотографов",
                    albums: "Альбомы",
                    name1: "Славка КПСС",
                    name2: "Скали Милано",
                    name3: "Кизяка",
                    name4: "Кровосток",
                    name5: "Солодуха",
                    name6: "Кунтейнир",
                   
              }
            }
        },
    });

export default i18n;