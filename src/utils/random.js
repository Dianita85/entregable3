const getRandomNumber = (limit) => {
      {/*Random number 0--> 0.999 --> 0--> 125.9999 --> 1-->126*/}
      return Math.floor( Math.random() * limit) + 1
}
export default getRandomNumber


