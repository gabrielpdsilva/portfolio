import React from 'react'
import { Wrapper, Li, Text } from './StyleSheet'
import useContainer from './Container'

const View = () => {
    const { headerOptions } = useContainer()
    return (
        <Wrapper id="nav" className="nav">
            {headerOptions.map((option, index) =>
                <Li key={index}>
                    <Text href={option.href}>{option.title}</Text>
                </Li>
            )}
        </Wrapper>
    )
}

export default View
