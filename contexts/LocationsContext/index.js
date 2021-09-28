/* eslint-disable radix */
import { createContext, useCallback, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { LocationsSearchShape } from '../../utils/shapes/locations'
import {
  schedules,
  getCurrentDay,
  getWeekDay,
  generateSlotTimes
} from '../../utils/search'

const hasAvailability = (availability, scheduleRange) => {
  const availabilityToday = availability.find(
    (item) => item.day === getCurrentDay()
  )

  if (!availabilityToday) return false

  return availabilityToday.hours.some(
    (h) => h >= scheduleRange.min && h < scheduleRange.max
  )
}

export const LocationsContext = createContext({})
export function LocationsProvider({ initialData, children }) {
  const [locations, setLocations] = useState({
    loading: true,
    scrollTo: false,
    originalData: {},
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
    const locationsList = data.locations
      .filter((l) => l.schedules)
      .map((location) => {
        // get only opened hours
        const schedulesList = location.schedules
          // remove closed hours
          .filter((s) => s.hour !== 'Fechada' && s.weekdays !== 'Obs.:')
          // create a new array with only hours values
          .reduce((previousValue, currentValue) => {
            const hours = currentValue.hour
              // split hour string to get opening and closing time from each
              .split('às')
              // remove blank spaces, replace 'h' from nothing and convert to int
              .map((h) => parseInt(h.trim().replace('h', '').slice(0, 2)))

            const availability = {
              // check if weekday or weekly
              day: getWeekDay(currentValue.weekdays),
              // build times interval
              hours: generateSlotTimes(hours[0], hours[1])
            }

            previousValue.push(availability)
            return previousValue
          }, [])

        const weekdayHors = schedulesList
          .filter((item) => item.day === 'weekday')
          .reduce((prev, curr) => prev.concat(curr.hours), [])

        const availability = [
          ...schedulesList.filter((item) => item.day !== 'weekday'),
          {
            day: 'weekday',
            hours: weekdayHors
          }
        ]

        return { ...location, availability }
      })

    setLocations((prevData) => ({
      loading: false,
      originalData: { ...data, locations: locationsList },
      data: {
        ...prevData.data,
        wp_total: locationsList.length,
        total: locationsList.length
      }
    }))
  }, [])

  const doSearch = useCallback(
    (schedule = '', showCloseds = false) => {
      let result = locations.originalData.locations

      if (schedule) {
        const scheduleRange = schedules[schedule]

        if (showCloseds) {
          result = locations.originalData.locations.map((loc) => {
            if (
              hasAvailability(loc.availability, scheduleRange) &&
              loc.opened
            ) {
              return { ...loc, available: true }
            }

            return { ...loc, available: false }
          })
        } else {
          result = result.filter((loc) =>
            hasAvailability(loc.availability, scheduleRange)
          )
        }
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

  const cleanSearch = useCallback(() => {
    setLocations((prev) => ({
      ...prev,
      loading: false,
      data: {
        ...prev.originalData,
        locations: []
      }
    }))
  }, [])

  useEffect(() => {
    if (initialData) buildInitialData(initialData)
  }, [initialData, buildInitialData])

  return (
    <LocationsContext.Provider
      value={{
        locations,
        searchLocations,
        previewSearchLocations,
        cleanSearch
      }}
    >
      {children}
    </LocationsContext.Provider>
  )
}

LocationsProvider.propTypes = {
  initialData: PropTypes.shape(LocationsSearchShape).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.elementType
  ]).isRequired
}
