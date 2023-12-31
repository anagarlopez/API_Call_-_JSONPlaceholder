const table = document.getElementById('usersTable');
const form = document.getElementById('userForm');
const nameElement = document.getElementById('name');
const phoneElement = document.getElementById('phone');
const cityElement = document.getElementById('city');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${user.id}</td><td>${user.name}</td><td>${user.address.city}</td>`;
      table.appendChild(row);
    });
    console.log(users);
  });



form.addEventListener('submit', event => {
  event.preventDefault();
  const id = form.elements.id.value;
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
      nameElement.textContent = user.name;
      phoneElement.textContent = user.phone;
      cityElement.textContent = user.address.city;
    });
});
  