// object time meal 
const allmeals = [
    { name: "breakfast", time: "7:00 a.m." },
    { name: "lunch", time: "12:00 p.m." },
    { name: "dinner", time: "7:00 p.m." },
]

// function that converts time in minutes 
const TimeinMinutes = (currentTime) => {
    const [time, ampm] = currentTime.split(" ");
    let [hours, minutes] = time.split(":").map(Number)
    return ampm === 'a.m.' || hours === 12 ? hours * 60 + minutes : (hours + 12) * 60 + minutes

}

// function that converts time in hours from minutes
const minutesToHours = (timeMinutes) => {
    const hours = Math.floor(timeMinutes / 60);
    const minutes = timeMinutes % 60;
    return [hours, minutes]
}


// time to eat function which returns the hours and minutes to the next meal
function timeToEat(currentTime) {
    let currentTimeInMinutes = TimeinMinutes(currentTime);
    const nextmeal = allmeals.find((meal) => TimeinMinutes(meal.time) > currentTimeInMinutes)

    if (!nextmeal) {
        const minutesDiff = TimeinMinutes('7:00 a.m.') + 24 * 60 - currentTimeInMinutes;
        return minutesToHours(minutesDiff)
    }
    const minutesDiff = TimeinMinutes(nextmeal.time) - currentTimeInMinutes;

    return minutesToHours(minutesDiff)

}

console.log(timeToEat("8:00 p.m."))


// 