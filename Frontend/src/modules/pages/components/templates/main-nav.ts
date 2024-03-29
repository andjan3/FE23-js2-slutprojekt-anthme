const nav = `
<aside class="main-nav">
    <header>
    <nav class="feed">
        <ul></ul>
    </nav>
    </header>

    <div class="dropdowns" id="dropdowns"></div>

    <footer>
    <small>Anthme Inc © 2024. All rights reserved.</small>
    </footer>
</aside>
`;

const feedItem = `
<li>
    <a class="unstyle" href="/__link__">
        <span class="icon material-symbols-outlined">__icon__</span>
        __name__
    </a>
</li>
`;

export { nav, feedItem };
