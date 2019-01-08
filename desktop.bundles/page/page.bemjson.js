module.exports = {
    block: 'page',
    title: 'My FIRST BEM project:)',
    // favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        {
            elem: 'meta',
            attrs: {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }
        },
        { elem: 'css', url: 'page.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'page.min.js' }],
    mods: { theme: 'islands' },
    content: [
        { block: 'header', mix: { block: 'page', elem: 'header' }, content: 'This is the header.' },
        { block: 'main', mix: { block: 'page', elem: 'main' }, content: 'This is the main content.' },
        { block: 'aside', mix: { block: 'page', elem: 'aside' }, content: 'This is an aside section.' },
        { block: 'nav', mix: { block: 'page', elem: 'nav' }, content: 'This is the navigation section.' },
        { block: 'footer', mix: { block: 'page', elem: 'footer' }, content: 'This is the footer.' }
    ]
};
