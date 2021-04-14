import _ from "lodash";
import {
  CompatibleCasesConstants,
  CompatibleCases,
  Cases,
  Caseize,
} from "./types";

const cases: Cases = {
  [CompatibleCasesConstants.CAMELCASE]: (key: string) => _.camelCase(key),
  [CompatibleCasesConstants.SNAKECASE]: (key: string) => _.snakeCase(key),
};

const caseize: Caseize = (data, casing) => {
  let dataCopy = JSON.parse(JSON.stringify(data));
  if (_.isArray(dataCopy))
    dataCopy = _.map(dataCopy, (item: any) => caseize(item, casing));

  if (_.isPlainObject(dataCopy)) {
    _.each(_.keys(dataCopy), (key: string) => {
      const value = dataCopy[key];
      delete dataCopy[key];
      dataCopy[cases[casing](key)] = caseize(value, casing);
    });
  }

  return dataCopy;
};

export default caseize;
export { CompatibleCasesConstants, CompatibleCases, Cases };
