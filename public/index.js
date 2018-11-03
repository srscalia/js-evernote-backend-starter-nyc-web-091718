document.addEventListener('DOMContentLoaded', () => {
  /*****************************************************************************
   * All of our variables and data.
   ****************************************************************************/
  let notes = []
  const notesContainer = document.getElementById('notes')

  /*****************************************************************************
     * On load fetch actions
   ****************************************************************************/
  // fetch is a asynchronous function for sending HTTP requests
  // The Promise object represents the eventual completion (or failure) of an asynchronous operation; .then is expecting a function definition not invocation. It will run your function once the promise has resolved.
  fetch(`http://localhost:3000/api/v1/notes`)
    .then((responseObject) => responseObject.json())
    .then((notesJSONDATA)=>{
      notes = notesJSONDATA
      notesContainer.innerHTML += renderNotes(notes)


    }) //end of the last then

  /*******************************************************************************
  * Helper functions
  ******************************************************************************/
    const renderNotes = (notes) => {
      return notes.map((note) => {
        return `
          <tr data-id="${note.id}" class="note">
            <td>
              <b>${note.title}</b>
              <div>${note.body.slice(0, 50)}... </div>
            </td>
          </tr>
        `
      }).join('')
    }

})// end of the DOMContentLoaded event listener
