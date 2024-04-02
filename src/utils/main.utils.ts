export function checkParams(queryParam: string, searchingBy: string) {
  return queryParam
    ? Array.from(queryParam.split(',')).map((property) => {
        const object = {};
        object[searchingBy] = property;
        return object;
      })
    : [];
}
