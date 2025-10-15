import './styles.css';
import { createApp, h } from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './app/App.vue';

const mountApp = (el) => {
  const app = createApp(App);
  app.mount(el);
};

if (!(window as any).singleSpaNavigate) {
  mountApp('#root');
}

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {});
    },
  },
});

export const { bootstrap, mount, unmount } = vueLifecycles;
