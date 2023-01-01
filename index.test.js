const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const output = utils.trimProperties(input)
    expect(input).toEqual(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)

  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const output = utils.trimPropertiesMutation(input)
    expect(output).toEqual(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {

  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 2 },{ integer: 4 }, { integer: -1 }]
    const expected = 4
    const actual = utils.findLargestInteger(input)
    expect(actual).toEqual(expected) 
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    let result = counter.countDown()
    let expected = 3
    expect(result).toEqual(expected)

  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    let result = counter.countDown()
    let expected = 2
    expect(result).toEqual(expected)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    let repeat = 5;
    let result;
    let expected = 0
    for (let i=0; i< repeat; i++ ) {
      result = counter.countDown()
    }
    expect(result).toEqual(expected)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    let repeat = 1;
    let result;
    let expected = "summer"
    for (let i=0; i< repeat; i++ ) {
      result = seasons.next()
    }

    expect(result).toEqual(expected)
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    let repeat = 2;
    let result;
    let expected = "fall"
    for (let i=0; i< repeat; i++ ) {
      result = seasons.next()
    }

    expect(result).toEqual(expected)
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    let repeat =3;
    let result;
    let expected = "winter"
    for (let i=0; i< repeat; i++ ) {
      result = seasons.next()
    }

    expect(result).toEqual(expected)
  })

  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    let repeat = 4;
    let result;
    let expected = "spring"
    for (let i=0; i< repeat; i++ ) {
      result = seasons.next()
    }

    expect(result).toEqual(expected)

  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let repeat = 5;
    let result;
    let expected = "summer"
    for (let i=0; i< repeat; i++ ) {
      result = seasons.next()
    }

    expect(result).toEqual(expected)
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let repeat = 40;
    let result;
    let expected = "spring"
    for (let i=0; i< repeat; i++ ) {
      result = seasons.next()
    }

    expect(result).toEqual(expected)
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    const result = focus.drive(600)
    const expected = 600
    expect(result).toEqual(expected)

  })
  test('[16] driving the car uses gas', () => {
    focus.drive(600)
    const result = focus.tank
    const expected = 0
    expect(result).toEqual(expected)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    const result = focus.refuel(600)
    const expected = 600
    expect(result).toEqual(expected)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(600)
    const actual = focus.tank
    const expected = 20
    expect(actual).toEqual(expected)

  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    let actual = await utils.isEvenNumberAsync(2)
    let expected = true
    expect(actual).toEqual(expected)

  })
  test('[20] resolves false if passed an odd number', async () => {
    let actual = await utils.isEvenNumberAsync(3)
    let expected = false
    expect(actual).toEqual(expected)

  })
})
