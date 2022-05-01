import React from 'react'
import { Bar, Label, Divider } from 'atoms'
import { Title } from './StyleSheet'
import { Wrapper, Row, ChartsWrapper } from './StyleSheet'

const View = (props = {}) => {
    const { skills, title } = props
    return (
        <Wrapper>
        <Row>
            <Label text={title.text} lineColor={title.lineColor}/>
            <ChartsWrapper>
            {skills.map((skill, index) =>
            <div key={index}>                
                <Title>{skill.title}</Title>
                <Bar value={skill.value} color={skill.barColor}/>
            </div>
            )}
            </ChartsWrapper>
        </Row>
        <Divider/>
    </Wrapper>
    )
}

export default View
