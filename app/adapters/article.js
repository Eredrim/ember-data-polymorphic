import RESTAdapter from '@ember-data/adapter/rest';

export default class ArticleAdapter extends RESTAdapter {
  host = 'http://localhost:3000';
}
