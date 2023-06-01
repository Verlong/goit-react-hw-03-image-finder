import React from 'react';
import { createPortal } from 'react-dom';
import css from '../../styles/styles.module.css';
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

class Modal extends React.Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.clickEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickEsc);
  }

  clickBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  clickEsc = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.clickBackdrop}>
        <div className={css.modal}>
          <img src={this.props.url} alt={this.props.tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
