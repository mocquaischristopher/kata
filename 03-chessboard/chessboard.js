function chess(size) {
  let array = '';

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((j + i) % 2 == 0) {
        array += ' ';
      } else {
        array += '#';
      }
    }
    array += '\n';
  }
  return array;
}
chess(8);