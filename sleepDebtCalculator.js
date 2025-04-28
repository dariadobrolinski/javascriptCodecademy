const getSleepHours = (day) => {
    switch (day) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 7;
      case 'wednesday':
        return 6; 
      case 'thursday':
        return 5; 
      case 'friday':
        return 8; 
      case 'saturday':
        return 9; 
      case 'sunday':
        return 7; 
      default:
        return 'Invalid day';
    }
  };
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
  }
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got ${actualSleepHours - idealSleepHours} hours more sleep than needed.`);
    } else {
      console.log(`You slept ${idealSleepHours - actualSleepHours} hours less than the ideal. You should get some rest.`);
    }
  };
  
  calculateSleepDebt()
  