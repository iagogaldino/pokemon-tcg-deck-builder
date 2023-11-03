import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './../../../services/app.service';
import { PokemonCard } from '../../models/interfaces/pokemon-card';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css'],
})
export class DeckListComponent implements OnInit {
  public title = '';

  constructor(
    public appService: AppService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.checkFlowUser();
  }

  ngOnDestroy() {
    this.appService.selectedCards = [];
  }

  onClickCard(card: PokemonCard): void {
    if (this.cardAlreadySelect(card)) {
      this.appService.selectedCards = this.appService.selectedCards.filter(
        (item) => item != card
      );
    } else {
      this.appService.selectedCards.push(card);
    }
    this.updateCardsPosition();
  }

  updateCardsPosition() {
    this.appService.selectedCards.forEach((card, index) => {
      card.numberadd = index + 1;
    });
  }

  private cardAlreadySelect(card: any): boolean {
    const exists = this.appService.selectedCards.find((item) => item == card);
    return exists != undefined;
  }

  checkItemSelected(card: PokemonCard): any {
    if (!this.appService.selectedCards?.length) {
      return;
    }
    const r = this.appService.selectedCards.find((item) => item == card);
    return r != undefined;
  }

  checkHasType(type: any): boolean {
    const exists = this.appService.types.find((item) => item == type);
    return exists != undefined;
  }

  private checkFlowUser(): void {
    this._activatedRoute.params.subscribe((params) => {
      const flow = params['flow'];
      if (flow == 'edit') {
        this.title = `Editar baralho ${this.appService.deckUserEdit.deckTitle}`;
        this.appService.typeFlow = 'edit';
        this.appService.deckUserEdit.deck.forEach((item) =>
          this.onClickCard(item)
        );
      } else {
        this.appService.typeFlow = 'add';
        this.title = 'Criar novo baralho';
      }
    });
  }
}
