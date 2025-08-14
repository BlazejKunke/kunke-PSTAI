import type { APIRoute } from 'astro';

export async function GET(context) {
    const pages = await import.meta.glob('./**/*.astro');
    const pagePaths = Object.keys(pages)
        .filter(path => path !== './index.astro'); // Exclude root redirect

    const urls = pagePaths.map(path => {
        // './en/index.astro' -> '/en/'
        // './pl/privacy.astro' -> '/pl/privacy/'
        const cleanPath = path
            .replace(/^\.\//, '/')
            .replace(/index\.astro$/, '')
            .replace(/\.astro$/, '/');

        const loc = new URL(cleanPath, context.site);

        return `
    <url>
        <loc>${loc}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.8</priority>
        <changefreq>weekly</changefreq>
    </url>`.trim();
    }).join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`.trim();

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}