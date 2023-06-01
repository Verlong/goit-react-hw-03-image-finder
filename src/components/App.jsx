import React from 'react';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imagegallery/ImageGallery';
import Modal from './modal/Modal';
// import Button from './button/Button';
// import Loader from './loader/Loader';

//
// import getPic from 'picapi/PicApi';

class App extends React.Component {
  state = {
    inputValue: '',
    modalImg: '',
    showModal: false,
    page: 1,
  };

  getInputValue = handleValue => {
    this.setState({ inputValue: handleValue, page: 1 });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  getLargeImg = url => {
    this.toggleModal();
    this.setState({ modalImg: url });
  };

  loadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { modalImg, showModal, page } = this.state;

    return (
      <>
        <Searchbar getInputValue={this.getInputValue} />
        <ImageGallery
          inputValue={this.state.inputValue}
          onClick={this.getLargeImg}
          loadMoreBtn={this.loadMoreBtn}
          page={page}
        />
        {showModal && <Modal url={modalImg} onClose={this.toggleModal} />}
      </>
    );
  }
}

export default App;
