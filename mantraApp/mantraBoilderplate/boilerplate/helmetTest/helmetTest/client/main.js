import {createApp} from 'mantra-core';
import initContext from './configs/context';

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
