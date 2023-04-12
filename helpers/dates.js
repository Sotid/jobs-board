const getDateDif = (targetDate) => {
  const jobDate = new Date(targetDate);
  const currentDate = new Date();
  if(jobDate > currentDate) throw Error('The date must be in the past');
  const diff = Math.abs(currentDate - jobDate);
  console.log(jobDate, currentDate)
  return { minutes: Math.floor(diff / 60000),
           hours: Math.floor(diff / (1000 * 60 * 60)), 
           days: Math.floor(diff / (1000 * 60 * 60 * 24)),
           weeks: Math.floor(diff / (1000 * 60 * 60 * 24 * 7))
        };
};

// export const publishedDate = (index: number) => {
//   const { minutes, hours, days, weeks } = getDateDif(index);
// if(menos de 60 minutos ==> minutes){}
// if(mas= de 60 minutos < 1440 minutos ==> horas){}
// if(mas= de 1440 minutos < 10080 minutos ==> weeks){}

// }

module.exports = getDateDif;