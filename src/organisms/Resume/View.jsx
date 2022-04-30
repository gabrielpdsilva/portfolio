import React from 'react'
import { Section } from 'molecules'
import useContainer from './Container'

const View = () => {
    const { resumeData } = useContainer()
    return (
        <section id='resume'>
            {resumeData.map((data, index) =>
                <Section key={index} title={data.title} data={data.data}/>
            )}
        </section>
    )
}

export default View
