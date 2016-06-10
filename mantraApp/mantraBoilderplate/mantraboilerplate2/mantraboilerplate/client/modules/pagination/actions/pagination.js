export default {
  setTotalPages({LocalState}, numOfItems) {
    Meteor.call('getTotalPage', function(err, result) {
      if(err) {
        return LocalState.set('ERR_FETCHING_TOTAL_PAGES', 'Unable to get total pages. Check the function totalPages()');
      }
      return LocalState.set('TOTAL_PAGES', Math.floor(result/numOfItems));
    });
  },

  setCurrentPageNext({LocalState}) {
    let currentPage = 1;

    if(LocalState.get('CURRENT_PAGE')) {
      currentPage = LocalState.get('CURRENT_PAGE') + 1;
    }

    LocalState.set('CURRENT_PAGE', currentPage);

    return currentPage;
  },

  setCurrentPagePrev({LocalState}) {
    let currentPage = 1;

    if(LocalState.get('CURRENT_PAGE')) {
      currentPage = LocalState.get('CURRENT_PAGE') - 1;
    }

    LocalState.set('CURRENT_PAGE', currentPage);

    return currentPage;
  },
}
