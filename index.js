/**
 * pad
 * Ex. ([{x, y}, {x, y}]) => {x, y}
 *
 *
 * @param {Object[]} vertices - [{x, y}]
 * @returns
 */
const calculateCentroid = (vertices) => {
  let centroidX = 0;
  let centroidY = 0;
  let area = 0;

  for (let i = 0; i < vertices.length; i++) {
    let currentVertex = vertices[i];
    let nextVertex = vertices[(i + 1) % vertices.length];

    let crossProduct =
      currentVertex.x * nextVertex.y - nextVertex.x * currentVertex.y;
    area += crossProduct;

    centroidX += (currentVertex.x + nextVertex.x) * crossProduct;
    centroidY += (currentVertex.y + nextVertex.y) * crossProduct;
  }

  area /= 2;
  centroidX /= 6 * area;
  centroidY /= 6 * area;

  return { x: centroidX, y: centroidY };
};

const sumBy = (arr = [], key) => {
  let result = arr.reduce((init, cur) => {
    return init + cur[key];
  }, 0);

  return result;
};

const sum = (arr = []) => {
  let result = arr.reduce((init, cur) => {
    return init + cur;
  }, 0);

  return result;
};

const marge = (arr = []) => {
  let result = arr.reduce((init, cur) => {
    return [...init, ...cur];
  }, []);
  return result;
};

const margeBy = (arrObj = [], key) => {
  let temp = {};
  arrObj.forEach((arr) => {
    arr.forEach((obj) => {
      temp[obj[key]] = {
        ...(temp[obj[key]] || {}),
        ...obj,
      };
      delete temp[obj[key]][key];
    });
  });

  return Object.keys(temp).map((k) => ({
    [key]: k,
    ...temp[k],
  }));
};
const getVal = (obj, key) => {
  let val = obj;
  const keys = key.split(".");
  keys.forEach((k) => {
    val = val[k] || "-";
  });
  return val;
};

const compoundObject = (arr, key) => {
  const obj = {};
  arr.forEach((data) => {
    obj[getVal(data, key)] = data;
  });
  return obj;
};

const compoundArrayFormat = (arr, key, format = (d) => d) => {
  const obj = {};
  arr.forEach((data) => {
    if (obj[`${format(getVal(data, key))}`]) {
      obj[`${format(getVal(data, key))}`].push(data);
    } else {
      obj[`${format(getVal(data, key))}`] = [data];
    }
  });
  return obj;
};

const compoundArray = (arr, key) => {
  const obj = {};
  arr.forEach((data) => {
    if (obj[`${getVal(data, key)}`]) {
      obj[`${getVal(data, key)}`].push(data);
    } else {
      obj[`${getVal(data, key)}`] = [data];
    }
  });
  return obj;
};

module.exports = {
  compoundArray,
  compoundArrayFormat,
  compoundObject,
  margeBy,
  marge,
  sum,
  sumBy,
  calculateCentroid,
};
