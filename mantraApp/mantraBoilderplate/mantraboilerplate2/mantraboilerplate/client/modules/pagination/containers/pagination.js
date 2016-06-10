import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Pagination, {Pages} from '../components/pagination.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const totalPagesErr = LocalState.get('ERR_FETCHING_TOTAL_PAGES');
  const totalPages = LocalState.get('TOTAL_PAGES');
  const currentPage = typeof(LocalState.get('CURRENT_PAGE')) === 'undefined' ? 1 : LocalState.get('CURRENT_PAGE');
  const nextPageLimit =  currentPage*10;
  const previousPageLimit = nextPageLimit < 1 ? 1 : nextPageLimit-10;
  const loading = 'http://localhost:3000/images/Loading1.gif';
  if(Meteor.subscribe('paginationList', nextPageLimit, previousPageLimit).ready()){
    const pageList = Meteor.users.find({}, {skip: previousPageLimit, limit: nextPageLimit, sort: {createdAt: -1}}).fetch();
    onData(null, {
      pageList,
      totalPages,
      totalPagesErr,
      currentPage,
      previousPageLimit,
      nextPageLimit,
    });
  } else {
    onData(null, {
      loading,
    });
  }
};

export const depsMapper = (context, actions) => ({
  setTotalPages: actions.pagination.setTotalPages,
  setCurrentPageNext: actions.pagination.setCurrentPageNext,
  setCurrentPagePrev: actions.pagination.setCurrentPagePrev,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Pagination, Pages);
