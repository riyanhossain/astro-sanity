/**
 * Collection of GROQ queries for Sanity data fetching
 */

/**
 * Query to get all pages with their basic information
 * @returns GROQ query string
 *
 */

export const getHomePageQuery = `*[_type == "page" && slug.current == "homepage"]{
    title,
    slug,
    sections[],
    seoTitle,
}`;
