import React from 'react'
import { Text, Line } from './StyleSheet'

const View = (props = {}) => {
    const { text, lineColor} = props
    return (
        <div>
            <Text>{text.toUpperCase()}</Text>
            <Line color={lineColor}/>
        </div>
    )
}

export default View
