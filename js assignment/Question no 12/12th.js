
const now = new Date();


function addLeadingZero(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}

// Format 1: YYYY-MM-DD HH:mm
const formattedDate1 = `${now.getFullYear()}-${addLeadingZero(now.getMonth() + 1)}-${addLeadingZero(now.getDate())} ${addLeadingZero(now.getHours())}:${addLeadingZero(now.getMinutes())}`;
console.log(`Formatted date 1: ${formattedDate1}`);

// Format 2: DD-MM-YYYY HH:mm
const formattedDate2 = `${addLeadingZero(now.getDate())}-${addLeadingZero(now.getMonth() + 1)}-${now.getFullYear()} ${addLeadingZero(now.getHours())}:${addLeadingZero(now.getMinutes())}`;
console.log(`Formatted date 2: ${formattedDate2}`);

// Format 3: DD/MM/YYYY HH:mm
const formattedDate3 = `${addLeadingZero(now.getDate())}/${addLeadingZero(now.getMonth() + 1)}/${now.getFullYear()} ${addLeadingZero(now.getHours())}:${addLeadingZero(now.getMinutes())}`;
console.log(`Formatted date 3: ${formattedDate3}`);
