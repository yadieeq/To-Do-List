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
        emptyImg.style.display = 'flex'
    } else {
        emptyImg.style.display = 'none'
    }
}

const changeWindowVisibility = () => {
    overlay.style.display == 'block' ? overlay.style.display = 'none' : overlay.style.display = 'block'
    isEmpty()
}
const addNoteWindow = () => {
    newNoteWindow.style.display == 'flex' ? newNoteWindow.style.display = 'none' : newNoteWindow.style.display = 'flex'
    changeWindowVisibility()
}

let noteID = 0
const createNote = (text) => {
    let newDiv = document.createElement('div')
    newDiv.classList.add('note', 'f-sb-c-r', `note-${noteID}`)
    notesWrapper.appendChild(newDiv)

    let noteContent = document.createElement('div')
    noteContent.classList.add('note__cac', 'f-c-c-r')
    newDiv.appendChild(noteContent)

    let noteCheckbox = document.createElement('input')
    noteCheckbox.type = 'checkbox'
    let noteText = document.createElement('h3')
    noteText.textContent = `${text}`
    noteContent.append(noteCheckbox, noteText)

    let noteButtons = document.createElement('div')
    noteButtons.classList.add('note__btns', 'f-c-c-r')
    newDiv.appendChild(noteButtons)

    let noteEdit = document.createElement('button')
    noteEdit.classList.add('note-edit', )
    let noteDelete = document.createElement('button')
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
        editNoteWindow.style.display = 'flex'
        editNoteInput.value = noteText.textContent
        changeWindowVisibility()

        btnApplyEdit.onclick = () => {
            noteText.textContent = editNoteInput.value
            editNoteWindow.style.display = 'none'
            changeWindowVisibility()
        }

        btnCancelEdit.onclick = () => {
            editNoteWindow.style.display = 'none'
            changeWindowVisibility()
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
