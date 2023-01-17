const convertedDate = (date: string) => {
  const newDate = new Date(date);

  const month = newDate.toLocaleString("en-US", { month: "long" });

  const day = newDate.getDate();

  const year = newDate.getFullYear();

  type TNumberSuffixes = "th" | "st" | "nd" | "rd";

  const nthNumber = (number: number): TNumberSuffixes => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const convertedDate = `${month} ${day}${nthNumber(day)}, ${year}`;

  return convertedDate;
};

export default convertedDate;
