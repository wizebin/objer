## Description

[This package](https://www.npmjs.com/package/objer) is used to interact with objects

## Basic Usage

*install*

`npm install --save objer`

*import*

`import { get, set, has } from 'objer';`

## Api Reference

### get(object, path, defaultValue)

*parameters:*

* `object`: The object to get a value from
* `path`: The key path to pull the value from
    * This can be a string 'a.b.c' or an array ['a', 'b', 'c'] or null, if the key is null `object` is returned
* `defaultValue`: If there is no value at that location, (if that value comes out as `undefined`), get will return this value. If this value is not specified get will return undefined

*response:*

The value at that key

*example:*

    const person = {
        name: 'jeffery',
        address: {
            street: '123 fake st',
            city: 'faketown',
            state: 'FS',
            zip: '90909',
        }
    };

    get(person, 'address.city') // returns 'faketown'
    get(person, ['address', 'city']) // returns 'faketown'
    get(person, 'key.that.doesnot.exist') // returns undefined
    get(person, 'key.that.doesnot.exist', 'hola') // returns 'hola'

### has(object, path)

*parameters:*

* `object`: The object to get a value from
* `path`: The key path to check for existence
    * This can be a string 'a.b.c' or an array ['a', 'b', 'c'] or null, if the key is null `object` is returned

*response:*

`true`|`false`

*example:*

    const person = {
        name: 'jeffery',
        address: {
            street: '123 fake st',
            city: 'faketown',
            state: 'FS',
            zip: '90909',
        }
    };

    has(person, 'address') // returns true
    has(person, 'address.city') // returns true
    has(person, ['address', 'city']) // returns true
    has(person, 'key.that.doesnot.exist') // returns false
    has(person, 'key.that.really.doesnot.exist') // returns false

### set(object, path, value)

*parameters:*

* `object`: The object to get a value from
* `path`: The key path to pull the value from
    * This can be a string 'a.b.c' or an array ['a', 'b', 'c'] or null, if the key is null `object` is returned
* `value`: Set the value of subkey inside object to value

*response:*

`object`: the original object passed into set

*example:*

    const person = {
        name: 'jeffery',
        address: {
            street: '123 fake st',
            city: 'faketown',
            state: 'FS',
            zip: '90909',
        }
    };

    set(person, ['address', 'country'], 'United States'); // returns person, person.address.country is now equal to 'United States'
    set(person, ['address', 'city'], 'realtown'); // returns person, person.address.realtown is changed to 'realtown'

### keys(object)

*parameters:*

* `object`: The object to get a list of keys from

*response:*

array of keys

*example:*

    const person = {
        name: 'jeffery',
        address: {
            street: '123 fake st',
            city: 'faketown',
            state: 'FS',
            zip: '90909',
        }
    };

    keys(person); // returns ['name', 'address']
    keys(person.address); // returns ['street', 'city', 'state', 'zip']

### getObjectPath(path)

*parameters:*

* `path`: The path to retrieve a path array from

*response:*

array of keys representing path

*example:*

    getObjectPath('a.b.c'); // returns ['a', 'b', 'c']
    getObjectPath(['a', 'b', 'c']); // returns ['a', 'b', 'c']
    getObjectPath(['a', 'b.c']); // returns ['a', 'b.c']
    getObjectPath('a[1].b'); // returns ['a', 1, 'b']
    getObjectPath('a.1.b'); // returns ['a', '1', 'b']

### getStringPathForArray(pathArray)

*parameters:*

* `pathArray`: The path array to retrieve a path string from

*response:*

string representing the path

*example:*

    getObjectPath(['a', 'b', 'c']); // returns 'a.b.c'
    getObjectPath(['a', 1, 'c']); // returns 'a[1].c'
    getObjectPath('a[1].c'); // returns 'a[1].c'

### getTypeString(entity)

*parameters:*

* `entity`: Anything

*response:*

string representing the type

*example:*

    getTypeString(''); // returns 'string'
    getTypeString(1); // returns 'number'
    getTypeString(1.5); // returns 'number'
    getTypeString({}); // returns 'object'
    getTypeString([]); // returns 'array'
    getTypeString((() => {})); // returns 'function'
    getTypeString(true); // returns 'boolean'
    getTypeString(null); // returns 'null'
    getTypeString(undefined); // returns 'undefined'
    getTypeString(NaN); // returns 'number'
    getTypeString(Infinity); // returns 'number'
    getTypeString(new Date()); // returns 'date'
    getTypeString(/hello/g); // returns 'regexp'
    class test {}
    getTypeString(new test()); // returns 'object'
    getTypeString(Symbol(55)); // returns 'symbol'
    getTypeString(new Promise((() => {}))); // returns 'promise'
    getTypeString(new String('')); // returns 'string'

### deepEq(item1, item2)

*parameters:*

* `item1`: Anything
* `item2`: Anything

*response:*

Checks for direct equality, and in the case of objects and arrays checks for subkey equality
_note: does not handle class instance equality_

*example:*

    deepEq([{ first: 'bobabob', second: 'gogagog' }], [{ second: 'gogagog', first: 'bobabob' }]) // returns true
    deepEq({ first: 1 }, { first: 2 }) // returns false
