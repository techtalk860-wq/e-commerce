import React, { Component } from 'react';
import { ProductComparisonCard, PlatformPrice } from './src/ProductComparisonCard';
export function ComponentPreview() {
  const samplePrices: PlatformPrice[] = [{
    platform: 'Amazon',
    price: 1299,
    availability: true,
    productUrl: 'https://amazon.in/product',
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop'
  }, {
    platform: 'Flipkart',
    price: 1199,
    availability: true,
    productUrl: 'https://flipkart.com/product',
    logo: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=100&h=100&fit=crop'
  }, {
    platform: 'Myntra',
    price: 1499,
    availability: true,
    productUrl: 'https://myntra.com/product',
    logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop'
  }, {
    platform: 'Ajio',
    price: 1399,
    availability: false,
    productUrl: 'https://ajio.com/product',
    logo: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=100&h=100&fit=crop'
  }];
  const handleSelectPrice = (platform: string, price: number) => {
    console.log(`Selected ${platform} at ₹${price}`);
    // This would trigger the ₹9 payment flow in the actual app
  };
  return <div className="min-h-screen w-full bg-gradient-to-br from-green-50 to-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Lystraa</h1>
          <p className="text-gray-600">
            Compare prices across India's top e-commerce platforms
          </p>
        </div>
        {/* Example 1: Fashion Product */}
        <ProductComparisonCard productName="Nike Dri-FIT Running T-Shirt" productImage="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop" description="Lightweight and breathable running t-shirt with moisture-wicking technology. Perfect for your daily workouts and runs." category="Fashion" prices={samplePrices} onSelectPrice={handleSelectPrice} />
        {/* Example 2: Electronics */}
        <ProductComparisonCard productName="Sony WH-1000XM5 Wireless Headphones" productImage="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop" description="Industry-leading noise cancellation with premium sound quality. 30-hour battery life and multipoint connection." category="Electronics" prices={[{
        platform: 'Amazon',
        price: 29990,
        availability: true,
        productUrl: '#'
      }, {
        platform: 'Flipkart',
        price: 28999,
        availability: true,
        productUrl: '#'
      }, {
        platform: 'Croma',
        price: 30490,
        availability: true,
        productUrl: '#'
      }]} onSelectPrice={handleSelectPrice} />
        {/* Example 3: Beauty Product */}
        <ProductComparisonCard productName="Nykaa Matte Lipstick - Cherry Pop" productImage="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop" description="Long-lasting matte finish lipstick with rich pigmentation. Enriched with Vitamin E for soft, smooth lips." category="Beauty" prices={[{
        platform: 'Nykaa',
        price: 399,
        availability: true,
        productUrl: '#'
      }, {
        platform: 'Amazon',
        price: 449,
        availability: true,
        productUrl: '#'
      }, {
        platform: 'Flipkart',
        price: 429,
        availability: false,
        productUrl: '#'
      }]} onSelectPrice={handleSelectPrice} />
      </div>
    </div>;
}