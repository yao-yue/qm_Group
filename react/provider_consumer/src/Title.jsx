import React from 'react'
import { Consumer } from './context'


function Title() {
    return (
        <Consumer > 
            {
                ({title}) => <h1>Ttile: {title}</h1>
            }
        </Consumer>
    )
}
export default Title;    