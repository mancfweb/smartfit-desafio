/* eslint-disable radix */
import { createContext, useCallback, useState } from 'react'
import PropTypes from 'prop-types'

const schedules = {
  manha: {
    min: 6,
    max: 12
  },
  tarde: {
    min: 12,
    max: 18
  },
  noite: {
    min: 18,
    max: 23
  }
}

export const LocationsContext = createContext({})

export function LocationsProvider({ children }) {
  const [locations, setLocations] = useState({
    loading: true,
    scrollTo: false,
    originalData: [],
    data: {
      current_country_id: 1,
      locations: [],
      wp_total: 0,
      total: 0,
      success: false
    }
  })

  const buildInitialData = useCallback((data) => {
    // create a schedule range
    const locationsList = data.locations.map((location) => {
      // get only opened hours
      const schedulesList = location.schedules
        .filter((s) => s.hour !== 'Fechada')
        // create a new array with only hours values
        .reduce((previousValue, currentValue) => {
          const hours = currentValue.hour
            // split hour string to get opening and closing time from each
            .split('às')
            // remove blank spaces, replace 'h' from nothing and convert to int
            .map((h) => parseInt(h.trim().replace('h', '')))
          previousValue.push(hours)

          return previousValue
        }, [])
        // flat arrays to unique array
        .flat()

      // take the first hours of operation
      const min = Math.min(...schedulesList)
      // take the last hours of operation
      const max = Math.max(...schedulesList)

      return { ...location, opened_range: { min, max } }
    })

    // initial filter, get only opened locations
    const openedLocations = locationsList.filter((l) => l.opened)

    setLocations({
      loading: false,
      originalData: { ...data, locations: locationsList },
      data: {
        ...data,
        locations: openedLocations,
        wp_total: openedLocations.length,
        total: openedLocations.length
      }
    })
  }, [])

  const doSearch = useCallback(
    (schedule = '', showCloseds = false) => {
      let result = locations.originalData.locations

      if (!showCloseds) result = result.filter((loc) => loc.opened)

      if (schedule) {
        const scheduleRange = schedules[schedule]

        // se o minimo do horario desejado for maior ou igual ao minimo do horario de funcionamento
        // e
        // se o minimo do horario desejado for menor que o maximo do horario de funcionamento
        result = result.filter(
          (loc) =>
            scheduleRange.min >= loc.opened_range.min &&
            scheduleRange.min < loc.opened_range.max
        )
      }

      return result
    },
    [locations.originalData]
  )

  const previewSearchLocations = useCallback(
    async (schedule = '', showCloseds = false) => {
      const result = await doSearch(schedule, showCloseds)

      setLocations((prev) => ({
        ...prev,
        loading: false,
        data: {
          ...prev.data,
          wp_total: result.length,
          total: result.length
        }
      }))
    },
    [doSearch]
  )

  const searchLocations = useCallback(
    async (schedule = '', showCloseds = false) => {
      setLocations((prev) => ({ ...prev, loading: true, scrollTo: false }))

      const result = await doSearch(schedule, showCloseds)

      setTimeout(() => {
        setLocations((prev) => ({
          ...prev,
          loading: false,
          scrollTo: true,
          data: {
            current_country_id: 1,
            locations: result,
            wp_total: result.length,
            total: result.length,
            success: true
          }
        }))
      }, 500)
    },
    [doSearch]
  )

  return (
    <LocationsContext.Provider
      value={{
        locations,
        searchLocations,
        previewSearchLocations,
        buildInitialData
      }}
    >
      {children}
    </LocationsContext.Provider>
  )
}

LocationsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.elementType
  ]).isRequired
}
