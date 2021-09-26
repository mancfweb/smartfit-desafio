import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 3rem 0;
  margin-top: 3rem;

  background: ${({ theme }) => theme.colors.darkGrey};

  p {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.white};
  }
`

export const LogoContent = styled.div`
  width: 188px;
  height: 64px;

  @media ${(props) => props.theme.breakPoints.large} {
    width: 212px;
    height: 67px;
  }
`
