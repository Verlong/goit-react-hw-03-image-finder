import { RotatingLines } from 'react-loader-spinner';
import css from '../../styles/styles.module.css';
import PropTypes from 'prop-types';

const Loader = ({ loading }) => {
  return (
    <div className={css.loader}>
      <RotatingLines
        loading={loading}
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
Loader.propTypes = {
  loading: PropTypes.bool,
};

export default Loader;
