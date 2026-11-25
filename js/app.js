const EQUIPMENT = {
  bw: 'No equipment',
  hh: 'Household (chair, wall, towel)',
  db: 'Dumbbells',
  sb: 'Sandbag or backpack',
  gym: 'Bench, ball or bar'
};

const list = document.getElementById('list');
const search = document.getElementById('search');
const selCategory = document.getElementById('filter-category');
const selEquipment = document.getElementById('filter-equipment');
const count = document.getElementById('count');
const empty = document.getElementById('empty');
const modal = new bootstrap.Modal(document.getElementById('detail'));

function fillSelect(select, allLabel, entries) {
  select.innerHTML = '<option value="">' + allLabel + '</option>' +
    entries.map(([value, label]) => '<option value="' + value + '">' + label + '</option>').join('');
}

function missingBox(cssClass) {
  const box = document.createElement('div');
  box.className = cssClass;
  box.textContent = 'Image available locally only';
  return box;
}

function buildCard(ex) {
  const col = document.createElement('div');
  col.className = 'col-6 col-md-4 col-lg-3';

  const card = document.createElement('div');
  card.className = 'card ex-card h-100';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');

  const img = document.createElement('img');
  img.className = 'ex-thumb';
  img.loading = 'lazy';
  img.alt = ex.name;
  img.src = ex.image;
  img.onerror = () => img.replaceWith(missingBox('ex-thumb-missing'));

  const body = document.createElement('div');
  body.className = 'card-body p-2';
  const name = document.createElement('div');
  name.className = 'ex-name';
  name.textContent = ex.name;
  body.appendChild(name);

  card.append(img, body);
  card.addEventListener('click', () => openDetail(ex));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openDetail(ex);
    }
  });
  col.appendChild(card);
  return col;
}

function openDetail(ex) {
  document.getElementById('detail-title').textContent = ex.name;
  document.getElementById('detail-text').textContent = ex.description;
  document.getElementById('detail-tags').innerHTML =
    '<span class="badge badge-cat me-1">' + ex.category + '</span>' +
    '<span class="badge text-bg-secondary">' + EQUIPMENT[ex.equipment] + '</span>';

  const old = document.getElementById('detail-img');
  const img = document.createElement('img');
  img.id = 'detail-img';
  img.className = 'img-fluid rounded w-100 mb-3';
  img.alt = ex.name;
  img.onerror = () => img.replaceWith(missingBox('detail-img-missing rounded mb-3'));
  img.src = ex.image;
  old.replaceWith(img);

  modal.show();
}

function render() {
  const q = search.value.trim().toLowerCase();
  const cat = selCategory.value;
  const eq = selEquipment.value;
  const result = window.EXERCISES.filter((ex) =>
    (!q || ex.name.toLowerCase().includes(q)) &&
    (!cat || ex.category === cat) &&
    (!eq || ex.equipment === eq));

  list.replaceChildren(...result.map(buildCard));
  count.textContent = result.length + ' of ' + window.EXERCISES.length + ' exercises';
  empty.classList.toggle('d-none', result.length > 0);
}

const categories = [...new Set(window.EXERCISES.map((ex) => ex.category))];
fillSelect(selCategory, 'All categories', categories.map((c) => [c, c]));
fillSelect(selEquipment, 'All equipment', Object.entries(EQUIPMENT));

[search, selCategory, selEquipment].forEach((el) => el.addEventListener('input', render));
render();
