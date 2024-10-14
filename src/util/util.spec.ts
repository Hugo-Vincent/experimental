import { CustomMaps } from './util';

class Kitty {
  constructor(readonly id: number, readonly color: KittyColor) {}
}
enum KittyColor {
  RED = 'RED',
  BLACK = 'BLACK',
  WHITE = 'WHITE',
  GREEN = 'GREEN',
}

describe('CustomMaps', () => {
  const kitties = [
    new Kitty(1, KittyColor.RED),
    new Kitty(1, KittyColor.BLACK),
    new Kitty(2, KittyColor.GREEN),
    new Kitty(2, KittyColor.WHITE),
    new Kitty(3, KittyColor.RED),
    new Kitty(3, KittyColor.GREEN),
  ];
  const uniqueKitties = [new Kitty(1, KittyColor.RED), new Kitty(2, KittyColor.BLACK), new Kitty(3, KittyColor.GREEN)];

  it('groupByProperty', () => {
    const kittyMap = CustomMaps.groupByProperty(kitties, 'id');
    console.log(kittyMap[1].map((x) => x.color));

    kittyMap[1].map((x) => x);

    const kittyMap2 = CustomMaps.groupByProperty(kitties, 'color');
    console.log(kittyMap2);
    kittyMap2[KittyColor.RED].map((x) => x);

    const kittyMap3 = CustomMaps.groupByUniqueProperty(uniqueKitties, 'color');
    const a = kittyMap3[KittyColor.WHITE].color;
    console.log(a);
  });
});
