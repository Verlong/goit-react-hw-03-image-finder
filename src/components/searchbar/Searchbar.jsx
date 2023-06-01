import React from 'react';
import css from '../../styles/styles.module.css';
// import Notiflix from 'notiflix';
class Searchbar extends React.Component {
  state = {
    input: '',
  };

  search = e => {
    e.preventDefault();
    this.props.getInputValue(this.state.input);
    this.setState({ input: '' });
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.search}>
          <button type="submit" className={css.button}>
            <span className={css.label}>Search</span>
          </button>

          <input
            name="input"
            type="text"
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.input}
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
