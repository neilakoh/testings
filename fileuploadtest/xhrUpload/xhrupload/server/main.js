import { Meteor } from 'meteor/meteor';
import fs from 'fs';

Meteor.startup(() => {

});

WebApp.connectHandlers.use('/uploadSomeWhere',function(req,res){

  // function makeid()
  // {
  //     var text = "";
  //     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //
  //     for( var i=0; i < 10; i++ )
  //         text += possible.charAt(Math.floor(Math.random() * possible.length));
  //
  //     return text;
  // }
  //
  // var file = fs.createWriteStream('/home/neil/data/'+makeid());
  //
  // file.on('error',function(error){});
  // file.on('finish',function(){
  //     res.writeHead();
  //     res.end();
  // });
  //
  // req.pipe(file);

});
