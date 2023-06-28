const getDateDif = (targetDate) => {
  const jobDate = new Date(targetDate);
  const currentDate = new Date();
  if(jobDate > currentDate) throw Error('The date must be in the past');
  const diff = Math.abs(currentDate - jobDate);
  return { minutes: Math.floor(diff / 60000),
           hours: Math.floor(diff / (1000 * 60 * 60)), 
           days: Math.floor(diff / (1000 * 60 * 60 * 24)),
           weeks: Math.floor(diff / (1000 * 60 * 60 * 24 * 7))
        };
};

const getPublishedDateText = (date) => {
  const { minutes, hours, days, weeks } = getDateDif(date);
if(weeks >= 1){
  return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
}
if(days >= 1){
  return `${days} ${days === 1 ? 'day' : 'days'} ago`;
}
if(hours >= 1){
  return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
}
if(minutes >= 1){
  return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
}
}

module.exports = { getDateDif, getPublishedDateText};