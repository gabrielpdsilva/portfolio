import styled from 'styled-components'

export const Text = styled.span`
    color: #313131;
    font-weight: bold;
    font-size: 22px;
    text-decoration: underline;
    text-decoration-color: ${props => props.lineColor};
    min-width: 134px;
`
