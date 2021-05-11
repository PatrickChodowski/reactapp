import PropTypes from 'prop-types';
import Button from './Button';


const Header = (props) => {
  return (
    <header className='header'>
      <h1> {props.title} </h1>
      <Button text="add" color="red"/>
      <Button text="add"/>
    </header>
  )
}


Header.defaultProps = {
  title: "Organizer",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header