import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { ThemeProvider } from 'react-jss';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { colors, fonts, breakpoints, theme } from './theme';
import postReducer from './store/reducers/posts';
import authReducer from './store/reducers/auth';
import userCommentReducer from './store/reducers/comments';
import { watchPosts, watchAuth, watchUserComments } from './store/sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  post: postReducer,
  auth: authReducer,
  comments: userCommentReducer 
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchPosts);
sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchUserComments);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={{theme, colors, fonts, breakpoints}}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
