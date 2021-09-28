import { render } from '../../utils/tests'

import Legend from '.'

const setup = (props) => render(<Legend {...props} />)

describe('<Legend />', () => {
  it('should be render correctly icon and label', () => {
    const { getByTestId, getByText } = setup({ item: 'mask', type: 'required' })

    expect(getByTestId('icon-mask-required')).toBeInTheDocument()
    expect(getByText(/Obrigatório/i)).toBeInTheDocument()
  })

  it('should be render icon without a label', () => {
    const { getByTestId, queryByText } = setup({
      item: 'mask',
      type: 'required',
      showLabel: false
    })

    expect(getByTestId('icon-mask-required')).toBeInTheDocument()
    expect(queryByText(/Obrigatório/i)).not.toBeInTheDocument()
  })
})
