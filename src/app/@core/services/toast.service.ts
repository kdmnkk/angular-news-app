import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

export interface ToastInterface {
  header: string;
  message: string;
  type?: string;
  delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private _toasts$ = new BehaviorSubject<ToastInterface[]>([]);

  public get toasts$() {
    return this._toasts$.asObservable();
  }

  public show(toast: ToastInterface) {
    toast = { ...toast, type: 'danger'};
    this._toasts$.next([...this._toasts$.value, toast]);
  }

  public remove(toast: ToastInterface) {
    this._toasts$.next(this._toasts$.value.filter(t => t !== toast));
  }

  public clear() {
    this._toasts$.next([]);
  }
}
