/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import {
  makeSelectError,
  makeSelectLoading,
  makeSelectRepos,
} from 'containers/App/selectors';
import { makeSelectAvailable, makeSelectSelected } from './selectors';
import reducer from './reducer';
import saga from './saga';
import PiecesBlock from './PiecesBlock';
import ButtonBlock from './ButtonBlock';
import * as Styled from './styles/styled.';

const key = 'home';

const stateSelector = createStructuredSelector({
  repos: makeSelectRepos(),
  available: makeSelectAvailable(),
  selected: makeSelectSelected(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default function HomePage() {
  const { available } = useSelector(stateSelector);
  const { selected } = useSelector(stateSelector);

  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <Styled.Main>
        <PiecesBlock heading="Available" data={available} />
        <ButtonBlock />
        <PiecesBlock heading="Selected" data={selected} />
      </Styled.Main>
    </article>
  );
}
