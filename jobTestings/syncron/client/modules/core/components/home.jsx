import React from 'react';

class Home extends React.Component {
  render() {
    const { jobs, testing } = this.props;
    testing(this.props.observe);
    return (
      <div>
        <h1>Cron Job Sample</h1>
        <p>
          Welcome to Mantra 0.2.0.
        </p>
        <ul>
          <li>
            Job Name: <br/>
            <input type="text" id="jobName" ref="jobName"/><br/><br/>
            Job Execution Time: <br/>
            <input type="text" id="jobSchedule" ref="jobSchedule"/><br/><br/>
            <button id="addJob" onClick={this.addJob.bind(this)}>Add Job</button>
            <br/>
          </li>
          <hr/>
          JOBS:
          <hr/>
          <div>
            {jobs ? jobs.map( (job) => (
              <div key={job._id}>
                <div>{job.name} <button id={job._id} ref="button" value={job._id}  onClick={this.startJob.bind(this)}>Start Job</button><button id="stopJob" >Stop Job</button></div>
              </div>
            )) : 'no job yet'}
          </div>
          <hr/>
          <div id="logs"></div>
        </ul>
      </div>
    );
  }

  addJob() {
    const {addJob} = this.props;
    const {jobName, jobSchedule} = this.refs;
    addJob(jobName.value, jobSchedule.value);
    jobName.value = "";
    jobSchedule.value = "";
  }

  startJob(e) {
    const {startJob} = this.props;
    const {button} = this.refs;
    // console.log(e.currentTarget.id);
    startJob(e.currentTarget.id);
  }

  stopJob() {
    const {stopJob} = this.props;
    stopJob();
  }
}

export default Home;
