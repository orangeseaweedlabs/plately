// ================================================================
//  nav.js — Renders the bottom nav and marks the active item.
//  Usage:  <script src="nav.js"></script>  (after body renders)
//          renderNav('home' | 'dishes' | 'meals' | 'ingredients' | 'groceries');
// ================================================================

function renderNav(active) {
  const items = [
    { key: 'home',        icon: '🏠', label: 'Home',        href: 'index.html'       },
    { key: 'dishes',      icon: '🍽', label: 'Dishes',      href: 'dishes.html'      },
    { key: 'meals',       icon: '📅', label: 'Meals',       href: 'meals.html'       },
    { key: 'ingredients', icon: '🥗', label: 'Ingredients', href: 'ingredients.html' },
    { key: 'groceries',   icon: '🛒', label: 'Groceries',   href: 'groceries.html'   },
  ];

  const nav = document.getElementById('bottom-nav');
  if (!nav) return;

  nav.innerHTML = items.map(it => `
    <button class="nav-item${it.key === active ? ' active' : ''}"
      onclick="window.location='${it.href}'">
      <span class="nav-icon">${it.icon}</span>${it.label}
    </button>
  `).join('');
}
