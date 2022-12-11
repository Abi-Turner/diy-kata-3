function joinNames (users) {
  const userNames = users.map((user) => {
   return `${user.name}`;
  });

  const everyone = userNames.reduce((acc, curr, index) => {
    if (index < userNames.length - 1) {
      return `${acc}, ${curr}`;
      // eslint-disable-next-line no-else-return
    } else {
      return `${acc} & ${curr}`;
    }
  });

  return everyone;
};


module.exports = joinNames;