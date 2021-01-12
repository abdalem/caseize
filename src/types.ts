export enum CompatibleCasesConstants {
  CAMELCASE = 'camelcase',
  SNAKECASE = 'snakecase',
}

export type CompatibleCases = `${CompatibleCasesConstants}`;

export type Cases = {
  [key in CompatibleCasesConstants]: (key: string) => string
};

export type Caseize = (data: any, casing: CompatibleCases) => any