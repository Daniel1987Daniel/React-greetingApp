function greeting(name) {
  const date = new Date()
  const hours = date.getHours()
  console.log(hours)

  let currentTime

  if(hours >= 4 && hours < 12) {
    currentTime = "morning"
  } else if (hours >= 12 && hours < 17) {
    currentTime = "afternoon"
  } else if (hours >= 17 && hours < 20) {
    currentTime = "evening"
  } else {
    currentTime = "night"
  }
  
    return `Good ${currentTime}, ${name}! `
}

console.log(greeting("Bob"))