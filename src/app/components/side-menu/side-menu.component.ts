import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
import { RoutesApp } from 'src/app/enums/routes-enums';
import { NavItems } from '../../models/interfaces/nav-items-interface';
import { AppService } from './../../../services/app.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  @ViewChild(IgxNavigationDrawerComponent, { static: true })
  public drawer!: IgxNavigationDrawerComponent;

  constructor(private _router: Router, public appService: AppService) {}

  ngOnInit(): void {
    this.appService.onClickSave.subscribe(
      (data) =>
        (this.navItems[1].deckUserSavesLen =
          this.appService.getDeckUserSavesLen)
    );
      this._router.navigate([RoutesApp.NEW_DECK]);
  }

  public navItems: NavItems[] = [
    { name: 'add', text: 'Criar novo baralho', routerLink: 'cards/add' },
    {
      name: 'book',
      text: 'Meus baralhos',
      routerLink: '',
      deckUserSavesLen: 0,
    },
  ];

  public navigate(item: NavItems) {
    this._router.navigate([item.routerLink]);
  }
}
