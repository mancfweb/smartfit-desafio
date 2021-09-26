import styled, { css } from 'styled-components'

export const Container = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.9rem 2rem;
  border-radius: 6px;

  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.seconday};
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;

  transition: all 0.2s ease-out 0s;

  ${({ $loading }) =>
    $loading &&
    css`
      & > span {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -15px;
        margin-left: -15px;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.85;
    `}

  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    css`
      background: ${theme.colors.yellow};
      color: ${theme.colors.dark};
      border: 0;

      &:hover {
        background: ${theme.colors.darkYellow};
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'outlined' &&
    css`
      background: transparent;
      color: ${theme.colors.dark};
      border: 2px solid ${theme.colors.grey};

      &:hover {
        background: ${theme.colors.lighterGrey};
      }
    `}
`
