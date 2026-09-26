// Dummy API: each function resolves to the same response body the real API returns.
// To go live, replace a function body with a fetch to the real endpoint — components stay unchanged.
import headers from './data/headers.json';
import footer from './data/footer.json';
import categoryCards from './data/categoryCards.json';
import productPage from './data/productPage.json';

export const getHeaders = async () => headers;
export const getFooter = async () => footer;
export const getCategoryCards = async () => categoryCards;
export const getProducts = async () => productPage;

export const getImageUrl = (img) => (typeof img === 'string' ? img : img?.url) || null;
