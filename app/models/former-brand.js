import { attr } from '@ember-data/model';
import BrandModel from './brand';

export default class FormerBrandModel extends BrandModel {
  @attr('date') endDate;
}
