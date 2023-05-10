import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyled } from './components/styled/globalStyled.jsx'
import store from './features/store.js'
import {Provider} from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled/>
   
   <Provider store={store}>
   <App />
   </Provider>
 
  </React.StrictMode>,
)
