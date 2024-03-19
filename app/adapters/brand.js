import RESTAdapter from '@ember-data/adapter/rest';

export default class BrandAdapter extends RESTAdapter {
  host = 'http://localhost:3000';
}
