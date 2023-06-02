import React from 'react';
import css from '../../styles/styles.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/imagegalleryitem/ImageGalleryItem';
import getImages from 'picapi/PicApi';
import { PER_PAGE } from 'picapi/PicApi';
import Loader from 'components/loader/Loader';
import Button from 'components/button/Button';
import Notiflix from 'notiflix';

class ImageGallery extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
  };

  state = {
    images: [],
    status: 'idle',
    totalPages: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.inputValue !== this.props.inputValue) {
      this.fetchLoad();
    }
    if (prevProps.page !== this.props.page && this.props.page > 1) {
      this.fetchLoadMore();
    }
  }

  fetchLoad = () => {
    const { inputValue, page } = this.props;

    getImages(inputValue, page)
      .then(response => {
        const totalPages = Math.ceil(response.totalHits / PER_PAGE);
        const shouldShowLoadMore = totalPages > 1;

        this.setState({
          images: response.hits,
          status: 'resolve',
          totalPages: totalPages,
          shouldShowLoadMore: shouldShowLoadMore,
        });
      })
      .catch(error => this.setState({ status: 'rejected' }));
  };

  fetchLoadMore = () => {
    const { inputValue, page } = this.props;

    getImages(inputValue, page)
      .then(response => {
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          status: 'resolve',
        }));
      })
      .catch(error => this.setState({ status: 'rejected' }));
  };

  render() {
    const { images, status, shouldShowLoadMore } = this.state;

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolve') {
      return (
        <div className={css.galleryWrapper}>
          <ul className={css.gallery}>
            {images.map(({ id, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                url={largeImageURL}
                tags={tags}
                onClick={this.props.onClick}
              />
            ))}
          </ul>
          {shouldShowLoadMore &&
            (this.props.page < this.state.totalPages ? (
              <Button onClick={this.props.loadMoreBtn} />
            ) : (
              Notiflix.Notify.failure('No more results')
            ))}
          {images.length === 0 && Notiflix.Notify.failure('No results')}
        </div>
      );
    }

    return null;
  }
}

export default ImageGallery;
