import styled from 'styled-components'

export const Container = styled.section`
  padding: 4.85rem 0 3.45rem 0;

  h1 {
    position: relative;
    margin: 0 0 3rem 0;

    font-weight: bold;
    font-size: 2.8rem;
    line-height: 3.1rem;

    text-transform: uppercase;

    &::after {
      content: '';

      display: flex;
      width: 9rem;
      height: 0.85rem;
      margin: 1.4rem 0 0 0;

      background: ${({ theme }) => theme.colors.dark};
    }
  }

  @media ${(props) => props.theme.breakPoints.large} {
    padding: 5.125rem 0 3.8rem 0;

    h1 {
      margin: 0 0 4rem 0;

      font-size: 3.5rem;
      line-height: 3.8rem;

      &::after {
        margin: 1.812rem 0 0 0;
      }
    }

    p {
      padding-right: 2rem;
    }
  }
`
