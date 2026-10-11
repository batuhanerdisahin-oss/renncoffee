const fs = require('fs');
const content = fs.readFileSync('src/data/initialData.ts', 'utf8');
const match = content.match(/export const INITIAL_PRODUCTS: Product\[\] = (\[[\s\S]*?\]);/);
const products = JSON.parse(match[1]);

console.log('=== SANDVİÇLER ===');
products.filter(p => p.category === 'SANDVİÇLER').forEach(p => console.log(`${p.name} | ${p.image}`));

console.log('\n=== TATLILAR ===');
products.filter(p => p.category === 'TATLILAR').forEach(p => console.log(`${p.name} | ${p.image}`));

console.log('\n=== SPECIAL ÇAYLAR ===');
products.filter(p => p.category === 'SPECIAL ÇAYLAR').forEach(p => console.log(`${p.name} | ${p.image}`));

console.log('\n=== FROZEN ===');
products.filter(p => p.category === 'FROZEN').forEach(p => console.log(`${p.name} | ${p.image}`));

console.log('\n=== YAZA ÖZEL ===');
products.filter(p => p.category === 'YAZA ÖZEL').forEach(p => console.log(`${p.name} | ${p.image}`));
