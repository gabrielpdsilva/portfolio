import React from 'react'
import { InfoBox, Label, Divider } from 'atoms'
import { Wrapper, Row, InfoBoxWrapper } from './StyleSheet'

const View = (props = {}) => {
    const { title, data } = props
    return (
        <Wrapper>
            <Row>
                <Label text={title.text} lineColor={title.lineColor}/>
                <InfoBoxWrapper>
                {data.map((d, index) =>
                    <InfoBox
                        key={index}
                        title={d.title}
                        subtitle={d.subtitle}
                        date={d.date}
                        description={d.description}
                    />
                )}
                </InfoBoxWrapper>
            </Row>
            <Divider/>
        </Wrapper>
    )
}

export default View
