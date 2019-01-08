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
        {
            block: 'header',
            mix: { block: 'page', elem: 'header' },
            content: [
                {
                    block: 'image',
                    mix: { block: 'header', elem: 'image' },
                    url: '/common.blocks/header/__image/a cat.jpg',
                    alt: 'котик'
                },

                { elem: 'title', content: 'Если БЭМ решил поюзать, скажи мЯу!' },
                {
                    block: 'button',
                    mix: { block: 'header', elem: 'button' },
                    mods: {
                        theme: 'islands',
                        size: 'm',
                        type: 'link',
                        view: 'action'
                    },
                    url: '#',
                    text: 'Попробовать БЭМ'
                }
            ]
        },
        {
            block: 'main',
            mix: { block: 'page', elem: 'main' },
            content: 'This is the main content.'
        },
        {
            block: 'aside',
            mix: { block: 'page', elem: 'aside' },
            content: 'This is an aside section.'
        },
        {
            block: 'nav',
            mix: { block: 'page', elem: 'nav' },
            content: [
                {
                    block: 'menu',
                    mods: {
                        theme: 'islands',
                        size: 'm',
                        mode: 'radio-check',
                        focused: true
                    },
                    val: 2,
                    content: [
                        {
                            elem: 'item',
                            val: 1,
                            content: 'Пункт 1'
                        },
                        {
                            elem: 'item',
                            val: 2,
                            content: 'Пункт 2'
                        },
                        {
                            elem: 'item',
                            val: 3,
                            content: 'Пункт 3'
                        },
                        {
                            elem: 'item',
                            val: 4,
                            content: 'Пункт 4'
                        },
                        {
                            elem: 'item',
                            val: 5,
                            content: 'Пункт 5'
                        }
                    ]
                }
            ]
        },
        {
            block: 'footer',
            mix: { block: 'page', elem: 'footer' },
            content: 'This is the footer.'
        }
    ]
};
