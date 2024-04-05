export function checkParams(
  queryParam: string,
  entity: string,
  searchingBy: string,
) {
  return queryParam
    ? Array.from(queryParam.split(',')).map((property) => {
        const object = {};
        object[entity] = {};
        object[entity][searchingBy] = property;
        return object;
      })
    : [];
}
