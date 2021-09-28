import { render } from '../../utils/tests'
import { mockLocations } from '../../utils/tests/mocks/locations'

import UnitsList from '.'

let mockLocationData = mockLocations

jest.mock('../../hooks/useLocations', () => ({
  useLocations: () => ({
    previewSearchLocations: jest.fn(),
    searchLocations: jest.fn(),
    locations: {
      data: mockLocationData,
      loading: false
    }
  })
}))

const setup = () => render(<UnitsList />)

describe('<UnitsList />', () => {
  it('should be renders list correctly', () => {
    const { getByText } = setup()

    mockLocations.locations.forEach((item) => {
      expect(getByText(item.title)).toBeInTheDocument()
    })
  })

  it('should be renders empty list message', () => {
    mockLocationData = { ...mockLocations, total: 0, locations: [] }

    const { getByText } = setup()

    expect(getByText(/Nenhuma unidade encontrada/i)).toBeInTheDocument()
  })
})
