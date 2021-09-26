import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 0.375rem;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`

export const Icon = styled.span`
  display: flex;
  width: 65px;
  height: 65px;

  background-color: transparent;
  background-image: url(${({ $item, $type }) =>
    `/assets/images/${$type}-${$item}.png`});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;

  @media ${(props) => props.theme.breakPoints.small} {
    width: 80px;
    height: 80px;
  }
`
