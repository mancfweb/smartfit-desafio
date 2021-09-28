import * as S from './styles'

const Loading = () => (
  <S.Container data-testid="loading-element">
    <svg className="spinner" viewBox="22 22 44 44">
      <circle
        className="circle"
        cx="44"
        cy="44"
        r="20.2"
        fill="none"
        strokeWidth="3.6"
      />
    </svg>
  </S.Container>
)

export default Loading
