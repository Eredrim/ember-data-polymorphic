import Model, { attr, hasMany } from '@ember-data/model';

export default class BrandModel extends Model {
  @attr('string') name;
  @attr('string') country;
  @attr('date') startDate;
  @hasMany('article', { inverse: 'brand', polymorphic: true, async: true })
  articles;
}
