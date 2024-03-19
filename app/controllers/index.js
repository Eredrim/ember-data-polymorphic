import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @tracked selectedBrand;
  @tracked isLoading;

  @action
  showBrandInfo(article, event) {
    event.preventDefault();
    this.isLoading = true;
    article.brand
      .then((brand) => {
        this.selectedBrand = brand;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  @action
  hideBrandInfo(event) {
    event.preventDefault();
    this.selectedBrand = undefined;
  }
}
