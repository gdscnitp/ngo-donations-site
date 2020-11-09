module.exports = {
  random16BaseString(length = 15) {
    // at max a length of 18 can be returned, since Math.random() was returning 15-18 decimal places
    return Math.random().toString(16).substr(2, length);
  },
  randomBinaryString(length = 15) {
    return Math.random().toString(2).substr(2, length);
  },
};
