document.getElementById('add-proposition').addEventListener('click', () => {

  const div = document.createElement('div');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Texte de la proposition...';
  input.required = true;

  div.appendChild(checkbox);
  div.appendChild(input);

  document.getElementById('propositions').appendChild(div);
});