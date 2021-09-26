import PropTypes from 'prop-types'

const Logo = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 146 54"
    xmlSpace="preserve"
  >
    <g>
      <path
        fill="#FCB823"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M95,38.5V10.7c0-9.5,9.9-11.5,17-8.8v5.3c-4.9-2-10.4-1.5-10.4,4.6h7.9v5.3h-7.9v21.3L95,38.5z"
      />
      <path
        fill="#FCB823"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M126.5,7.7h4.9l1,4.1h6.1v5.3h-5.4v12.3c0,2.5,1.1,3.7,3.2,3.7h3.4v5.3h-6.6c-4.4,0-6.7-2.4-6.7-7.1V7.7z"
      />
      <rect
        x="114.7"
        y="11.8"
        fill="#FCB823"
        fillRule="evenodd"
        clipRule="evenodd"
        width="6.7"
        height="26.6"
      />
      <rect
        x="114.7"
        y="2.2"
        fill="#FCB823"
        fillRule="evenodd"
        clipRule="evenodd"
        width="6.7"
        height="5.5"
      />
      <path
        fill="#FCB823"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M145.4,38.4c-5.9,9.3-16.2,15.4-28,15.4c-11.8,0-22.1-6.1-28-15.4c6.9,6.4,16.9,10.3,28,10.3
		C128.5,48.8,138.5,44.8,145.4,38.4"
      />
      <path
        fill="#FFFFFF"
        d="M0.8,32.3v-3.6c1.9,0.8,4.2,1.2,6.7,1.2c1.9,0,2.8-0.6,2.8-1.8c0-1.1-0.6-1.7-1.9-1.7H5.3
		c-3.5,0-5.3-1.8-5.3-5.3c0-3.6,2.6-5.4,7.7-5.4c2.2,0,4.2,0.3,6.2,1v3.6c-1.9-0.8-4-1.2-6.3-1.2c-2.4,0-3.5,0.6-3.5,1.8
		c0,1.1,0.7,1.7,2.1,1.7h2.8c3.8,0,5.8,1.8,5.8,5.3c0,3.6-2.5,5.4-7.4,5.4C4.9,33.3,2.8,32.9,0.8,32.3 M17.7,33.1V15.8h3.4l0.5,2.2
		c2-1.5,4-2.2,5.9-2.2c2.2,0,3.7,0.8,4.6,2.4c2.2-1.6,4.3-2.4,6.2-2.4c3.7,0,5.5,2.2,5.5,6.6v10.7h-4.4V22.2c0-1.9-0.8-2.9-2.4-2.9
		c-1.3,0-2.7,0.7-4.1,2.2v11.6h-4.4V22.2c0-2-0.8-2.9-2.4-2.9c-1.4,0-2.8,0.7-4.1,2.2v11.6H17.7z M47.1,27.7c0-3.6,2.5-5.3,7.5-5.3
		c1.5,0,2.9,0.1,4,0.3v-1.1c0-1.5-1.5-2.3-4.5-2.3c-1.9,0-3.8,0.3-5.6,0.8v-3.5c1.9-0.5,3.8-0.8,5.6-0.8c5.9,0,8.9,1.9,8.9,5.7v11.6
		h-2.2l-1.9-1.2c-1.5,0.8-3.1,1.2-4.8,1.2C49.4,33.1,47.1,31.3,47.1,27.7z M58.6,26c-1.1-0.2-2.4-0.3-4-0.3c-2.1,0-3.2,0.7-3.2,2
		c0,1.3,0.9,2,2.6,2c1.8,0,3.3-0.5,4.5-1.4V26z M67.3,33.1V15.8h3.4l0.5,2.2c1.5-1.5,3.1-2.2,4.8-2.2v3.5c-1.6,0-3.1,0.7-4.4,2.2
		v11.6H67.3z M78.7,13h3.2l0.7,2.8h4v3.5h-3.5v8c0,1.6,0.7,2.4,2.1,2.4h1.4v3.5h-3.6c-2.9,0-4.4-1.6-4.4-4.7V13z"
      />
    </g>
  </svg>
)

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
}

Logo.defaultProps = {
  width: '100%',
  height: '100%'
}

export default Logo