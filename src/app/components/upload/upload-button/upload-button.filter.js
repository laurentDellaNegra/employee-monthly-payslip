// modules import
import angular from 'angular';

/**
 * Filter converting csv into string object
 * @return object   string object employee
 */
const csvToObj = () => {
  return (input) => {
    const rows = input.split('\n');
    const obj = [];
    // we ignore the first row because it contains header
    for (let i = 1; i <= rows.length; i++) {
      let line = rows[i];
      if (line) {
        let cell = line.split(',');
        obj.push({
          firstName: cell[0],
          lastName: cell[1],
          annualSalary: cell[2],
          superRate: cell[3],
          startDate: cell[4]
        });
      }
    }
    return obj;
  }
};

// export filter
export default csvToObj;
