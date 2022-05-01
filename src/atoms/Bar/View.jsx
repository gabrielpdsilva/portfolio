import React from 'react'
import { EntireBar, FillBar } from './StyleSheet'

const View = (props = {}) => {
    const { value = 0, color } = props
    return (
        <EntireBar>
            <FillBar value={value} fillColor={color}/>
        </EntireBar>
    )
}

export default View
