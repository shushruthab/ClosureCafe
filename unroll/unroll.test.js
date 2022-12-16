const unroll = require("./unroll");

const onen = [["a"]];
const twon = [
  [1, 2],
  [3, 4]
]

const threen = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const fourn = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const fiven = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]
const fivenres = [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

});

describe("#unroll", function () {

  it("returns the correct values for small arrays", function () {
    expect(unroll([[]])).toEqual([]);
    expect(unroll([])).toEqual([]);
    expect(unroll(onen)).toEqual(["a"]);
    expect(unroll(twon)).toEqual([1, 2, 4, 3]);
  })
});

describe("#unroll", function () {

  it("returns the correct values for large arrays", function () {
    expect(unroll(threen)).toEqual([1, 2, 3, 6, 9 ,8 ,7, 4, 5]);
    expect(unroll(fourn)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
    expect(unroll(fiven)).toEqual(fivenres);
  })
});
