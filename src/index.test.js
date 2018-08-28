import { expect } from 'chai';
import { assassinate, clone, has, get, getObjectPath, set, getStringPathForArray, assurePathExists, getTypeString, deepEq, shallowDiff, keys, values, yank, pick, omit, firstValue } from './index';

describe('object', () => {
  describe('getObjectPath', () => {
    it('returns the correct path sections for a complicated path', () => {
      expect(getObjectPath('a.b.c[1].d.efg[99]')).to.deep.equal(['a', 'b', 'c', 1, 'd', 'efg', 99]);
    });
    it('returns an array if the original is an array', () => {
      const original = ['a', 'b', 'c'];
      expect(getObjectPath(original)).to.deep.equal(original);
    })
  });
  describe('set', () => {
    it('sets subobject values into the original object', () => {
      const tempObject = {};
      set(tempObject, 'a.b.c[1]', 'hello');
      expect(tempObject.a.b.c[1]).equal('hello');
    });
    it('responds with value when the key equates to an empty path', () => {
      const tempObject = {};
      const result = set(tempObject, [], 'hello');
      expect(tempObject).deep.equal({});
      expect(result).equal('hello');
    });
  });
  describe('get', () => {
    it('gets subobject from original object', () => {
      const tempObject = { a: { b: { c: '123', e: [ 1, 2, 3 ] } } };
      expect(get(tempObject, 'a.b.c')).equal('123');
      expect(get(tempObject, 'a.b.e[1]')).equal(2);
      expect(get(tempObject, 'a.b.e[5]')).equal(undefined);
      expect(get(tempObject, 'a.b.e[5]', 'test')).equal('test');
      expect(get(tempObject, null, 'test')).equal(tempObject);
      expect(get(tempObject, null, 'test')).equal(tempObject);
    })
  });
  describe('firstValue', () => {
    it('returns first thing in an object or array', () => {
      const tempObject = { a: 9, b: 12 };
      const tempArray = ['bobby', 'jimbo'];
      expect(firstValue(tempObject)).equal(9);
      expect(firstValue(tempArray)).equal('bobby');
      expect(firstValue(null)).equal(undefined);
      expect(firstValue([])).equal(undefined);
      expect(firstValue({})).equal(undefined);
    })
  });
  describe('pick', () => {
    it('picks subkeys from original object', () => {
      expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])).deep.equal({ a: 1, c: 3 });
      expect(pick({ a: 1, b: 2, c: 3 }, ['b'])).deep.equal({ b: 2 });
      expect(pick({ a: { first: 1, second: 2, third: 3 } }, [['a', 'second']])).deep.equal({ a: { second: 2 } });
      expect(pick({ a: { first: 1, second: 2, third: 3 } }, ['a'])).deep.equal({ a: { first: 1, second: 2, third: 3 }});
      expect(pick({ a: { first: 1, second: 2, third: 3 } }, ['a.second'])).deep.equal({ a: { second: 2 } });
      expect(pick({ a: { first: 1, second: 2, third: 3 } }, ['a.second', 'a.third'])).deep.equal({ a: { second: 2, third: 3 } });
      expect(pick({ a: { first: 1, second: 2, third: 3 } }, ['q.tango'])).deep.equal({});
      expect(pick({ a: { first: 1, second: 2, third: 3 } }, null)).deep.equal({});
      expect(pick({ a: { first: 1, second: 2, third: 3 } }, [])).deep.equal({});
      expect(pick({ a: ['hi', 'bye', 'hey'] }, ['a[1]'])).deep.equal({a: { '1': 'bye' }});
    })
  });
  describe('omit', () => {
    it('omits subkeys from original object', () => {
      expect(omit({ a: 1, b: 2, c: 3 }, ['a', 'c'])).deep.equal({ b: 2 });
      expect(omit({ a: 1, b: 2, c: 3 }, ['b'])).deep.equal({ a: 1, c: 3 });
      expect(omit({ a: { first: 1, second: 2, third: 3 } }, [['a', 'second']])).deep.equal({ a: { first: 1, third: 3 } });
      expect(omit({ a: { first: 1, second: 2, third: 3 } }, ['a'])).deep.equal({});
      expect(omit({ a: { first: 1, second: 2, third: 3 } }, ['a.second'])).deep.equal({ a: { first: 1, third: 3 } });
      expect(omit({ a: { first: 1, second: 2, third: 3 } }, ['a.second', 'a.third'])).deep.equal({ a: { first: 1 } });
      expect(omit({ a: { first: 1, second: 2, third: 3 } }, ['q.tango'])).deep.equal({ a: { first: 1, second: 2, third: 3 }});
      expect(omit({ a: { first: 1, second: 2, third: 3 } }, null)).deep.equal({ a: { first: 1, second: 2, third: 3 }});
      expect(omit({ a: { first: 1, second: 2, third: 3 } }, [])).deep.equal({ a: { first: 1, second: 2, third: 3 }});
      expect(omit({ a: ['hi', 'bye', 'hey'] }, ['a[1]'])).deep.equal({a: ['hi', 'hey']});
    })
  });
  describe('assassinate', () => {
    it('assassinates subkeys from original object', () => {
      expect(assassinate({ a: 1, b: 2, c: 3 }, ['c'])).deep.equal({ a: 1, b: 2 });
    })
  });
  describe('clone', () => {
    it('deeply clones objects and arrays', () => {
      const original = { a: 1, b: 2, c: 3 };
      const unoriginal = { a: 1, b: 2, c: 3 };
      const secondary = original;
      expect(original).to.equal(secondary);
      expect(original).to.not.equal(unoriginal);

      const cloned = clone(original);
      expect(cloned).to.deep.equal(original);
      expect(cloned).to.not.equal(original);

      delete original['a'];

      expect(original).to.not.deep.equal(cloned)
    })
  });
  describe('yank', () => {
    it('works exactly the same as get, but bad path inputs return default value instead of original object', () => {
      const tempObject = { a: { b: { c: '123', e: [ 1, 2, 3 ] } } };
      expect(yank(tempObject, 'a.b.c')).equal('123');
      expect(yank(tempObject, 'a.b.e[1]')).equal(2);
      expect(yank(tempObject, 'a.b.e[5]')).equal(undefined);
      expect(yank(tempObject, 'a.b.e[5]', 'test')).equal('test');
      expect(yank(tempObject, null, 'test')).equal('test');
      expect(yank(tempObject, undefined, 'test')).equal('test');
      expect(yank(tempObject, NaN, 'test')).equal('test');
      expect(yank(tempObject, {}, 'test')).equal('test');
    })
  });
  describe('has', () => {
    it('says whether or not the object has a complex subkey', () => {
      const tempObject = { first: 'yes', second: 'yes' };
      expect(has(tempObject, 'first')).to.equal(true);
      expect(has(tempObject, 'ninteyninth')).to.equal(false);
      expect(has(tempObject, null)).to.equal(false);
    })
    it('says whether or not the object has a subkey', () => {
      const tempObject = { third: { a: { b: { c: 999 } } }};
      expect(has(tempObject, 'third.a.b.c')).to.equal(true);
      expect(has(tempObject, 'third.a.b.qppqq')).to.equal(false);
    })
    it('simply returns false on bad input', () => {
      expect(has(null, 'a.b.c')).to.equal(false);
      expect(has(undefined, 'a.b.c')).to.equal(false);
      expect(has(0, 'a.b.c')).to.equal(false);
      expect(has(NaN, 'a.b.c')).to.equal(false);
      expect(has([], 'a.b.c')).to.equal(false);
      expect(has({}, 'a.b.c')).to.equal(false);
      expect(has(new Date(), 'a.b.c')).to.equal(false);
    });
    it('determines class instance values as well', () => {
      class temp {
        constructor(value) {
          this.value = value;
        }
      };
      const instance = new temp('hello world');
      expect(has(instance, 'value')).to.equal(true);
      expect(has(instance, ['value'])).to.equal(true);
    });
  });
  describe('getStringPathForArray', () => {
    it('is the opposite of getObjectPath', () => {
      const originals = ['a.b.c[1][2][3].four[5]', 'a', '1', '[1]', ''];
      originals.forEach(original => {
        expect(getStringPathForArray(getObjectPath(original))).equal(original);
      })
    });
    it('handles edge cases', () => {
      expect(getStringPathForArray(1)).equal('[1]');
      expect(getStringPathForArray(null)).equal('');
    });
    it('handles documentation cases', () => {
      expect(getStringPathForArray(['a', 'b', 'c'])).equal('a.b.c');
      expect(getStringPathForArray(['a', 1, 'c'])).equal('a[1].c');
    });
  });
  describe('assurePathExists', () => {
    it('assures object path exists, and creates it if it does not', () => {
      const original = {};
      assurePathExists(original, 'a.b.c[1]', 'hello');
      expect(original).to.deep.equal({ a: { b: { c: [undefined, 'hello'] } } });
    });
    it('creates empty arrays at path', () => {
      const original = {children: []};
      assurePathExists(original, ['children'], []);
      expect(original).to.deep.equal({ children: [] });
    });
  });
  describe('keys', () => {
    it('returns all object keys', () => {
      expect(keys({ a: 1, b: 2, c: 3, fff: null })).to.deep.eq(['a', 'b', 'c', 'fff']);
      expect(keys(null)).to.deep.eq([]);
      expect(keys(1)).to.deep.eq([]);
      expect(keys('hello')).to.deep.eq([]);
      expect(keys([1, 5, 9])).to.deep.eq(['0', '1', '2']);
    });
    it('works the same without Object.keys', () => {
      const originalKeys = Object.keys;
      Object.keys = undefined;
      expect(keys({ a: 1, b: 2, c: 3, fff: null })).to.deep.eq(['a', 'b', 'c', 'fff']);
      expect(keys(null)).to.deep.eq([]);
      expect(keys(1)).to.deep.eq([]);
      expect(keys('hello')).to.deep.eq([]);
      expect(keys([1, 5, 9])).to.deep.eq(['0', '1', '2']);
      Object.keys = originalKeys;
    });
  });
  describe('values', () => {
    it('returns all object values', () => {
      expect(values({ a: 1, b: 2, c: 3, fff: null })).to.deep.eq([1, 2, 3, null]);
    });
    it('returns arrays', () => {
      expect(values(['a', null, 123777, { f: 9 }])).to.deep.eq(['a', null, 123777, { f: 9 }]);
      expect(values(new Array('a', null, 123777, { f: 9 }))).to.deep.eq(['a', null, 123777, { f: 9 }]);
    });
    it('returns empty array for anything that is not an array or an object', () => {
      expect(values(null)).to.deep.eq([]);
      expect(values(1)).to.deep.eq([]);
      expect(values('hello')).to.deep.eq([]);
    });
  });
  describe('getTypeString', () => {
    it('returns correct type strings for basic types', () => {
      expect(getTypeString('')).to.equal('string');
      expect(getTypeString(1)).to.equal('number');
      expect(getTypeString(1.5)).to.equal('number');
      expect(getTypeString({})).to.equal('object');
      expect(getTypeString([])).to.equal('array');
      expect(getTypeString((() => {}))).to.equal('function');
      expect(getTypeString(true)).to.equal('boolean');
    });
    it('returns correct type strings for complex types', () => {
      expect(getTypeString(null)).to.equal('null');
      expect(getTypeString(undefined)).to.equal('undefined');
      expect(getTypeString(NaN)).to.equal('nan');
      expect(getTypeString(Infinity)).to.equal('number');
      expect(getTypeString(new Date())).to.equal('date');
      expect(getTypeString(/hello/g)).to.equal('regexp');
      class test {}
      expect(getTypeString(new test())).to.equal('object');
      expect(getTypeString(Symbol(55))).to.equal('symbol');
      expect(getTypeString(new Promise((() => {})))).to.equal('promise');
      expect(getTypeString(new String(''))).to.equal('string');

    });
  });
  describe('deepEq', () => {
    it('Returns true for basic things that are equal', () => {
      expect(deepEq(1, 1)).to.equal(true);
      expect(deepEq({}, {})).to.equal(true);
      expect(deepEq([], [])).to.equal(true);
      expect(deepEq('1', '1')).to.equal(true);
      expect(deepEq([1], [1])).to.equal(true);
      expect(deepEq({ first: 1 }, { first: 1 })).to.equal(true);
      expect(deepEq(null, null)).to.equal(true);
      expect(deepEq(NaN, NaN)).to.equal(true);
      expect(deepEq(undefined, undefined)).to.equal(true);
      const ownSymbol = Symbol(12);
      expect(deepEq(ownSymbol, ownSymbol)).to.equal(true);
      const item = { a: 123, b: 234 };
      expect(deepEq(item, item)).to.equal(true);
    });
    it('Returns false for basic things that are not equal', () => {
      expect(deepEq(1, 2)).to.equal(false);
      expect(deepEq('1', '2')).to.equal(false);
      expect(deepEq([1], [2])).to.equal(false);
      expect(deepEq({ first: 1 }, { first: 2 })).to.equal(false);
      expect(deepEq(null, 2)).to.equal(false);
      expect(deepEq(NaN, 2)).to.equal(false);
      expect(deepEq(undefined, 2)).to.equal(false);
      expect(deepEq(Symbol(12), Symbol(12))).to.equal(false); // IMPORTANT!
    });
    it('Returns true for complex things that are equal', () => {
      expect(deepEq([{ first: 'bobabob', second: 'gogagog' }], [{ second: 'gogagog', first: 'bobabob' }])).to.equal(true);
      expect(deepEq([{ first: undefined, second: null }], [{ 'second': null, 'first': undefined }])).to.equal(true);
      expect(deepEq([{ first: undefined, second: null }], [{ 'second': null, 'first': undefined }])).to.equal(true);
    });
    it('Detects differences in null types', () => {
      expect(deepEq(null, undefined)).to.equal(false);
      expect(deepEq(null, NaN)).to.equal(false);
      expect(deepEq(undefined, NaN)).to.equal(false);
      expect(deepEq(0, null)).to.equal(false);
      expect(deepEq(0, undefined)).to.equal(false);
      expect(deepEq(0, NaN)).to.equal(false);
    });
    it('Has predictable undefined subkey behavior', () => {
      expect(deepEq({ a: 1, b: undefined }, { a: 1 })).to.equal(false);
    });
  });
  describe('shallowDiff', () => {
    it('Returns no difference for equal things', () => {
      expect(shallowDiff(1, 1)).to.deep.equal([]);
      expect(shallowDiff({ a: 1 }, { a: 1 })).to.deep.equal([]);
      expect(shallowDiff({ }, { })).to.deep.equal([]);
      expect(shallowDiff([], [])).to.deep.equal([]);
    });
    it('Returns type differences', () => {
      expect(shallowDiff(1, 'b')).to.deep.equal([{ change: 'type', path: [], original: 1, incoming: 'b' }]);
    });
    it('Returns value differences', () => {
      expect(shallowDiff(1, 2)).to.deep.equal([{ change: 'value', path: [], original: 1, incoming: 2 }]);
    });
    it('Returns added keys', () => {
      expect(shallowDiff({ }, { a: 1 })).to.deep.equal([{ change: 'add', path: [], key: 'a', incoming: 1 }]);
    });
    it('Returns added keys', () => {
      expect(shallowDiff({ a: 1 }, { })).to.deep.equal([{ change: 'delete', path: [], key: 'a', original: 1 }]);
      expect(shallowDiff({ a: 1, hello: 'world' }, { })).to.deep.equal([{ change: 'delete', path: [], key: 'a', original: 1 }, { change: 'delete', path: [], key: 'hello', original: 'world' }]);
    });
    it('Returns growth', () => {
      expect(shallowDiff([], [1])).to.deep.equal([{ change: 'grow', path: [], incoming: [1] }]);
      expect(shallowDiff([], ['a', 'b', 'c'])).to.deep.equal([{ change: 'grow', path: [], incoming: ['a', 'b', 'c'] }]);
      expect(shallowDiff([], [console.log, null, undefined, undefined])).to.deep.equal([{ change: 'grow', path: [], incoming: [console.log, null, undefined, undefined] }]);
    });
    it('Returns shrink', () => {
      expect(shallowDiff([1], [])).to.deep.equal([{ change: 'shrink', path: [], original: [1] }]);
      expect(shallowDiff([{}, 'a', 1, null], [])).to.deep.equal([{ change: 'shrink', path: [], original: [{}, 'a', 1, null] }]);
    });
  });
});
