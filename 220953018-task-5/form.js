
const usernameField = document.getElementById('username');
const ageField = document.getElementById('age');
usernameField.addEventListener('blur', function() {
  console.log('Username field lost focus');
});
ageField.addEventListener('change', function() {
  console.log('Age field value changed');

});
