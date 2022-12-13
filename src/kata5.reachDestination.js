const reachDestination = (distance, speed) => {
  const totalTime = distance / speed;

  const timeRounded = (totalTime) => { Math.round(totalTime * 2) / 2;}

  return `I should be there in ${totalTime} hours`;
};

module.exports = reachDestination;
