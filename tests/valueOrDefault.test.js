var expect = require('chai').expect;
var valueOrDefault = require('../source/valueOrDefault');

describe('valueOrDefault', function() {
    it('should return default value if given undefined', function() {
        var expected = 'foobar';

        var actual = valueOrDefault(undefined, expected);

        expect(actual).to.equal(expected);
    });

    it('should return default value if given null', function() {
        var expected = 'foobaz';

        var actual = valueOrDefault(null, expected);

        expect(actual).to.equal(expected);
    });

    it('should return given value if it is not null or undefined', function() {
        var expected = 'foobaz';

        var actual = valueOrDefault(expected);

        expect(actual).to.equal(expected);
    });

    it('should return the result of executing a function if defaultValue is a function', function() {
        var expected = 4;
        var actual = valueOrDefault(null, function(a, b) {return a - b; }, 7, 3);

        expect(actual).to.equal(expected);
    });
});
