import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  model() {
    super.model(...arguments);
    return this.store.findAll('article');
  }
}
