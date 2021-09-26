import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 3rem 0;
  padding: 1.5rem 1rem;

  background-color: ${({ theme }) => theme.colors.whiteSmoke};

  @media ${(props) => props.theme.breakPoints.medium} {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  @media ${(props) => props.theme.breakPoints.xlarge} {
    justify-content: space-between;
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;

  h4 {
    margin: 0 0 0.5rem 0;
  }

  .options-list {
    display: flex;

    li {
      margin: 0 0.5rem;
    }
  }

  @media ${(props) => props.theme.breakPoints.medium} {
    maxwidth: 50%;
  }

  @media ${(props) => props.theme.breakPoints.large} {
    padding: 0 0.5rem;

    h4 {
      margin: 0 0 1rem 0;
    }

    .options-list {
      li {
        margin: 0 0.5rem;
      }
    }
  }
`
