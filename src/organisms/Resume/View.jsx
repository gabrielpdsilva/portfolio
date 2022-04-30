import React from 'react'
import { Detail } from 'molecules'
import useContainer from './Container'

const View = () => {
    const { resumeData } = useContainer()
    return (
        <section id='resume'>
            {resumeData.map((data, index) =>
                <Detail key={index} title={data.title} data={data.data}/>
            )}
        </section>
    )
}

export default View
