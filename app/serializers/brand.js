import ApplicationSerializer from './application';

export default class BrandSerializer extends ApplicationSerializer {
  attrs = {
    articles: { serialize: 'id' },
  };
}
