import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Feed from './Feed/Feed';
import Nav from './Nav';
import ArticleUpdateWithHistory from './Article/ArticleUpdate';
import ArticleEditWithHistory from './Article/ArticleEdit';
import Article from './Article/Article';


const Main = ({ notify }) => (
  <>
    <Nav />
    <main>
      <Switch>
        <Route path="/feed" component={Feed} />
        <Route path="/articles/new" render={() => <ArticleEditWithHistory notify={notify} />} />
        <Route path="/articles/:articleId" render={({ match }) => <Article articleId={+match.params.articleId} notify={notify} />} />
        <Route path="/articles/:articleId/edit" render={({ match }) => <ArticleUpdateWithHistory articleId={+match.params.articleId} notify={notify} />} />
      </Switch>
    </main>
  </>
);

Main.propTypes = {
  notify: PropTypes.func.isRequired,
};

export default Main;
