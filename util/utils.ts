const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getMonthAndYear = (date: Date) => {
  const year = date.getFullYear();
  const monthName = date.toLocaleString("default", { month: "long" }); // Get the full month name
  return {
    year:year.toString(),
    monthName:monthName,
  };
};

function extractUUID(str:string) {
  const regex = /^([A-Z0-9-]+)\/L0\/001$/;
  const match = str.match(regex);
  
  if (match) {
    return match[1];
  } else {
    return null; // Or handle the error as needed
  }
}

export { formatDate, getMonthAndYear,extractUUID };
