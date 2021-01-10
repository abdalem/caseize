export declare enum CompatibleCasesConstants {
    CAMELCASE = "camelcase",
    SNAKECASE = "snakecase"
}
export declare type CompatibleCases = `${CompatibleCasesConstants}`;
export declare type Cases = {
    [key in CompatibleCasesConstants]: (key: string) => string;
};
