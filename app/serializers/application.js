import RESTSerializer, { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer.extend(EmbeddedRecordsMixin) {

  normalizeArrayResponse(store, primaryModelClass, hash, id, requestType) {
    if (hash && !hash[primaryModelClass.modelName]) {
      const newHash = { [primaryModelClass.modelName]: hash };
      return super.normalizeArrayResponse(store, primaryModelClass, newHash, id, requestType);
    }
    return super.normalizeArrayResponse(...arguments);
  }

  normalizeSingleResponse(store, primaryModelClass, hash, id, requestType) {
    if (hash && !hash[primaryModelClass.modelName]) {
      const newHash = { [primaryModelClass.modelName]: hash };
      return super.normalizeSingleResponse(store, primaryModelClass, newHash, id, requestType);
    }
    return super.normalizeSingleResponse(...arguments);
  }
}
