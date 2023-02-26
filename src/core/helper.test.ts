import { describe, expect, test } from 'vitest';
import { getEnumType, toCapatical } from './helper';

describe('helper test', () => {
  test('should uppercase the first letter', () => {
    expect(toCapatical('hello world')).toBe('Hello world');
  });

  test('should filter enum when miss the value', () => {
    expect(
      getEnumType([
        {
          title: 'test enum1',
        },
        {
          title: 'test enum2',
        },
        {
          title: 'test enum3',
        },
      ]),
    ).toBe("");

    expect(
      getEnumType([
        {
          title: 'test enum1',
        },
        {
          title: 'test enum2',
        },
        {
          title: 'test enum3',
          value: 'enum3',
        },
      ]),
    ).toBe("'enum3'");

    expect(
      getEnumType([
        {
          title: 'test enum1',
          value: 'enum1',
        },
        {
          title: 'test enum2',
        },
        {
          title: 'test enum3',
          value: 'enum3',
        },
      ]),
    ).toBe("'enum1' | 'enum3'");
  });

  test('should get a right enum type', () => {
    expect(
      getEnumType([
        {
          title: 'test enum1',
          value: 'enum1',
        },
        {
          title: 'test enum2',
          value: 'enum2',
        },
        {
          title: 'test enum3',
          value: 'enum3',
        },
      ]),
    ).toBe("'enum1' | 'enum2' | 'enum3'");
  });
});
