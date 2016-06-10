import React from 'react';
import Helmet from 'react-helmet';

class Layout extends React.Component {
  render() {
    const {content,userId} = this.props;

    return (
      <div>
      <Helmet
        title="Mantra App"
        link={
          [ {
            href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
            rel: 'stylesheet',
            type: 'text/css'} ]
        }
        meta={
          [ {name: 'viewport', content: 'width=device-width, initial-scale=1.0'} ]
        }
        script={[
          {"src": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js", "type": "text/javascript"},
        ]}
      />
        <div>

          <div className="container marginTop">
            {content()}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
