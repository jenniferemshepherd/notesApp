var Practice = require ('../src/practice.js')

describe ('practice', function() {
  it('says hello, Dom', function() {
    var practice = new Practice()
    expect(practice.hello()).toEqual("hello, Dom")
  });
});
