import React from 'react'
import { Text } from './StyleSheet'

const View = (props = {}) => {
    const { text, lineColor} = props
    return (
        <Text lineColor={lineColor}>{text.toUpperCase()}</Text>
    )
}

export default View
