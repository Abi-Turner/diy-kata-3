const reachDestination = (distance, speed) => {
  const totalTime = distance / speed;
  const timeRounded = totalTime;
  
  return `I should be there in ${timeRounded} hours`;
};

module.exports = reachDestination;
