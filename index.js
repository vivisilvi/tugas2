// buttons
const editButton = document.getElementById('editButton')
const editForm = document.getElementById('myForm')

// form items
const formName = document.getElementById('formName')
const formRole = document.getElementById('formRole')
const formAble = document.getElementById('formAble')
const formAge = document.getElementById('formAge')
const formLoc = document.getElementById('formLoc')
const formExperience = document.getElementById('formExperience')
const formMail = document.getElementById('formMail')
const formImage = document.getElementById('formImage')
const submitButton = document.getElementById('submitButton')

// target items
const nameTarget = document.getElementById('nameTarget')
const roleTarget = document.getElementById('roleTarget')
const ableTarget = document.getElementById('ableTarget')
const ageTarget = document.getElementById('ageTarget')
const locTarget = document.getElementById('locTarget')
const experienceTarget = document.getElementById('experienceTarget')
const mailTarget = document.getElementById('mailTarget')
const imageTarget = document.getElementById('imageTarget')

// assign function to edit button
editButton.addEventListener('click', toggleEditForm)
submitButton.addEventListener('click', mySubmitForm)


function toggleEditForm (event) {
  editForm.classList.toggle('hide-content')
}

function mySubmitForm(event) {
  // prevent event bubbling JS
  event.preventDefault()
  // get all values
  const currentName = formName.value
  const currentRole = formRole.value
  const currentAble = formAble.value
  const currentAge = formAge.value
  const currentLocation = formLoc.value
  const currentExperience = formExperience.value
  const currentMail = formMail.value
  const currentFile = formImage.files[0]

  // set all to target
  nameTarget.innerHTML = currentName
  roleTarget.innerHTML = currentRole
  ableTarget.innerHTML = currentAble
  ageTarget.innerHTML = currentAge
  locTarget.innerHTML = currentLocation
  experienceTarget.innerHTML = currentExperience
  mailTarget.innerHTML = currentMail

  // set file to target
  // cek if file exist
  if(currentFile) {
    // bikin instance file reader
    const reader = new FileReader()

    // set function onload nya, pas filereader nya beres, itu mau ngapain
    reader.onload = function (e) {
      imageTarget.src = e.target.result
    }

    // pass the file to file reader
    reader.readAsDataURL(currentFile);

    // log debugging
    console.log(currentFile)
    console.log('file ada')
  }
  
  // hide form nya lagi
  toggleEditForm()
}