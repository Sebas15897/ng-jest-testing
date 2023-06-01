import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { EPokemon } from '../enums/pokemon.enum';
import { Subject } from 'rxjs';
import { IPokemon } from '../interfaces/pokemon';

@Component({
  selector: 'app-charizard',
  templateUrl: './charizard.component.html',
  styleUrls: ['./charizard.component.css'],
})

export class CharizardComponent implements OnInit, OnDestroy {
  private destroy: Subject<boolean> = new Subject<boolean>();
  charizard?: IPokemon;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getCharizard();
  }

  getCharizard() {
    this.pokemonService.getPokemon(EPokemon.charizard).subscribe({
      next: (data) => {
        this.charizard = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
