const db = firebase.database();
const listaAdmin = document.getElementById('listaAdmin');
const input = document.getElementById('novoItem');

function adicionarItem() {
  const nome = input.value.trim();
  if (nome) {
    db.ref('presentes').push({ nome, comprado: false });
    input.value = '';
  }
}

db.ref('presentes').on('value', snapshot => {
  listaAdmin.innerHTML = '';
  snapshot.forEach(child => {
    const li = document.createElement('li');
    li.textContent = child.val().nome + (child.val().comprado ? ' (comprado)' : '');
    listaAdmin.appendChild(li);
  });
});
