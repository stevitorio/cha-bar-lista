const db = firebase.database();
const lista = document.getElementById('lista-presentes');

db.ref('presentes').on('value', snapshot => {
  lista.innerHTML = '';
  snapshot.forEach(child => {
    const li = document.createElement('li');
    const item = child.val();
    li.textContent = item.nome;
    if (item.comprado) {
      li.classList.add('comprado');
      li.textContent += ' (Já comprado)';
    } else {
      const botao = document.createElement('button');
      botao.textContent = 'Eu comprei';
      botao.onclick = () => {
        db.ref('presentes/' + child.key).update({ comprado: true });
      };
      li.appendChild(botao);
    }
    lista.appendChild(li);
  });
});
