import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 480px;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.whiteSmoke};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.mediumDarkGrey};

  box-shadow: 0px 0px 7px rgb(0 0 0 / 18%);

  h3 {
    margin: 0.875rem 0 0.5rem 0;

    font-size: 1.4rem;
    font-weight: bold;
  }

  .address {
    p {
      margin: 0;
      font-family: ${({ theme }) => theme.fonts.secondary};
      font-weight: 300;
      color: ${({ theme }) => theme.colors.lightGrey};
    }
  }

  hr {
    display: inline-block;

    width: 100%;
    height: 1px;
    margin: 1rem 0;

    border: 0;
    background-color: ${({ theme }) => theme.colors.mediumGrey};
  }

  .options-list {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-bottom: 1rem;

    li {
      display: flex;
      padding: 0.3rem;
    }
  }

  .schedules-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;

    li {
      flex: 0 0 auto;
      width: 50%;
      padding-right: 0.5rem;
      margin-bottom: 1.5rem;

      p {
        margin: 0;
      }

      .days {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 0.275rem;
      }
    }
  }
`

export const Status = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: bold;
  color: ${({ theme, $opened }) =>
    $opened ? theme.colors.green : theme.colors.red};
`
