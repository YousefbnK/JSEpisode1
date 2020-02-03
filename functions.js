/**
 * greet(name):
 * - optionally receives a name
 * - logs "Hello" if there is no name
 * - logs "Hello <name>" if there is a name
 */
function greet(name) {
  // Your code here
  if (name) {
    console.log(`Hello ${name}`);
  } else console.log("Hello");
}
greet("Yousef");
/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 */
function isOdd(n) {
  // Your code here
  return n % 2 !== 0;
  // if (n % 2 !== 0) return true;
  // else return false;
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 *
 * Hint: you can solve this without writing any loops!
 */
function oddsSmallerThan(n) {
  // Your code here
  if (isOdd(n)) {
    n--;
  }
  return n / 2;
  // if (isOdd(n)) {
  //   return (n - 1) / 2;
  // } else return n / 2;

  // if (n === 0 || isNaN(n)) {
  //   return n;
  // }
  // --n;
  // return (n % 2) + oddsSmallerThan(n);
}
console.log(oddsSmallerThan(15));

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  // if (isOdd(n))
  if (n % 2 !== 0) {
    return n * n;
  } else if (n % 2 === 0) {
    return n * 2;
  }
}
console.log(squareOrDouble(4));

/**
 * ageFromBirthDate(birthDate):
 * - receives a birthDate as a STRING of the form <YYYYMMDD>
 *   where:
 *     - YYYY is the year
 *     - MM is the month (01 - 12)
 *     - DD is the date
 * - calculates and returns the age in years (rounded down to the nearest year)
 * - assume all birthDates will be valid
 *
 * Hint: you can use JavaScript's Date() class to make things easier
 *
 * e.g. (if we assume that the date today is September 23 2018):
 *    ageFromBirthDate("19870506") -> 31 (because the birthday already passed)
 *    ageFromBirthDate("19971110") -> 20 (because the birthday hasn't passed yet)
 */
function ageFromBirthDate(birthDate) {
  const _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;

  // Your code here

  const year = birthDate.slice(0, 4);
  const month = birthDate.slice(4, 6);
  const day = birthDate.slice(6);

  const today = new Date();
  const dob = new Date(`${year}-${month}-${day}`);
  console.log(today);
  console.log(dob);

  return Math.floor((today - dob) / _MS_PER_YEAR);

  // let dob = new Date(birthDate);
  // return ~~((Date.now() - dob) / _MS_PER_YEAR);
  // let today = new Date();
  // let dob = new Date(birthDate);
  // let age = today.getFullYear() - dob.getFullYear();
  // let m = today.getMonth() - dob.getMonth;
  // if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
  //   age--;
  // }
  // return age;
  // let diff_ms = Date.now() - birthDate.getTime();
  // let age_dt = new Date(diff_ms);
  // return Math.abs(age_dt.getUTCFullYear() - 1970);
}
// console.log(ageFromBirthDate("1990-11-08"));
// console.log(ageFromBirthDate(new Date(1990, 11, 08)));

ageFromBirthDate("19901108");

module.exports = {
  greet,
  isOdd,
  oddsSmallerThan,
  squareOrDouble,
  ageFromBirthDate
};
