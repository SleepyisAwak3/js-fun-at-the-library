function createTitle(bookIdea) {
  return `The ${bookIdea}`
  
};
function buildMainCharacter(charName,charAge,charPronouns) {
var characterTraits = {
  name:`${charName}`,
  age: `${charAge}`,
  pronouns:`${charPronouns}`
 } 
 return characterTraits
}

function saveReview() {

}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}