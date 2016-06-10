import {createApp} from 'mantra-core';
import initContext from './configs/context';
import {DocHead} from 'meteor/kadira:dochead';
import login from './modules/core/components/login';
import dashboard from './modules/core/components/dashboard';

// modules
import coreModule from './modules/core';
import postModule from './modules/post';
import productsModule from './modules/products';
import insert_itemModule from './modules/insert_item';
import inseritemsModule from './modules/inseritems';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(postModule);
app.loadModule(productsModule);
app.loadModule(insert_itemModule);
app.loadModule(inseritemsModule);
app.loadModule(login);
app.loadModule(dashboard);
app.init();

// adding content inside the head tag
var title = 'FlowRouter Rocks';
DocHead.setTitle(title);

var metaInfo = {name: 'description", content: "Gwapa si JunJun'};
DocHead.addMeta(metaInfo);

export default function () {
  let viewport = {name: 'viewport', content: 'width=device-width, initial-scale=1'};
  DocHead.addMeta(viewport);
}
