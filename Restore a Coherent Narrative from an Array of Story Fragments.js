const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];
function compactFragments(arr) {
  let piled = [];
  for (const element of arr) {
    if (element !== undefined) {
      piled.push(element)
    }
  }
  if (piled.length < arr.length) {
    console.log("[COMPACTED]");
  }
  return piled
}

const compactedShuffledFragments = compactFragments(shuffledFragments)

function sortFragments(arr) {
  let results = [...arr];
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let now = results[i];
    while (j >= 0 && results[j].id > now.id) {
      results[j + 1] = results[j]
      j--
    }

    results[j + 1] = now
  }


  return results
}
const sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments(arr) {
  let piled = [];
  let seenIds = [];
  for (let i = 0; i < arr.length; i++) {
    if (seenIds.includes(arr[i].id)) {
      console.log("[DEDUPED]");
    } else {
      piled.push(arr[i])
      seenIds.push(arr[i].id)
    }
  } return piled
}
const dedupedFragments = dedupeFragments(sortedFragments)
function fillMissingFragments(arr) {
  let results = []
  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i])
    if (i + 1 < arr.length) {
      let now = arr[i].id;
      let next = arr[i + 1].id;
      for (let missingId = now + 1; missingId < next; missingId++){
      let filler = {
          id: missingId,
          text: "[...]",
        }
        results.push(filler)
        console.log("[FILLED]");
      }
    } 
  }return results
}
console.log(fillMissingFragments([{ id: 1, text: "a" }, { id: 3, text: "c" }]))
const filledFragments = fillMissingFragments(dedupedFragments)
function assembleStory (arr){
let results = [];
for(let i = 0 ; i < arr.length ; i++){
  results.push(arr[i].text)
}return results.join("\n")
}
console.log(assembleStory(filledFragments) )