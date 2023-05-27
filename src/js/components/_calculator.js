const table = [
  [750, 810, 970],
  [860, 910, 1090],
  [930, 990, 1190],
  [1020, 1160, 1390],
  [1110, 1190, 1430],
  [1280, 1470, 1750],
  [1460, 1600, 1920],
  [1590, 1720, 2070],
  [1630, 1760, 2110],
  [2010, 2280, 2730],
  [2050, 2320, 2790],
  [2160, 2350, 2820],
  [2220, 2370, 2850],
  [2520, 2910, 3460],
];


function calculatePrice(width, height, doorsType, track, table) {
  // determine the column of the table to use based on the height
  let col;
  if (height < 2100) {
    return 'Invalid height';
  } else if (height >= 2100 && height < 2400) {
    col = 1;
  } else if (height >= 2400 && height < 2700) {
    col = 2;
  } else if (height === 2700) {
    col = 3;
  } else {
    return 'Invalid height or number of doors';
  }


  // determine the row of the table to use based on the width and track type
  let row;
    if (width >= 1200 && width < 1500) {
      row = 1;
    } else if (width >= 1500 && width < 1800) {
      row = 2;
    } else if (width >= 1800 && width < 2100) {
      row = 3;
    } else if (width >= 2100 && width < 2400) {
      row = 4;
    } else if (width >= 2400 && width < 2700) {
      row = 5;
    } else if (width >= 2700 && width < 3000) {
      row = 6;
    } else if (width >= 3000 && width < 3300) {
      row = 7;
    } else if (width >= 3300 && width < 3600) {
      row = 8;
    } else if (width >= 3600 && width < 3900) {
      row = 9;
    } else if (width >= 3900 && width < 4200) {
      row = 10;
    }else if (width >= 4200 && width < 4500) {
      row = 11;
    }else if (width >= 4500 && width < 4800) {
      row = 12;
    }else if (width >= 4800 && width < 5100) {
      row = 13;
    } else if (width === 5100) {
      row = 14;
    }
     else {
      return 'Invalid width';
    }




  // retrieve the price from the table based on the row and column

    let price = table[row - 1][col-1];

    if (track === "triple") {
      price += 60;
    }

    if (doorsType === "Slimline") {
      price *= 1.15;
    }

    return `Total ${Math.floor(price)}$ Inc GST`;

  }

  export default calculatePrice;

