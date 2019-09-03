import Screen from './src/screen'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './src/reducer'
import React from 'react'

const store = createStore(reducer)

const App = () =>{
return(
    <Provider store={store}>
        <Screen />
    </Provider>
)
}

export default App