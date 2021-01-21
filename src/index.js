//start task
module.exports = function toReadable (number) {
  let hundred, decade, nth, num = '';
  let arr = number.toString().split('');
  if(arr.length === 3) {
    switch(arr[0]) {
           case '1': hundred = 'one hundred'; break;
           case '2': hundred = 'two hundred'; break;
           case '3': hundred = 'three hundred'; break;
           case '4': hundred = 'four hundred'; break;
           case '5': hundred = 'five hundred'; break;
           case '6': hundred = 'six hundred'; break;
           case '7': hundred = 'seven hundred'; break;
           case '8': hundred = 'eight hundred'; break;
           case '9': hundred = 'nine hundred'; break;
         }
         if(arr[1] == '1') {
         switch(arr[2]) {
          case '0': nth = 'ten'; break;
          case '1': nth = 'eleven'; break;
          case '2': nth = 'twelve'; break;
          case '3': nth = 'thirteen'; break;
          case '4': nth = 'fourteen'; break;
          case '5': nth = 'fifteen'; break;
          case '6': nth = 'sixteen'; break;
          case '7': nth = 'seventeen'; break;
          case '8': nth = 'eighteen'; break;
          case '9': nth = 'nineteen'; break;
        }
      }
      if(arr[1] !== '1') {
        switch(arr[1]) {
          case '2': decade = 'twenty'; break;
          case '3': decade = 'thirty'; break;
          case '4': decade = 'forty'; break;
          case '5': decade = 'fifty'; break;
          case '6': decade = 'sixty'; break;
          case '7': decade = 'seventy'; break;
          case '8': decade = 'eighty'; break;
          case '9': decade = 'ninety'; break;
        }
      }
      if(arr[1] !== '1'){
        switch(arr[2]) {
          case '1': num = 'one'; break;
          case '2': num = 'two'; break;
          case '3': num = 'three'; break;
          case '4': num = 'four'; break;
          case '5': num = 'five'; break;
          case '6': num = 'six'; break;
          case '7': num = 'seven'; break;
          case '8': num = 'eight'; break;
          case '9': num = 'nine'; break;
        }
      }
  if(hundred&&!decade&&nth&&!num) return `${hundred} ${nth}`;
  if (hundred&&decade&&!nth&&num) return `${hundred} ${decade} ${num}`;
  if (hundred&&decade&&!nth&&!num) return `${hundred} ${decade}`;
  if (hundred&&!decade&&!nth&&num) return `${hundred} ${num}`;
  if (hundred&&!decade&&!nth&&!num) return `${hundred}`;
}
if(arr.length == 2){
  if(arr[0] == '1') {
    switch(arr[1]) {
      case '0': nth = 'ten'; break;
      case '1': nth = 'eleven'; break;
      case '2': nth = 'twelve'; break;
      case '3': nth = 'thirteen'; break;
      case '4': nth = 'fourteen'; break;
      case '5': nth = 'fifteen'; break;
      case '6': nth = 'sixteen'; break;
      case '7': nth = 'seventeen'; break;
      case '8': nth = 'eighteen'; break;
      case '9': nth = 'nineteen'; break;
    }
  }
  switch(arr[0]) {
    case '2': decade = 'twenty'; break;
    case '3': decade = 'thirty'; break;
    case '4': decade = 'forty'; break;
    case '5': decade = 'fifty'; break;
    case '6': decade = 'sixty'; break;
    case '7': decade = 'seventy'; break;
    case '8': decade = 'eighty'; break;
    case '9': decade = 'ninety'; break;
  }
  if(arr[0] !== '1') {
  switch(arr[1]) {
    case '1': num = 'one'; break;
    case '2': num = 'two'; break;
    case '3': num = 'three'; break;
    case '4': num = 'four'; break;
    case '5': num = 'five'; break;
    case '6': num = 'six'; break;
    case '7': num = 'seven'; break;
    case '8': num = 'eight'; break;
    case '9': num = 'nine'; break;
  }
}
  if(!decade&&nth&&!num) return `${nth}`;
  if (decade&&!nth&&num) return `${decade} ${num}`;
  if (decade&&!nth&&!num) return `${decade}`;
}
if (arr.length == 1) {
  switch(arr[0]) {
    case '0': num = 'zero'; break;
    case '1': num = 'one'; break;
    case '2': num = 'two'; break;
    case '3': num = 'three'; break;
    case '4': num = 'four'; break;
    case '5': num = 'five'; break;
    case '6': num = 'six'; break;
    case '7': num = 'seven'; break;
    case '8': num = 'eight'; break;
    case '9': num = 'nine'; break;
  }
  return `${num}`;
}
};
