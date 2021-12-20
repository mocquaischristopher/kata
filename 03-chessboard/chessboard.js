export function chess(size) {
  let array = [];


  for (let i = 1; i <= size; i++) {
    array.push(i % 2 == 0 ? '# # # #' : ' # # # #');
  }
  console.log(array[1]);
  return array;
}
chess(8);