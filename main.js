// MindfulEcho Application Logic
const posts = window.posts;

const app = document.getElementById('app');

// Router Logic
function router() {
  const hash = window.location.hash;

  if (!hash || hash === '#/') {
    renderHome();
    window.scrollTo(0, 0);
  } else if (hash.startsWith('#/post/')) {
    const postId = hash.split('/')[2];
    const post = posts.find(p => p.id === postId);
    if (post) {
      renderPost(post);
      window.scrollTo(0, 0);
    } else {
      renderNotFound();
    }
  } else {
    renderNotFound();
  }
}

// Components
const Header = () => `
  <header>
    <div class="logo">
      ND_SCAPE
    </div>
    <div class="meta-status">
      SYSTEM STATUS: ONLINE
    </div>
  </header>
`;

const Footer = () => `
  <footer style="margin-top: 6rem; padding: 2rem 0; border-top: 1px solid var(--grid-line); font-family: var(--font-tech); font-size: 0.7rem; color: var(--text-dim); display: flex; justify-content: space-between;">
    <div>&copy; ${new Date().getFullYear()} MINDFUL_ECHO_PROJECT</div>
    <div>/ END_OF_LINE</div>
  </footer>
`;

// Views
function renderHome() {
  const postList = posts.map(post => `
    <article class="story-node" onclick="location.hash='#/post/${post.id}'" style="cursor: pointer;">
      <div class="node-meta">
        <span>RUN_ID: ${Math.floor(Math.random() * 9999)}</span>
        <span style="color: var(--accent-pink);">${post.date}</span>
      </div>
      <div>
        <h2 class="node-title">${post.title}</h2>
        <p class="node-excerpt">${post.excerpt}</p>
      </div>
      <div class="node-link">
        [ Initialize Connection ]
      </div>
      <div class="node-id">${Math.floor(Math.random() * 100)}</div>
    </article>
  `).join('');

  app.innerHTML = `
    <div class="container">
      ${Header()}
      <section style="margin-bottom: 4rem;">
        <h1 style="font-size: 4rem; margin-bottom: 0.5rem;">Mindscape <span style="font-size: 1rem; vertical-align: middle; color: var(--accent-cyan);">// v.2.0.45</span></h1>
        <p style="font-family: var(--font-tech); color: var(--text-dim); max-width: 600px;">
          > ACCESSING ARCHIVES...<br>
          > FRAGMENTS OF CONSCIOUSNESS DETECTED.<br>
          > SELECT A NODE TO INTERFACE.
        </p>
      </section>
      <main class="canvas-grid">
        ${postList}
      </main>
      ${Footer()}
    </div>
  `;
}

function renderPost(post) {
  app.innerHTML = `
    <div class="container">
      ${Header()}
      <main class="detail-view">
        <a href="#/" class="back-link">&lt; RETURN_TO_GRID</a>
        
        <header style="margin-bottom: 4rem;">
           <div class="detail-meta">
            // DATA_LOG: ${post.date} // EST_READ: ${post.readTime}
          </div>
          <h1 style="font-size: 3.5rem; line-height: 1; text-shadow: 0 0 10px rgba(255,255,255,0.2);">${post.title}</h1>
        </header>

        <article class="detail-content">
          ${post.content}
        </article>
      </main>
      ${Footer()}
    </div>
  `;
}

function renderNotFound() {
  app.innerHTML = `
    <div class="container">
      ${Header()}
      <div style="text-align: center; margin-top: 4rem;">
        <h1>404</h1>
        <p>The void stared back, but found nothing.</p>
        <a href="#/" style="margin-top: 1rem; display: inline-block;">Return Home</a>
      </div>
    </div>
  `;
}

// Initialization
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
