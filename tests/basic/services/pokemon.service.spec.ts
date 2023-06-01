import { TestBed } from '@angular/core/testing';
import { PokemonService } from '../../../src/app/basic/services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { EPokemon } from '../../../src/app/basic/enums/pokemon.enum';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PokemonService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should return a pokemon bulbasaur', (done) => {
    service.getPokemon(EPokemon.bulbasaur).subscribe((pokemon) => {
      expect(pokemon.name).toBe('bulbasaur');
      done();
    });
  });
});
