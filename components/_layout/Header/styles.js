import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 2.5rem 0;

  background: ${({ theme }) => theme.colors.dark};
`

export const LogoContent = styled.div`
  width: 233px;
  height: 87px;

  @media ${(props) => props.theme.breakPoints.large} {
    width: 273px;
    height: 102px;
  }
`
