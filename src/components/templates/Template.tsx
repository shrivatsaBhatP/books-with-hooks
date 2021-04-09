import React, { lazy, Suspense } from 'react';
import Header from '../organisms/Header';
const Search = lazy(() => import('../organisms/Search'));
const Welcome = lazy(() => import('../organisms/Welcome'));
import Loader from '../atoms/Loader';

interface TemplatePRops {
  body: 'welcome' | 'search';
}
const Template: React.FC<TemplatePRops> = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Suspense fallback={<Loader />}>
        {{ welcome: <Welcome />, search: <Search /> }[props.body]}
      </Suspense>
    </React.Fragment>
  );
};

export default Template;
