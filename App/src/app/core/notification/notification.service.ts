import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationTypings } from '../../shared/typings/notification.typings';
import { Observable } from 'rxjs';

@Injectable()
export class NotificationService {
  private notificationSource: Subject<any>;
  private notification: Observable<any>;

  constructor() {
    this.initNotification();
  }

  /**
   * 初始化主题和观察者
   */
  public initNotification(): void {
    if (!this.notificationSource) {
      this.notificationSource = new Subject();
      this.notification = this.notificationSource.asObservable();
    }
  }

  public publish(message: NotificationTypings) {
    if (typeof this.notificationSource !== 'undefined') {
      this.notificationSource.next(message);
    }
  }

  public clearMessage() {
    this.notificationSource.next();
  }

  public getData(): Observable<any> {
    return this.notification;
  }
}

