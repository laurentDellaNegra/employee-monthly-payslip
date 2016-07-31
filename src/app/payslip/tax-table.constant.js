/**
 * Contains Tax table
 * @type {Array<objet>}
 */
const taxTable = [
  { min:0, max:18200, base:0, tax:0 },
  { min:18201, max:37000, base:0, tax:0.19 },
  { min:37001, max:80000, base: 3572, tax: 0.325 },
  { min:80001, max:180000, base: 17545, tax: 0.37 },
  { min:180001, max:999999999999, base: 54547, tax: 0.45 }
];

// export array
export default taxTable;
