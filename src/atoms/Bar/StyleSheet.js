import styled from 'styled-components'

const MULTIPLE = 5

export const EntireBar = styled.div`
    margin: 10px;
    border-radius: 4px;
    background-color: #ccc;
    width: 500px;
    height: 46px;
`

export const FillBar = styled.div`
    background-color: ${props => props.fillColor ?? '#313131'};
    border-radius: 4px 0 0 4px;
    height: 46px;
    width: ${(props) => `${props.value * MULTIPLE}px`}
`
