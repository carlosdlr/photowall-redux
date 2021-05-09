import React from 'react';
import ReactDOM  from 'react-dom';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';
import App from './Components/App';
import thunk from 'redux-thunk'; // to apply middleware to manage async sotrage in this case firebase
import {database} from './database/config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creating redux root store
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

//using react api
//const elementList = React.createElement('ol', null, 
//tasks.map( (task, index) => React.createElement('li', {key: index}, task)));

//using jsx sintax
/*const elementList = <div>
  <h1>Tasks list</h1>
  <ol>
    {tasks.map((task) => <li>{task}</li>)}
  </ol>
  </div>*/

// to nable router in the app
//adding react redux provider to provide communication between root store and the most nested component
ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


/**
 * to use later
 * url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix") format('embedded-opentype'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff") format('woff'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf") format('truetype'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular") format('svg');
 * 
 * const posts = [{
 id: "0",
 description: "beautiful landscape",
 imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
 "3919321_1443393332_n.jpg"
 }, {
 id: "1",
 description: "Aliens???",
 imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
 }, {
 id: "2",
 description: "On a vacation!",
 imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
 }]


 url("https://image.flaticon.com/icons/svg/60/60740.svg") center
 */