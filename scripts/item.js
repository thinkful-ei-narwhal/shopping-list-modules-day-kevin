function validateName(name) {
  if (name === '') {
    throw new TypeError('No Input');
  } else {
    return;
  }
}

const create = function (name) {
  return {
    id: cuid(),
    name: name,
    checked: false
  };
};

export default {
  validateName,
  create,
};
