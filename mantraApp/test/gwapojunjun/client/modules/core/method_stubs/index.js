import login from './login.js';
import dashboard from './dashboard.js';

export default function (context) {
  login(context);
  dashboard(context);
}
