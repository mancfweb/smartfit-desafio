/* eslint-disable import/prefer-default-export */
import { useContext } from 'react'

import { LocationsContext } from '../contexts/LocationsContext'

export function useLocations() {
  const context = useContext(LocationsContext)

  if (!context) {
    throw new Error('useLocations must be used within an LocationsProvider')
  }

  return context
}
