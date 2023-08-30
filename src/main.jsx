import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store/store.js'


/* configuring the redux provider */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* componet that recives via prop to a child and a store via atributes  */}
    <Provider store={store} >
      
      <App />

    </Provider>
  </React.StrictMode>,
)
