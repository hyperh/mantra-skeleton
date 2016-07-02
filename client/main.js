import { createApp } from 'mantra-core';
import initContext from '../imports/client/configs/context';

// modules
import coreModule from '../imports/client/modules/core';
import userModule from '../imports/client/modules/user';

// init context
const context = initContext();

// create app
const app = createApp(context);

// Actions are taken from module and injected thru the routes function during the init()
// Context and all actions (even from other modules) are available to modules
app.loadModule(coreModule);
app.loadModule(userModule);

app.init();
