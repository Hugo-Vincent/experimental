enum Animals {
  MONKEY = 'MONKEY',
  TIGER = 'TIGER',
  PANTHER = 'PANTHER',
}

interface Indexable {
  [key: string]: any;
}

class A implements Indexable {
  constructor(
    public id: number,
    public name: string,
    public animals: Animals,
  ) {}
}

const mapFromProperty = <T extends Indexable>(
  objects: T[],
  propertyName: keyof T,
): Record<string, T[]> => {
  return objects.reduce(
    (acc: Record<string, T[]>, current: T): Record<string, T[]> => {
      if (!acc[current[propertyName]]) {
        acc[current[propertyName]] = [];
      }
      acc[current[propertyName]].push(current);
      return acc;
    },
    {},
  );
};

describe('examples', () => {
  const exampleClassInstances = [
    new A(1, 'a', Animals.MONKEY),
    new A(3, 'b', Animals.TIGER),
    new A(6, 'c', Animals.PANTHER),
    new A(10, 'a', Animals.TIGER),
  ];

  it('1', () => {
    const example1 = mapFromProperty<A>(exampleClassInstances, 'id');
    expect(example1).toStrictEqual({
      1: [exampleClassInstances[0]],
      3: [exampleClassInstances[1]],
      6: [exampleClassInstances[2]],
      10: [exampleClassInstances[3]],
    });
  });
  it('2', () => {
    const example2 = mapFromProperty<A>(exampleClassInstances, 'name');
    expect(example2).toStrictEqual({
      a: [exampleClassInstances[0], exampleClassInstances[3]],
      b: [exampleClassInstances[1]],
      c: [exampleClassInstances[2]],
    });
  });
  it('3', () => {
    const example3 = mapFromProperty<A>(exampleClassInstances, 'animals');
    expect(example3).toStrictEqual({
      [Animals.MONKEY]: [exampleClassInstances[0]],
      [Animals.TIGER]: [exampleClassInstances[1], exampleClassInstances[3]],
      [Animals.PANTHER]: [exampleClassInstances[2]],
    });
  });
});
