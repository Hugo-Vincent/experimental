import { TAny, TObject } from '../dora/general/general-types';
import { TIndexableKey, TMap, TObjectKey } from './types/generic-types';

export class Util {
  static isObject(obj: TAny): obj is TObject {
    return typeof obj === 'object' && !Array.isArray(obj) && obj !== null && obj !== undefined;
  }
}

export class CustomMaps {
  /**
   * Indexes an array of objects by the value at a specified property (one-to-many mapping).
   * @param objects - The objects to group
   * @param key - The property to get the value of and group the objects by
   * @returns - A map of objects grouped by the specified property value
   */
  static groupByProperty<K extends TIndexableKey<K, T>, T extends Record<K, T[K]>>(
    objects: T[],
    key: K,
  ): Record<T[K], T[]> {
    return objects.reduce((acc: Record<T[K], T[]>, obj: T) => {
      if (!acc[obj[key]]) {
        acc[obj[key]] = [];
      }
      acc[obj[key]].push(obj);
      return acc;
    }, {});
  }

  /**
   * Indexes an array of objects by the unique value of a specified property (one-to-one mapping).
   * @param objects - The objects to index
   * @param key - The property to get the unique value of and group the objects by
   * @returns - A map of objects indexed by a specified property value
   */
  static groupByUniqueProperty<K extends TIndexableKey<K, T>, T extends Record<K, T[K]>>(
    objects: T[],
    key: K,
  ): Record<T[K], T> {
    return objects.reduce((acc: Record<T[K], T>, x: T) => {
      if (acc[x[key]]) {
        throw new Error('Key not unique.');
      }
      acc[x[key]] = x;
      return acc;
    }, {});
  }

  /**
   * Create a map where the keys and values are property values of the specified objects.
   * @param objects - The object to convert
   * @param keyForKey - The key to use for the map
   * @param keyForValue - The value to use for the map
   * @returns The mapped property values
   */
  public static internalMap<K extends TIndexableKey<K, T>, L extends TIndexableKey<L, T>, T extends Record<K, T[K]>>(
    objects: T[],
    keyForKey: K,
    keyForValue: L,
  ): TMap<T[K], T[L]> {
    return objects.reduce((map: Partial<Record<T[K], T[L]>>, x: T) => {
      map[x[keyForKey]] = x[keyForValue];
      return map;
    }, {});
  }

  /**
   * Creates a map where the keys and values are those of the specified arrays in-order.
   * @param keys - The keys to map from
   * @param values - The values to map to
   * @returns The mapped arrays
   */
  public static genericMap<K extends TObjectKey, T>(keys: K[], values: T[]): TMap<K, T> {
    return values.reduce((map: TMap<K, T>, x: T, i: number) => {
      map[keys[i]] = x;
      return map;
    }, {});
  }

  public static getSettledResults<T>(settledPromises: PromiseSettledResult<T>[]): {
    [K in PromiseFulfilledResult<T>['status']]: T[];
  } & {
    [K in PromiseRejectedResult['status']]: PromiseRejectedResult['reason'][];
  } {
    return settledPromises.reduce(
      (
        map: { [K in PromiseFulfilledResult<T>['status']]: T[] } & {
          [K in PromiseRejectedResult['status']]: PromiseRejectedResult['reason'][];
        },
        x: PromiseSettledResult<T>,
      ) => {
        if (x.status === 'fulfilled') {
          map.fulfilled.push(x.value);
        } else {
          map.rejected.push(x.reason);
        }
        return map;
      },
      { fulfilled: [], rejected: [] },
    );
  }

  public static getResolvedResults<T>(settledPromises: PromiseSettledResult<T>[]): T[] {
    return settledPromises.reduce((result: T[], x: PromiseSettledResult<T>) => {
      if (x.status === 'fulfilled') {
        result.push(x.value);
      }
      return result;
    }, []);
  }

  public static filterUniqueElements<T>(elements: T[]): T[] {
    return elements.filter((value, index, self) => self.indexOf(value) === index);
  }
}
