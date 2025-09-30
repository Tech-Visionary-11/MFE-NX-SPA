import { registerApplication, start } from 'single-spa';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';

const layoutElement = document.querySelector('#single-spa-layout');
if (!layoutElement) {
  throw new Error('Element with id "single-spa-layout" not found');
}
const routes = constructRoutes(layoutElement);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
console.log(
  'Registered Applications:',
  applications.map((app) => app.name)
);
layoutEngine.activate();

start({ urlRerouteOnly: true });
