import React from 'react'
import { Bar } from 'atoms'
import { Title } from './StyleSheet'

const View = (props = {}) => {
    const { skill } = props
    return (
        <>
            <Title>{skill.title}</Title>
            <Bar value={skill.value} color={skill.barColor}/>
        </>            
    )
}

export default View
