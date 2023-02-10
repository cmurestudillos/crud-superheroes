import { Injectable } from '@angular/core';
// Observables y operadores
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SubscriptionService {
  private subscriptions: Subscription[] = [];

  clearSubscriptions(): void {
    this.subscriptions.forEach((subscription: Subscription) =>
      subscription.unsubscribe()
    );
  }
}
