const cycleWeek = (weekDays) => {
  let dayOfTheWeek = [
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    'п"ятниця',
    "субота",
    "неділя",
  ];
  let message = alert("сьогодні" + weekDays[0]);
  for (let i = 0; i <= dayOfTheWeek.length - 1; i++) {
    message = alert('сьогодні', dayOftRheWeek[i], 'хочеш знати, що буде завтра?');
  }
  return message;
};

let dayOftRheWeek = prompt("хочеш знати, що буде завтра?", "так, звісно");
cycleWeek = (dayOftRheWeek);