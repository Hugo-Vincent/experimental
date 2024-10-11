import { CustomMaps } from './util';

class Kitty {
  constructor(readonly id: number, readonly color: string) {}
}

describe('CustomMaps', () => {
  const kitties = [new Kitty(1, 'red'), new Kitty(1, 'blue'), new Kitty(2, 'green'), new Kitty(2, 'purple'), new Kitty(3, 'red'), new Kitty(3, 'blue')];


  describe('', () => {

  });
  it('groupByProperty', () => {
    const kittyMap = CustomMaps.groupByProperty(kitties, 'id');
    console.log(kittyMap[1].map(x => x.color));

    const kittyMap2 = CustomMaps.groupByProperty(kitties, 'color');
    console.log(kittyMap2);
  });
});
