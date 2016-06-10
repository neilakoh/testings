import {createApp} from 'mantra-core';
import initContext from './configs/context';
import {DocHead} from 'meteor/kadira:dochead';

// modules
import coreModule from './modules/core';
import page_1Module from './modules/page_1';
import page_2Module from './modules/page_2';
import page_3Module from './modules/page_3';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(page_1Module);
app.loadModule(page_2Module);
app.loadModule(page_3Module);
app.init();

// DocHead Site Head
//Site Title
var title = 'Sample DocHead';
DocHead.setTitle(title);

// Loading Javascript
var gaScript = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js';
DocHead.loadScript(gaScript);

// Loadintg CSS
var cssLink = {rel: "stylesheet", href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'};
DocHead.addLink(cssLink);

// Loading Meta tag
var metaInfo = {name: "description", content: "FlowRouter SSR is Awesome"};
DocHead.addMeta(metaInfo);
