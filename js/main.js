// Elements
const notesWrapper = document.querySelector(".notes-wrapper")
const btnAddNote = document.querySelector(".add-note")
const newNoteWindow = document.querySelector(".new-note-window")
const editNoteWindow = document.querySelector(".edit-note-window")

const btnApply = document.querySelector(".new-note__apply")
const btnCancel = document.querySelector(".new-note__cancel")
const btnApplyEdit = document.querySelector(".edit-note__apply")
const btnCancelEdit = document.querySelector(".edit-note__cancel")

const editNoteInput = document.querySelector(".edit-note-input")
const newNoteInput = document.querySelector(".new-note-input")

const overlay = document.querySelector(".overlay")

const emptyImg = document.querySelector(".empty-block")


// Logical
const isEmpty = () => {
    if (notesWrapper.children.length === 0) {
        // emptyImg.style.display = 'flex'
        emptyImg.classList.add('show-f')

    } else {
        // emptyImg.style.display = 'none'
        emptyImg.classList.add('hide')
        emptyImg.classList.remove('show-f')
    }
}

const changeWindowVisibility = () => {
    overlay.classList.toggle('show-f')
    isEmpty()
}
const addNoteWindow = () => {
    newNoteWindow.classList.toggle('show-f')
    changeWindowVisibility()
}

let noteID = 0
const createNote = (text) => {
    const newDiv = document.createElement('div')
    newDiv.classList.add('note', 'f-sb-c-r', `note-${noteID}`)
    notesWrapper.appendChild(newDiv)

    const noteContent = document.createElement('div')
    noteContent.classList.add('note__cac', 'f-c-c-r')
    newDiv.appendChild(noteContent)

    const noteCheckbox = document.createElement('input')
    noteCheckbox.type = 'checkbox'

    const noteText = document.createElement('h3')
    noteText.textContent = `${text}`
    noteContent.append(noteCheckbox, noteText)

    const noteButtons = document.createElement('div')
    noteButtons.classList.add('note__btns', 'f-c-c-r')
    newDiv.appendChild(noteButtons)

    const noteEdit = document.createElement('button')
    noteEdit.classList.add('note-edit')

    const noteDelete = document.createElement('button')
    noteDelete.classList.add('note-delete')
    noteButtons.append(noteEdit, noteDelete)

    // let divider = document.createElement('div')
    // divider.classList.add('note-line')
    // notesWrapper.appendChild(divider)

    noteDelete.addEventListener('click', () => {
        newDiv.remove()
        isEmpty()
    });

    noteEdit.addEventListener('click', () => {
        const noteInput = document.createElement('input');
        noteInput.classList.add('text-input')
        noteContent.insertBefore(noteInput, noteText)
        noteInput.value = noteText.textContent
        noteInput.focus();
        noteText.remove()

        noteInput.onblur = () => {
            noteContent.insertBefore(noteText, noteInput)
            noteText.textContent = noteInput.value
            noteInput.remove()
        }
    });

    noteID++
    isEmpty()
}

// Events
btnAddNote.onclick = () => {
    addNoteWindow()
}

btnCancel.onclick = () => {
    addNoteWindow()
}
btnApply.onclick = () => {
    createNote(newNoteInput.value)
    newNoteInput.value = ''
    addNoteWindow()
}