import _ from 'lodash';
import { CompatibleCasesConstants, CompatibleCases, Cases } from './types';

export * from './types';

const cases: Cases = {
  [ CompatibleCasesConstants.CAMELCASE ]: (key: string) => _.camelCase(key),
  [ CompatibleCasesConstants.SNAKECASE ]: (key: string) => _.snakeCase(key),
};

const caseize = (data: any, casing: CompatibleCases) => {
  if(_.isArray(data)) data = _.map(data, (item: any) => caseize(item, casing));
  
  if(_.isPlainObject(data)) {
    _.each(_.keys(data), (key: string) => {
      const value = data[key];
      delete data[key];
      data[cases[casing](key)] = caseize(value, casing);
    });
  }

  return data;
}

export default caseize;