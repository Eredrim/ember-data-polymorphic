import ApplicationSerializer from './application';

export default class ArticleSerializer extends ApplicationSerializer {
  attrs = {
    brand: { serialize: 'id' },
  };
}
