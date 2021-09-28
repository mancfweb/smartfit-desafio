import { renderHook, act } from '@testing-library/react-hooks'

import { mockLocations } from '../../utils/tests/mocks/locations'

import { LocationsProvider } from '.'
import { useLocations } from '../../hooks/useLocations'

describe('<LocationsContext />', () => {
  it('should be build initial data', async () => {
    const { result } = renderHook(() => useLocations(), {
      wrapper: LocationsProvider,
      initialProps: {
        initialData: mockLocations
      }
    })

    expect(result.current.locations.originalData.total).toBe(8)
    expect(result.current.locations.data.total).toBe(8)
  })

  it('should only search for units open in the morning', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLocations(), {
      wrapper: LocationsProvider,
      initialProps: {
        initialData: mockLocations
      }
    })

    act(() => {
      result.current.searchLocations('manha', false)
    })

    await waitForNextUpdate()

    expect(result.current.locations.data.total).toBe(5)
  })

  it('should only search for units open in the afternoon', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLocations(), {
      wrapper: LocationsProvider,
      initialProps: {
        initialData: mockLocations
      }
    })

    act(() => {
      result.current.searchLocations('tarde', false)
    })

    await waitForNextUpdate()

    expect(result.current.locations.data.total).toBe(5)
  })

  it('should only search for units open at night', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLocations(), {
      wrapper: LocationsProvider,
      initialProps: {
        initialData: mockLocations
      }
    })

    act(() => {
      result.current.searchLocations('noite', false)
    })

    await waitForNextUpdate()

    expect(result.current.locations.data.total).toBe(4)
  })

  it('should only search for units open in the afternoon and closed status too', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLocations(), {
      wrapper: LocationsProvider,
      initialProps: {
        initialData: mockLocations
      }
    })

    act(() => {
      result.current.searchLocations('tarde', true)
    })

    await waitForNextUpdate()

    expect(result.current.locations.data.total).toBe(8)
  })
})
