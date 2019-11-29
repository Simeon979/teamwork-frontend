import React from 'react';
import PropTypes from 'prop-types';

import {
  FormContainer, FormHeader, Form, InputLabel, Input, TextArea, Submit,
} from '../shared/Form';

const ArticleForm = ({
  handleChange, handleSubmit, state, isUpdate,
}) => (
  <FormContainer>
    <FormHeader>New Article</FormHeader>
    <Form data-testid="articleForm" onSubmit={handleSubmit}>
      <InputLabel htmlFor="title">
      Title
        <Input
          data-testid="title"
          id="title"
          type="text"
          placeholder="Title"
          onChange={handleChange}
          value={state.title}
          required
        />
      </InputLabel>

      <InputLabel htmlFor="article">
      Article
        <TextArea
          data-testid="article"
          id="article"
          placeholder="Article"
          onChange={handleChange}
          value={state.article}
          required
        >
          {state.value}
        </TextArea>
      </InputLabel>

      <Submit data-testid="submit-button" type="submit" value={isUpdate ? 'Update' : 'Post'} />
    </Form>
  </FormContainer>
);

ArticleForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  state: PropTypes.objectOf(PropTypes.string).isRequired,
  isUpdate: PropTypes.bool.isRequired,
};

export default ArticleForm;
