# Product Images

Add your product images to this folder.

## How to add your products:

1. Add your product images to this folder (e.g., `product1.jpg`, `product2.jpg`, etc.)
2. Update the `products` array in `src/components/HomePage.tsx`
3. Change the `imageUrl` from the placeholder to your actual image path:
   - Example: `imageUrl: '/veronawebsite/products/product1.jpg'`

## Recommended image specifications:

- Format: JPG or PNG
- Size: Square images work best (e.g., 800x800px or 1000x1000px)
- File size: Keep under 500KB for faster loading

## Example product entry:

```typescript
{
  id: 1,
  title: 'Handmade Ceramic Vase',
  description: 'Beautiful handcrafted ceramic vase in soft earth tones',
  price: '€45.00',
  imageUrl: '/veronawebsite/products/ceramic-vase.jpg',
  instagramUrl: 'https://www.instagram.com/p/YOUR_POST_ID/'
}
```
