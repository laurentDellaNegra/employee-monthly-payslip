import angular from 'angular';

const csvToObj = () => {
  return (input) => {
    const rows = input.split('\n');
    const obj = [];
    // we ignore the first row because contains header
    for (let i = 1; i <= rows.length; i++) {
      let line = rows[i];
      if (line) {
        let o = line.split(',');
        obj.push({
          firstName: o[0],
          lastName: o[1],
          annualSalary: o[2],
          superRate: o[3],
          startDate: o[4]
        });
      }
    }
    return obj;
  }
};

export default csvToObj;
