import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/models/app-state.model';
import { Observable } from 'rxjs';
import { ShoppingItem } from 'src/store/models/shopping-item.models';
import { AddItemAction, DeleteItemAction, LoadShoppingAction } from 'src/store/actions/shopping.actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-shopping-list';
}
