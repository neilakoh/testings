import {UploadImg} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import file from 'file-system';
import fs from 'fs';

export default function () {
  Meteor.methods({
    'uploadImage'(data, dest) {
      file.copyFile(dest, '/home/neil/uploads/'+data, {
        done: function(err) {
          console.log('done');
        }
      });
    },
  });

  WebApp.connectHandlers.use('/uploadSomeWhere',function(req,res){
    function makeid()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 10; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    var file2 = fs.createWriteStream('/home/neil/uploads/'+makeid());

    file2.on('error',function(error){if(error){console.log(error);}});
    file2.on('finish',function(){
        res.writeHead(200, {"content-type":"text/html"});
        res.end();
    });

    req.pipe(file2);
    req._events.close;
  });
}
