import PropTypes from 'prop-types';

const Link = ({ route }) => {
  return (
    <li className="mr-4 hover:bg-rose-600 px-6 rounded-xl hover:text-white hover:font-bold">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};


Link.propTypes = {
    route: PropTypes.object
}

export default Link;
