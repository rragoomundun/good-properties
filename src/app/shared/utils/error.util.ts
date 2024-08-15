export class ErrorUtil {
  static getInputError(
    errorPrefix: string,
    errors: any,
    types: string[],
    field?: string,
  ) {
    if (errors && errors.type === 'INVALID_PARAMETERS') {
      const error = errors.error.find((error: any) => {
        if (field) {
          return types.includes(error.type) && error.field === field;
        }

        return types.includes(error.type);
      });

      if (error) {
        return `${errorPrefix}${error.type}`;
      }
    }

    return '';
  }
}
