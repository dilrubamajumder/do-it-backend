const formatDateForDb = (date) => {
    if (date.includes('-')) {
        return date;
      }
    const [month, day, year] = date.split('/'); 
    return `${year}-${month}-${day}`;
};

module.exports = {formatDateForDb };