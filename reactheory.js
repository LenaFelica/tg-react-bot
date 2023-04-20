//* перешли сюда с бота
//* для начала, нужно APi проинициализировать
//*

import { isVisible } from "@testing-library/user-event/dist/utils"
import { BrowserRouter } from "react-router-dom"

//* идем в core.telegram.bot - core.telegram.org/bots/webapps
//* копируем скрипт с сайта документации и втсавляем его в конце тега head
//* чтобы у нас подхватились все поля, импорты
//* 
//* после подключения скрипта в глобальный объет window
//* у нас добавилось новое поле - поле телеграмм
//* с помощью него мы как раз будем с нашим ботом взаимодействовать
//
//*window.Telegram.WebApp. - внутри поля webApp как раз все, что нам может понадобиться
//
//*так же становятся доступны css переменные, с помощью которых мы будем задавать css цвета нашего приложения
//* эти цвета соответствуют теме пользователя, котрая выбрана в телеграмме
//
//* идем в css и попробуем изменить цвет заднего фона и цвет шрифта
//* таким способом задаютс переменные , а в документации они прописаны
//* https://core.telegram.org/bots/webapps#popupbutton
//* https://core.telegram.org/bots/webapps#themeparams
// body {
//    background: var(--tg-theme-bg-color);
//    color: var(--tg-theme-text-color);
// }
//
//* создадим кнопку Закрыть в приложении,
//*  а сверху создадим функцию - при нажатии на кнопку она будет приложение закрыать
//
//*const tg = window.Telegram.WebApp; - вынесем в отдельную переменную
//* и в этой переменной у нас есть метод close
//* tg.close() - с помощью него мы будем вебприложение закрывать
//* передаем его в функцию onClose
//
//* выше воспользуемся useEffect и в него передадим метод tg.ready()
//* этот метод означает, что приложение полностью проинициализировалось
//* и его можно отрисовывать
//! App.js
// import { useEffect } from 'react';
// import './App.css';
// const tg = window.Telegram.WebApp;

// function App() {
  
//   useEffect(() => {
//        tg.ready();
//   }, [])

//   const onClose = () => {
//        tg.close();
//   }


//   return (
//     <div className="app">
//          work
//          <button onClick={onClose}>Закрыть</button>
//     </div>
//   );
// }

// export default App;

//
//* Также в package.json убрать
// "eslintConfig": {
//    "extends": [
//      "react-app",
//      "react-app/jest"
//    ]
//  },
//* чтобы ошибки линтера нас не отвлекали
//

//! ***** на gitHub создаем репозиторий *****
//* tg-web-app-react
//*
//* в gitignor создаем файл в самом низу .idea
//
//* из репозитория копируем ссылку на удаленный репозиторийй в гит
//* в терминал добавляем:
//* 1 - ссылку на удаленный репозиторий
//git remote add origin https://github.com/LenaFelica/tg-web-app-react.git
//* 2 -индексируем файлы:
//git add . 
//* 3 - делаем commit
//git commit -m 'initial'
//* 4 - пушим на гитхаб 
//git push -u origin main (ветку меняем на master здесь, потому что у меня в master создаетсЯ)
//
//* Все, обновляем страницу на gitHub - и там наши файлы!!
//
//! Далее , идем на netlify.com
//
//* Это по сути сервер, который разздает статику!
//
//*  Самый быстрый способ объединить ваши любимые
//*  инструменты и API для создания самых быстрых
//*  сайтов, магазинов и приложений для Интернета.
//
//* Надо зарегиться и далее с гитхаба добавить наш проект
//* там все интуитивно
//* add new site -> repository -> и тд
//* далее смотрим, что он добавился
//* там название
//* ветка master
//* команда npm run build для сборки
//* то есть, будет собираться статика и эта статитка будет раздаваться
//* и жмем deploy site -> ждем
//* надо будет подождять
//* мы получим для этой статики публичную ссылку
//* если на нее нажмем, то увидим свое web app
//
//* Чтобы работаь с нашим ботом
//https://phenomenal-jalebi-daf3ae.netlify.app/
//* копируе там эту ссылку, переходим в бота
//* и в качестве webAppUrl вставляем
// const webAppUrl = 'https://phenomenal-jalebi-daf3ae.netlify.app/'

//
//* Настроили в боте открытие сайта при нажатии на кнопку Сайт
//
//! ***** Создадим кнопку  *****
//
//* Создадим папку - components -> Button -> Button.jsx
//* Button -> Button.css -> .button{}
//* там используем переменные из документации:
// .button {
//    padding: 10px 15px;
//    background: var(--tg-theme-button-color); 
//    color: var(--tg-theme-button-text-color);
//    border: none;
//    outline: none;
//    cursor: pointer;
// }
//
//* в Button.jsx создаем компонент
//* принимать будет пропсы
//* и в самой кнопке эти пропсы спредом разварачиваем
//* переопределим пропс класснэйм - кнопка + другие пропсы класснэйм
// import React from "react";

// const Button = (props) => {
//    return (
//       <button {...props} className={'button '+ props.className} />
//    )
// }

// export default Button;

//
//* Создаем папку в components -> Header -> Header.jsx
//* Header -> Header.css -> там прописываем стили
//* Это своего рода навигационная панель, Navbar
//
//* Далее в Header.jsx навешиваем className на корневой блок
//* Затем используем кнопку, которую уже сделали - Закрыть
//* Ниже создадим span с класснеймом username, и не просто
//* а именно username из телеграмма
//<span className={'username'}></span>
//* то есть, удже на этом этапе связываем телешрамм снашим вебприложением
// идем https://core.telegram.org/bots/webapps#themeparams
//* в документации есть 2 поля - initData и initDataUnsafe
//* initData - это просто строка никак не распаршиная
//* initDataUnsafe - это уже преобразованный JSON объект для использования
//
//* Идем в Арр и оттуда врезаем const tg и const onClose - переносим в Header
//* и на новую кнопку вешаем onClick
//* А внутрь тега span выведем username пользователя
//* таким вот образом
//* обращаемся к tg.initDataUnsafe?.user?.username
//* используем ? - option chaning operator чтобы у нас приложение не крякнуло
//* если по какой-то причине этих данных нет
//* то есть, мы так себя обезопасили!!!
//
//! Header.jsx
// import React from "react";
// import Button from "../Button/Button";

// const Header = () => {
//    const tg = window.Telegram.WebApp; //

//    const onClose = () => { //
//       tg.close();
//  }

//    return (
//       <div className={'header'}>
//          <Button onClick={onClose}>Закрыть</Button> //
//          <span className={'username'}>
//             {tg.initDataUnsafe?.user?.username}
//          </span>
//       </div>
//    )
// }
// export default Header;
//
//* Теперь получившиеся изменения отправляем на gitHub
// в терминале
//* 2 -индексируем файлы:
//git add . 
//* 3 - делаем commit
//git commit -m 'initial'
//* 4 - пушим на гитхаб 
//git push -u origin main (ветку меняем на master здесь, потому что у меня в master создаетсЯ)
//* и они появляются в моем репозитории
//
//* На каждый такой push у нас на netlify будет заново генериться сборка
//* и буквально через 30 сек мы получаем обновленную версию приложения
//
//* В Арр мы полность вырезали объект с tg и у нас useEffect сломался
//* мы вызываем ф-ю ready, а объекта tg у нас нет:
// function App() {
  
//    useEffect(() => {
//         tg.ready();
//    }, [])
//
//* Создаем вресурсах папку - hooks
//* в ней useTelegram.js - свой хук
//* внутри которого у нас будут все удобные инструменты, связанные с телеграммом
//* 
//* в первуюочередь вынесем туда получение объекта для взаимодействия с телеграммом
//* const tg = window.Telegram.WebApp;
//
//* сделаем return
//* в Header использовалась ф-я onClose, ее выносим в этот ретерн
//* и в разных местах использовать
//
//* в хуке в ретерне мы возвращаем
//*  ф-ю onClose,
//*  сам объект tg и 
//*  достаем самого пользователя из нужных полей - tg.initDataUnsafe?.user, 
//
//* И теперь везде, где нам понадобятся данные о пользователе, или объект tg
//* мы можем эти данные получить ,дернув хук useTelegram !!
//
//* здесь же создадим ф-ю onToggleButton - ее задумали разработчики телеги
//* она отображается снизу!!
//* идем в документацию
//https://core.telegram.org/bots/webapps#themeparams
//* там она MainButton - основная кнопка, с помощью которой идет взаимодействие
//* и там есть ряд методов - show, hide, disable - можно поменять цвет, текс..
//
//* Сейчас пока покажем эту кнопку
//* по условию (isVisible), мы делаем либо show этой кнопки(отображаем), либо hide(скрываем)
// const onToggleBatton =() => {
//    if(tg.MainButton.isVisible) {
//         tg.MainButton.hide()
//    } else {
//         tg.MainButton.show()
//    }
// } 
//* и добавляем onToggleButton в return
//* 
//
//* теперь в Header.jsx попробуем хук useTelegram заиспользовать 
//* import {useTelegram} from '../../hooks/useTelegram'
//* и достаем внутри деструкткризацией все необходимые поля
//const {tg, user, onClose} = useTelegram();
//* в span мы теперь можем использовать только .user?.username
//*
//* и onClose используестя как слушатель события
//* идем в Арр и там под импортами 
// import {useTelegram} from './hooks/useTelegram';
//* используем этот хук внутри компонента АРР:
//* до useEffect
//* const {onToggleButton, tg} = useTelegram(); - добавляем тестовую кнопку,
//* с помощью которой будем делать toggle главной кнопки - MainButton
//* в Арр в ретерне в корневой div добавляем <button>toggle</button>
//* и на нее вешаем слушатель события onClick={ontoggleButton}
//* также нужен здесь tg, чтобы вызвать метод ready в useEffect
//const {onToggleButton, tg} = useTelegram();
//
//! useTelegram
// const tg = window.Telegram.WebApp;

// export function useTelegram () {

//    const onClose = () => {
//       tg.close();
//  }

//    const onToggleButton = () => {
//       if(tg.MainButton.isVisible) {
//           tg.MainButton.hide();
//       } else {
//           tg.MainButton.show();
//       }
//      }

//      return {
//         onClose,
//         onToggleButton,
//         tg,
//         user: tg.initDataUnsafe?.user,
//      }
// } 
//
//! Header.jsx
// import React from "react";
// import { useTelegram } from "../../hooks/useTelegram";
// import Button from "../Button/Button";

// const Header = () => {
//    const{user, onClose} = useTelegram();

//    return (
//       <div className={'header'}>
//          <Button onClick={onClose}>Закрыть</Button>
//          <span className={'username'}>
//             {user?.username}
//          </span>
//       </div>
//    )
// }
// export default Header;
//
//! App.js
// import { useEffect } from 'react';
// import './App.css';
// import { useTelegram } from './hooks/useTelegram';


// function App() {

//   const{onToggleButton, tg} = useTelegram();

//   useEffect(() => {
//        tg.ready();
//   }, [])

//   return (
//     <div className="app">
//          <button onClick={onToggleButton}>toggle</button>     
//     </div>
//   );
// }

// export default App;

//* в терминале
// в терминале
//* 2 -индексируем файлы:
//git add . 
//* 3 - делаем commit
//git commit -m 'initial'
//* 4 - пушим на гитхаб 
//git push -u origin main
//
//* после идем в телеграм и при нажатии на кнопку появляется приложение
//* вверхнем углу toggle, и при нажатии на нее
//*  внизу появляется mainButton кнопка!!!
//* это как раз основная кнопка по взаимодействию с ботом!
//*
//* добавим в Арр <Header/> и делаем push в gitHub
//
//* импортируем стили в Header и в Button !!!!!
//
//* сейчас в телеграм рядом с toggle отображаетсяя юзернэйм пользователя
//* username как раз моего телеграм аккаунта - lenafelica
//* а над ним кнопка закрыть!
//
//* Если открывать через keyboard кнопку, то там username уже нет
//* Соответственно, взаимодействие с ботом будет происходить по разному
//* с помощью keyboard кнопки мы будем делать одни дейчтвия
//* с помощью inline кнопки и голубенькой Сайт - другие
//
//! Напомню, что эти кнопки созданы в tg-web-app-bot !!!!
//
//! -----  inline кнопка и голубенькая Сайт
//*  работают одинаково
//* когда мы их используем, то нам доступны данные о пользователе(id,username,language)
//!--------------- Взаимодействие с ботом ----------------------------
//* а также доступно query_ID и метод answerWebAppQuery
//* с помощью них мы можем с ботом взаимодейтсвовать!!
//!----------------------------------------------------------------
//
//!  ----- keyboard кнопка  ---
//* там эти вещи не доступны
//* но зато с помощью метода sendData мы можем общаться с ботом
//!-----------------------------------------------------------------
//
//
//!  ******  component Form и ProductList ******
//
//* создадим 2 странички, с помощью которых мы с ботом будем взаимодействовать
//* 1 - компонент Form, который будет открываться при нажатии на вот эту keyboard button
//* 2 - ProductList - мини интернет магазин, в котором мы будем какие-то товары накликивать и отправлять их в бот
//* 
//* Создали компоненты и стили для этих компонентов
//* все импортируем
//
//* и для того, чтобы отрисовывать эти страницы по разным url в браузере
//* то есть, по разным путям!!
//! установим npm i react-router-dom !!!
//* с помощью которого можно осуществлять навигацию в SPA
//
//* в index.js файле в root.render( <BrowserRouter> обернуть все наше приложение
//* весь Арр туда
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import {BrowserRouter} from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//          <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
//
//* И затем перейдем в корневой компонент в Арр.js
//* импортируем сюда Route , Routes из react-router-dom
//
//* Далее создаем в Арр вместо кнопки 
// <button onClick={onToggleButton}>toggle</button> 
//* <Routes><Route/></Route></Routes> - 2 странички, которые буду открываться по 2м маршрутам
//
//! App.js
//
// import { useEffect } from 'react';
// import './App.css';
// import Header from './components/Header/Header';
// import { useTelegram } from './hooks/useTelegram';
// import {Route, Routes} from 'react-router-dom';
// import ProductList from './components/ProductList/ProductList';
// import Form from './components/Form/Form';

// function App() {

//   const{onToggleButton, tg} = useTelegram();

//   useEffect(() => {
//        tg.ready();
//   }, [])

//   return (
//     <div className="app">
//          <Header/>
//          <Routes>
//              <Route index element={<ProductList/>} />
//              <Route path={'form'} element={<Form/>} /> //форма взаимодействия с нашим ботом
//          </Routes>
//     </div>
//   );
// }

// export default App;
//
//* с путями мы закончили, далее откроем приложение прямо в браузере
//* 
//
//! Form.jsx
//* все слушатели добавили
//* связали их с состоянием
//
// import React, { useState } from "react";
// import './Form.css';

// const Form = () => {
//    const [country, setCountry] = useState('');
//    const [street, setStreet] = useState('');
//    const [subject, setSubject] = useState('physical');

//    const onChangeCountry = (e) => {
//       setCountry(e.target.value)
//    }

//    const onChangeStreet = (e) => {
//       setCity(e.target.value)
//    }

//    const onChangeSubject =(e) => {
//       setSubject(e.target.value)
//    }

//    return (
//       <div className={'form'}>
//          <h3>Введите ваши данные</h3>
//            <input value={country} onChange={onChangeCountry} className={'input'} type="text" placeholder={'Страна'} />
//            <input value={street} onChange={onChangeStreet} className={'input'} type="text" placeholder={'Улица'} />
//          <select value={subject} onChange={onChangeSubject} className={'select'}>
//             <option value={'physical'} >Физ.лицо</option>
//             <option value={'legal'}>Юр.лицо</option>
//          </select>
//       </div>
//    )
// }

// export default Form;
//
//! ***** задача - оживить кнопку в телеграм *****
//
//* открываем сайт в телеграм, нажимаем на кнопку Сайт
//* внизу появляется кнопка синяя
//* нужно поменять в ней текст
//* научиться с ней работать
//
//* в документации опять же все там подробно
//* нас инетресует метод setParams() -  c помощью него мы можем поменять кнопки
//* цвет , задисэйблить ее
//
//* Текст в этой кнопке мы будем задавать в useEffect() при рендере компонента
//
//* в Form.js получаем хук useTelegram() , импортируем
// const{tg} = useTelegram();
//
//* Обращаемся к mainButton в useEffect() (именно ее текст, цвет и тд мы можем менять)
//* вызываем у tg.MainButton метод setParams({text: "Отправить данные"}) например
//
//* Ниже добавим еще один useEffect()
//* и в нем мы будет эту кнопку скрывать, либо добавлять
//* В массив зависимости добавляем country< city
//* и внтри useEffect делаем такую проверку
//* если пользователь не заполнил страну и город, то кнопка hide
//* то есть, это своего рода простейшая валидация - мы не даем в своего бота отправлять пустые данные!!!
// tg.MainButton.hide();
//* в обратном случае, если поля заполнены, вызываем метод show() - показать кнопку и отправить данные
//
//! Form.js
//
// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useTelegram } from "../../hooks/useTelegram";
// import './Form.css';

// const Form = () => {
//    const [country, setCountry] = useState('');
//    const [street, setStreet] = useState('');
//    const [subject, setSubject] = useState('physical');
//    const {tg} = useTelegram();

//    useEffect(() => {
//      tg.MainButton.setParams({text:'Отправить данные'})
//    },[])

//    useEffect(() => {
//       if(!country || !street ) {
//          tg.MainButton.hide();
//       } else {
//          tg.MainButton.show();
//       }
//    },[country, street])

//    const onChangeCountry = (e) => {
//       setCountry(e.target.value)
//    }

//    const onChangeStreet = (e) => {
//       setStreet(e.target.value)
//    }

//    const onChangeSubject =(e) => {
//       setSubject(e.target.value)
//    }

//    return (
//       <div className={'form'}>
//          <h3>Введите ваши данные</h3>
//            <input value={country} onChange={onChangeCountry} className={'input'} type="text" placeholder={'Страна'} />
//            <input value={street} onChange={onChangeStreet} className={'input'} type="text" placeholder={'Улица'} />
//          <select value={subject} onChange={onChangeSubject} className={'select'}>
//             <option value={'physical'} >Физ.лицо</option>
//             <option value={'legal'}>Юр.лицо</option>
//          </select>
//       </div>
//    )
// }

// export default Form;
//
//*git add. 
//* git commit -m 'sms'
//* git push -u origin master
//
//! идем в tg-web-app-bot
//*
//* Теперь, для того, чтобы у нас открывалась именно форма
//* Надо на backend в index.js у нашего бота в keyboard
//* добавить к url + '/form' - это именно тот путь, по которому у нас открывается форма

//* То есть, при нажатии на inline_keyboard будет открываться интернет магазин
//
//* А при нажатии на keyboard будет открываться форма 
//
//! index.js сейчас в tg-web-ap-bot
//
// const TelegramBot = require("node-telegram-bot-api");

// const token = "6244609802:AAGT1uZcF3Ty6e__V3ASBhDoq2dHOV8pCMY";
// const webAppUrl = "https://phenomenal-jalebi-daf3ae.netlify.app/";
// const bot = new TelegramBot(token, { polling: true });

// bot.on("message", async (msg) => {
//   const chatId = msg.chat.id;
//   const text = msg.text;

//   if (text === "/start") {
//     //* keyboard button
//     await bot.sendMessage(chatId, 'Ниже появится кнопка "заполни форму"', {
//       reply_markup: {
//         keyboard: [[{ text: "Заполни форму", web_app: { url: webAppUrl + '/form' } }]],  -- открывается форма
//       },
//     });

//     //*   inline button
//     await bot.sendMessage(chatId, "Заходи в наш интернет магазин по кнопке", {
//       reply_markup: {
//         inline_keyboard: [
//           [{ text: "Сделать заказ", web_app: { url: webAppUrl + '/productList' } }], -- открывается интернет магазин
//         ],
//       },
//     });
//   }
// });
//
//* При нажатии на кнопку - заполнить форму - может быть ошибка
//* она получается, пототму что netlify пытается найти маршрут формы
//* а такого маршрута не мущетсвует
//* поттму что , все маршруты у нас искусственные и сделаны с реакт роутер дом!!
//
//* для того, чтобы это исправить, 
//* в tg-web-app-react 
//* необходимо сделать конфигурационный файл - 
//* netlify.toml
//* и внутри него прописать опции:
//* то есть мы, по любому маршруту делаем редирект в index.html файл
//* потому что у нас SPA с одним единственным html файлом
//? [[redirects]]
//?  from = "/*"
//?  to = "/index.html"
//?  status = 200
//
//* И все закомитить на github!!!