import Model, { attr, belongsTo } from '@ember-data/model';

export default class ArticleModel extends Model {
  @attr('string') name;
  @attr('number') price;
  @belongsTo('brand', { inverse: 'articles', as: 'brand', async: true }) brand;
}
