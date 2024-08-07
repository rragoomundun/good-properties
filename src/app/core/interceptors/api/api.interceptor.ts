import { HttpInterceptorFn } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const { url } = req;

  if (url.includes('assets')) {
    return next(req);
  }

  const newRequest: any = {
    url: `${environment.API_URL}/${url}`,
  };

  return next(req.clone(newRequest));
};
