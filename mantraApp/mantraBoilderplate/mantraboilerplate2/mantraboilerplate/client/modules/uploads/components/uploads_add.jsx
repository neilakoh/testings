import React from 'react';

class Upload extends React.Component {
  render () {
    return (
      <div ref='filepkr' onChange={this.getFileInfo2.bind(this)} onClick={this.clearFile.bind(this)}>
        <FilePicker />
        <FileTransferProgress />
      </div>
    );
  }

  getFileInfo () {
    var dest = document.getElementById('filePicker').value;
    const {upload} = this.props;
    const file = this.refs.filepkr.children[0].lastChild.files[0];
    upload(file.name, dest);
  }

  getFileInfo2 () {
    const display = document.getElementById('display');
    const bootstrapPB = document.getElementById('progressbar');
    const file = this.refs.filepkr.children[0].lastChild.files[0];

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/uploadSomeWhere', true);

    if (xhr.upload) {
      xhr.upload.onprogress = function(e) {
        if (e.lengthComputable) {
          display.innerText = Math.floor((e.loaded / e.total) * 100) + '%';
          bootstrapPB.style.width = Math.floor((e.loaded / e.total) * 100) + '%';
          console.log(e.loaded+  " / " + e.total)
        }
      }
      xhr.upload.onloadstart = function() {
        display.innerText = '0%';
        bootstrapPB.style.width = '0%';
      }
    }
    xhr.send(file);
  }

  clearFile() {
    document.getElementById('progressbar').style.width = '0%';
  }
}

const FilePicker = () => (
  <div>
    <input id='filePicker' className='form-control' name='filePicker' type='file' accept='image/*;capture=camera' />
  </div>
);

const FileTransferProgress = () => (
  <div>
    <div className="progress">
      <div className="progress-bar" id='progressbar' role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><span id='display'></span></div>
    </div>
  </div>
);

export default Upload;
