import styled from 'styled-components'

export const List = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1.5rem;
  row-gap: 2rem;

  @media ${(props) => props.theme.breakPoints.medium} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakPoints.xlarge} {
    grid-template-columns: repeat(3, 1fr);
  }
`
