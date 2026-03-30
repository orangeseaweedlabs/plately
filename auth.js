// ================================================================
//  auth.js — Shared auth helpers
//  Include AFTER supabase.js on every protected page.
// ================================================================

/**
 * Checks for an active session. If none, redirects to login.html.
 * Usage:  const user = await requireAuth();
 *         if (!user) return;   // redirect already triggered
 */
async function requireAuth() {
  const { data: { session }, error } = await db.auth.getSession();
  if (error || !session) {
    window.location = 'login.html';
    return null;
  }
  return session.user;
}

/**
 * Sign the current user out and redirect to login.
 */
async function signOut() {
  await db.auth.signOut();
  window.location = 'login.html';
}

/**
 * Renders the user avatar / initials in the top-bar element #user-avatar
 * if it exists on the page. Call after requireAuth().
 */
function renderAvatar(user) {
  const el = document.getElementById('user-avatar');
  if (!el || !user) return;
  const avatarUrl = user.user_metadata?.avatar_url;
  const name      = user.user_metadata?.full_name || user.email || '';
  const initial   = name.charAt(0).toUpperCase();

  if (avatarUrl) {
    el.innerHTML = `<img src="${avatarUrl}" alt="${name}"
      style="width:34px;height:34px;border-radius:50%;object-fit:cover;cursor:pointer;"
      onclick="signOut()" title="Sign out"/>`;
  } else {
    el.innerHTML = `<button class="icon-btn" onclick="signOut()" title="Sign out"
      style="font-size:.75rem;font-weight:700;">${initial}</button>`;
  }
}

// ── Global auth-state listener ────────────────────────────────────
// Automatically redirect to login if the session expires mid-session.
db.auth.onAuthStateChange((event) => {
  if (event === 'SIGNED_OUT') window.location = 'login.html';
});
