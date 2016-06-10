import React from 'react';

class Pagination extends React.Component {
  render () {
    const {pageList, loading} = this.props;
    console.log(this.props);
    return (
      <div>
        {pageList ? pageList.map( (users) => (
          <div key={users._id}>
            <div>{users.profilename}</div>
          </div>
        )) : <img src={loading} height="100" width="100" />}
        <Pages props={this.props}/>
      </div>
    );
  }
}

export class Pages extends React.Component {
  render () {
    const {props} = this.props;
    props.setTotalPages(10);
    return (
      <div>
        <button className='btn btn-info' onClick={this.previousPage.bind(this)}>Previous</button> {props.currentPage}/{props.totalPages} <button className='btn btn-info' onClick={this.nextPage.bind(this)}>Next</button>
      </div>
    );
  }

  nextPage() {
    const {props} = this.props;

    props.setCurrentPageNext();
    //console.log('next');
  }

  previousPage() {
    const {props} = this.props;

    props.setCurrentPagePrev();
  }
}

export default Pagination;
