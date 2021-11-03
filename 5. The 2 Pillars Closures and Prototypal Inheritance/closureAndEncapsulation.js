const makeNuclearButton = () => {
  let timeWithoutDestruction = 0
  const passTime = () => timeWithoutDestruction++
  const totalPeaceTime = () => timeWithoutDestruction

  const launch = () => {
    timeWithoutDestruction = -1
    return 'Bummmmmm'
  }

  setInterval(passTime, 1000)
  return {
    launch: launch,
    totalPeaceTime: totalPeaceTime
  }
}
const ohh = makeNuclearButton()
console.log(ohh.launch)
