export class ErrorUtil {
  static getInputError(errorPrefix: string, errors: any, types: string[]) {
    if (errors && errors.type === 'INVALID_PARAMETERS') {
      const error = errors.error.find((error: any) =>
        types.includes(error.type),
      );

      if (error) {
        return `${errorPrefix}${error.type}`;
      }
    }

    return '';
  }
}
