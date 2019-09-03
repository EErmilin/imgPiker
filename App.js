import Screen from './src/screen'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reduser from './src/reduser'
import React from 'react'

const store = createStore(reduser)

const App = () =>{
return(
    <Provider store={store}>
        <Screen />
    </Provider>
)
}

export default App