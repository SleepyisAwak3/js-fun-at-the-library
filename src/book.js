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

function saveReview(string,reviews) 
{
if (reviews.includes(string) !== true ) { 
  reviews.push(string) 
  }  
}

function calculatePageCount() {
  bookTitle.length
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}