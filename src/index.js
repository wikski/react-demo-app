import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

import './styles/index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// icons
import './helpers/fontAwesome'

// store
const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>    
    , document.getElementById('root'))

registerServiceWorker()
