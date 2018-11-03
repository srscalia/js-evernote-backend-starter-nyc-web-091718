document.addEventListener('DOMContentLoaded', () => {

  fetch(`http://localhost:3000/api/v1/notes`)
    .then((responseObject) => responseObject.json())
    .then((notesJSONDATA)=>{
      console.log(notesJSONDATA)
    }) //end of the last then


})// end of the DOMContentLoaded event listener
