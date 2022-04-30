import React from 'react'
import { Wrapper, Title, Subtitle, Date, Description, Circle, Row } from './StyleSheet'

const View = (props = {}) => {
    const { title, subtitle, date, description } = props
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Row>
                <Subtitle>{subtitle}</Subtitle>
                <Circle>•</Circle>
                <Date>{date}</Date>
            </Row>
            <Description>{description}</Description>
        </Wrapper>
    )
}

export default View
