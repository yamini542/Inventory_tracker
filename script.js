const apiUrl = https://68302a5bf504aa3c70f69ada.mockapi.io/inventory-api/items';

const form = document.getElementById('item-form');
const list = document.getElementById('inventory-list');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const quantity = document.getElementById('quantity').value;
  const price = document.getElementById('price').value;

  await fetch(apiUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ name, quantity, price })
  });

  form.reset();
  loadItems();
});

async function loadItems() {
  const res = await fetch(apiUrl);
  const items = await res.json();

  list.innerHTML = items.map(item => `
    <div>
      <strong>${item.name}</strong> - ${item.quantity} pcs @ £${item.price}
    </div>
  `).join('');
}

loadItems();
