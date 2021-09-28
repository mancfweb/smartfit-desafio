export const schedules = {
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

export const getCurrentDay = () => {
  const day = new Date().getDay

  if (day === 0) return 'sunday'

  if (day === 6) return 'saturday'

  return 'weekday'
}

export const getWeekDay = (value) => {
  if (value === 'Seg. à Sex.' || value === 'Seg. às Sex.') return 'weekday'

  if (value === 'Sáb.') return 'saturday'

  return 'sunday'
}

export const generateSlotTimes = (start, end) => {
  let initialHour = start
  const hours = []

  while (initialHour <= end) {
    hours.push(initialHour)
    // eslint-disable-next-line no-plusplus
    initialHour++
  }

  return hours
}
