// challenge 1
const greetWorld = () => {
  return 'Hello, World!'
};

// challenge 2
const canIVote = age => {
    if (age >= 18) {
        return true
    } else {
        return false
    }
};

// challenge 3
const agreeOrDisagree = (string1, string2) => {
    if (string1 === string2) {
      return 'You agree!';
    } else {
      return 'You disagree!';
    }
  };

// challenge 4
const lifePhase = age => {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
        return 'teen'
    } else if (age < 65) {
        return 'adult'
    } else {
        return 'senior citizen'
    }
};

// challenge 5
const finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
};