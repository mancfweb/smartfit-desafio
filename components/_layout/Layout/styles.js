import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1140px;

  @media ${(props) => props.theme.breakPoints.xxlarge} {
    max-width: 1320px;
  }
`
