import PropTypes from 'prop-types';

const Button  = ({color, text}) => {
  return(
    <div>

<button style={{ backgroundColor: color}}className='btn'>{text}</button>
    </div>


  )


}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}


Button.defaultProps = {
  color: 'steelblue'
}



export default Button 