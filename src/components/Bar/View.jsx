import React from 'react'
import { EntireBar, FillBar } from './StyleSheet'

const View = (props = {}) => {
    const { value = 0 } = props
    return (
        <EntireBar>
            <FillBar value={value}/>
        </EntireBar>
    )
}

export default View
