import PropTypes from 'prop-types'

export const LocationsShape = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
  mask: PropTypes.oneOf(['required', 'recommended']).isRequired,
  towel: PropTypes.oneOf(['required', 'recommended']).isRequired,
  fountain: PropTypes.oneOf(['partial', 'not_allowed']).isRequired,
  locker_room: PropTypes.oneOf(['allowed', 'partial', 'closed']).isRequired,
  schedules: PropTypes.arrayOf(
    PropTypes.shape({
      weekdays: PropTypes.string.isRequired,
      hour: PropTypes.string.isRequired
    })
  )
}

export const LocationsSearchShape = {
  current_country_id: PropTypes.number.isRequired,
  locations: PropTypes.arrayOf(PropTypes.shape(LocationsShape)),
  wp_total: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  success: PropTypes.bool.isRequired
}
