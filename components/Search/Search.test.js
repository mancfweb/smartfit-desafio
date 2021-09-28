import userEvent from '@testing-library/user-event'
import { render, waitFor } from '../../utils/tests'
import { mockLocations } from '../../utils/tests/mocks/locations'

import Search, { schedulesOptions } from '.'

const mockSearchLocations = jest.fn()
const mockPreviewSearchLocations = jest.fn()

jest.mock('../../hooks/useLocations', () => ({
  useLocations: () => ({
    previewSearchLocations: mockPreviewSearchLocations,
    searchLocations: mockSearchLocations,
    locations: {
      data: mockLocations,
      loading: false
    }
  })
}))

const setup = () => render(<Search />)

describe('<Search />', () => {
  it('should be renders all the inputs radio', () => {
    const { getByDisplayValue } = setup()

    schedulesOptions.forEach((option) => {
      const inputRadio = getByDisplayValue(option.value)

      expect(inputRadio).toBeInTheDocument()
    })
  })

  it('should be renders the checkbox', () => {
    const { getByRole } = setup()

    const checkbox = getByRole('checkbox', {
      name: /Exibir unidades fechadas/i
    })

    expect(checkbox).toBeInTheDocument()
  })

  it('should be do a preview search', async () => {
    const { getByRole, getByDisplayValue } = setup()

    const checkbox = getByRole('checkbox', {
      name: /Exibir unidades fechadas/i
    })
    const inputRadio = getByDisplayValue(schedulesOptions[1].value)

    userEvent.click(checkbox)
    userEvent.click(inputRadio)

    await waitFor(() => {
      expect(mockPreviewSearchLocations).toHaveBeenCalledTimes(2)
    })
  })

  it('should be able to do a search', async () => {
    const { getByRole } = setup()

    const submitButton = getByRole('button', { name: /Encontrar Unidade/i })

    expect(submitButton).not.toBeDisabled()

    userEvent.click(submitButton)

    await waitFor(() => {
      expect(mockSearchLocations).toHaveBeenCalledTimes(1)
    })
  })

  it('reset button should be call preview search', async () => {
    const { getByRole } = setup()

    const resetButton = getByRole('button', { name: /Limpar/i })

    userEvent.click(resetButton)

    await waitFor(() => {
      expect(mockPreviewSearchLocations).toHaveBeenCalled()
    })
  })
})
