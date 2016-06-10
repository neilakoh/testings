import actions from './actions';
import routes from './routes.jsx';
import loginRoute from './components/login/routes.jsx';
import methodStubs from './method_stubs';

export default {
  loginRoute,
  routes,
  actions,
  load(context) {
    methodStubs(context);
  }
};
