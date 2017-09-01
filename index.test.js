// Task: Make all the tests pass, you can run them with the `jest` command or `jest --watch` if you're lazy 🤠
// Leave the expect statements unchanged!

// If you haven't used jest before and are used to the mocha way of testing async code you can read more here:
// https://facebook.github.io/jest/docs/tutorial-async.html
// or shoot us any questions at:
// brant.stuns@csaa.com or james.nimlos@csaa.com

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

describe('Promise Basics 💾', function () {
  test('1. calling the first parameter passed to a Promise should resolve the promise', () => {
    const promise = new Promise((resolve) => {
      resolve(true);
    });

    return promise;
  });

  test('2. the `resolve` function can return a value, that is consumed by the `promise.then()` callback', () => {
    const promise = new Promise((resolve) => {
      resolve('nice');
    });

    return promise
      .then(value => {
        expect(value).toBe('nice');
      });
  });

  test('3. the `reject` function can return a value, that is consumed by the `promise.catch()` callback', () => {
    const promise = new Promise((resolve, reject) => {
      reject('not so nice');
    });

    return promise
      .catch(value => {
        expect(value).toBe('not so nice');
      });
  });

  test('4. an asynchronous promise can resolve at a later time', () => {
    const promise = new Promise((resolve) => {
      return setTimeout(() => {
        resolve('async')
      }, 500);
    });

    return promise
      .then(value => {
        expect(value).toBe('async');
      });
  });

  test('5. You can also nest promises, resolving/rejecting the same as above', () => {
    const innerPromise = new Promise(resolve => resolve('inner promise!'));

    const promise = new Promise((resolve) => {
      return resolve(innerPromise);
    });

    return promise
      .then(val => {
        expect(val).toBe('inner promise!')
    });
  });
});