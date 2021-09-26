import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 1.5rem;

  border: 3px solid ${({ theme }) => theme.colors.lighterGrey};
  border-bottom-width: 5px;
  border-radius: 6px;

  h4 {
    display: flex;
    align-items: center;
    height: 35px;
    margin: 0 0 2rem 0;
    padding-left: 45px;

    font-weight: 300;
    color: ${({ theme }) => theme.colors.lightGrey};

    background: transparent url(assets/images/icon-hour.png) 0 0 no-repeat;
    background-size: contain;
  }
`
export const Form = styled.form`
  h2 {
    margin: 0 0 0.5rem 0;
    padding: 0 0 1rem 0.5rem;

    font-weight: 300;
    color: ${({ theme }) => theme.colors.lightGrey};

    border-bottom: 1px solid ${({ theme }) => theme.colors.lighterGrey};
  }

  .options {
    li {
      display: flex;
      align-items: center;

      width: 100%;
      padding: 1rem 0.1rem;

      border-bottom: 1px solid ${({ theme }) => theme.colors.lighterGrey};

      label {
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: space-between;

        margin-left: 0.75rem;

        color: ${({ theme }) => theme.colors.lightGrey};
      }
    }
  }

  .closed-results {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 1.8rem 0 0.5rem 0;

    .checkbox-wrapper {
      display: flex;
      align-items: center;

      margin-bottom: 0.5rem;

      label {
        margin-left: 0.75rem;
      }
    }

    p {
      strong {
        font-family: ${({ theme }) => theme.fonts.secondary};
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
  }

  .actions {
    display: flex;
    flex-direction: column;

    button {
      width: 100%;
      max-width: 28rem;
      margin: 0.75rem 0;
    }
  }

  input[type='radio'] {
    appearance: none;

    width: 23px;
    height: 23px;
    margin: 0;

    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 50%;

    &:focus,
    &:checked {
      outline: 2px solid ${({ theme }) => theme.colors.yellow};
      border-color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.yellow};
    }
  }

  input[type='checkbox'] {
    appearance: none;

    width: 23px;
    height: 23px;
    margin: 0;

    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 4px;

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.yellow};
      border-color: ${({ theme }) => theme.colors.white};
    }

    &:checked {
      outline: 2px solid ${({ theme }) => theme.colors.yellow};
      border-color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.yellow};
      background-image: url(assets/images/checked.svg);
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  @media ${(props) => props.theme.breakPoints.medium} {
    .closed-results {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      padding: 1.2rem 0.1rem;

      .checkbox-wrapper {
        margin-bottom: 0;
      }
    }

    .actions {
      flex-direction: row;
      justify-content: center;

      button {
        margin: 0.25rem 0.675rem;
      }
    }
  }
`
