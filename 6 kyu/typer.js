// My Solution

var typer = (function(TO_BE_DEFINED_BY_YOU) {
    return {
      isNumber:(TO_BE_DEFINED_BY_YOU)=>typeof TO_BE_DEFINED_BY_YOU.valueOf() === "number"&&!isNaN(TO_BE_DEFINED_BY_YOU),
      isString:(TO_BE_DEFINED_BY_YOU)=>typeof TO_BE_DEFINED_BY_YOU ==='string'||TO_BE_DEFINED_BY_YOU instanceof String,
      isArray: (TO_BE_DEFINED_BY_YOU)=>Array.isArray(TO_BE_DEFINED_BY_YOU),
      isFunction: (TO_BE_DEFINED_BY_YOU)=>typeof TO_BE_DEFINED_BY_YOU ==='function',
      isDate: (TO_BE_DEFINED_BY_YOU)=> TO_BE_DEFINED_BY_YOU instanceof Date,
      isRegExp: (TO_BE_DEFINED_BY_YOU)=> TO_BE_DEFINED_BY_YOU instanceof RegExp,
      isBoolean: (TO_BE_DEFINED_BY_YOU)=>typeof TO_BE_DEFINED_BY_YOU ==='boolean'||TO_BE_DEFINED_BY_YOU instanceof Boolean,
      isError: (TO_BE_DEFINED_BY_YOU)=> TO_BE_DEFINED_BY_YOU instanceof Error,
      isNull: (TO_BE_DEFINED_BY_YOU)=>TO_BE_DEFINED_BY_YOU ===null,
      isUndefined: (TO_BE_DEFINED_BY_YOU)=>TO_BE_DEFINED_BY_YOU ===undefined
    };
  }(null));