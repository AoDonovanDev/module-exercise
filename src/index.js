import {choice, remove} from "./helpers"
import {foods} from "./foods"
console.log(choice, remove, foods)
const rmv = choice(foods)
console.log(`I'd like one ${rmv}, please`)
console.log(`Here you go: ${rmv}`)
console.log("Delicious! May I have another?")
remove(foods, rmv)
console.log(`I'm sorry, we're all out. We have ${foods} left`)