import React from 'react';
import PropTypes from 'prop-types';

const ArticleForm = ({ handleChange, handleSubmit, state }) => (
  <form data-testid="articleForm" onSubmit={handleSubmit}>
    <label htmlFor="title">
      Title
      <input
        data-testid="title"
        id="title"
        type="text"
        placeholder="Title"
        onChange={handleChange}
        value={state.title}
        required
      />
    </label>

    <label htmlFor="article">
      Article
      <textarea
        data-testid="article"
        id="article"
        placeholder="Article"
        onChange={handleChange}
        required
      >
        {state.value}
      </textarea>
    </label>

    <input data-testid="submit-button" type="submit" value="Post" />
  </form>
);

ArticleForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  state: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ArticleForm;
