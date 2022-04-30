import styled from 'styled-components'

export const Text = styled.span`
    color: #313131;
    font-weight: bold;
    font-size: 22px;
`

export const Line = styled.div`
    height: 4px;
    background-color: ${props => props.color};
`
