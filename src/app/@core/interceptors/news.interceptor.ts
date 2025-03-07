import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ModalService } from '@core/services/modal.service';
import { environment } from 'environment';

export const newsInterceptor: HttpInterceptorFn = (req, next) => {
  const modalService = inject(ModalService);
  const userToken = environment.newsApiKey;

  if (!userToken) modalService.openApiKeyErrorModal();

  const modifiedReq = req.clone({
    headers: req.headers.set('X-Api-Key', `${userToken}`),
  });

  return next(modifiedReq);
};
