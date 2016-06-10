import { Meteor } from 'meteor/meteor';
import React from 'react';

class Dashboard extends React.Component {

  render() {
    if (!Meteor.userId()) {
      return (
        <div>
          NEED TO LOGIN<br/>
          <a href="/login">Back to Login</a>
        </div>
      );
    }

    if (Meteor.userId()) {
      return (
        <div className="dashboardWrapper">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navHeaderCollapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div className="navbar-brand">VidBlog</div>
              </div>

              <div className="collapse navbar-collapse navHeaderCollapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><a data-toggle="tab" href="#newpost"><span className="icon"><i className="fa fa-pencil" aria-hidden="true"></i>&nbsp;<b>New Post</b></span></a></li>
                  <li><a href="#" onClick={this.logout.bind(this)}><span className="icon"><i className="fa fa-power-off" aria-hidden="true"></i>&nbsp;<b>Logout</b></span></a></li>
                </ul>
              </div>

            </div>
          </nav>

          <div className="dashboardContentWrapper">
            <div className="tab-content dashWrap">
              <div id="newpost" className="tab-pane fade in">

                <div className="input-group">
                  <span className="input-group-addon" id="basic-addon1">Video Title</span>
                  <input type="text" className="form-control" ref="vidTitle" placeholder="Enter Title of the Video" aria-describedby="basic-addon1"/>
                </div>
                <br/>
                <div className="form-group">
                  <label for="embedVid">Embed Video:</label>
                  <textarea className="form-control" ref="vidEmbed" id="embedVid"></textarea>
                </div>
                <br/>
                <div className="form-group">
                  <label for="vidDescription">Video Description:</label>
                  <textarea className="form-control" ref="vidDescp" id="vidDescription"></textarea>
                </div>
                <div className="input-group">
                  <span className="input-group-addon" id="sizing-addon2">Tags</span>
                  <input type="text" className="form-control" ref="vidTag" placeholder="Enter video tags" aria-describedby="sizing-addon3"/>
                </div>
                <br/>
                <button type="button" onClick={this.postVideos.bind(this)} className="btn btn-info createPost">Add Post</button>

              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  logout() {
    Meteor.logout();
    FlowRouter.go('/login');
  }

  postVideos() {
    const {newPost} = this.props;
    const {vidTitle, vidEmbed, vidDescp, vidTag} = this.refs;
    newPost(vidTitle.value, vidEmbed.value, vidDescp.value, vidTag.value);
  }
}

export default Dashboard;
