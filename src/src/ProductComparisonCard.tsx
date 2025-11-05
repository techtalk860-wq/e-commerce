import React from 'react';
import { ExternalLink, Tag, TrendingDown } from 'lucide-react';
export interface PlatformPrice {
  platform: string;
  price: number;
  availability: boolean;
  productUrl: string;
  logo?: string;
}
export interface ProductComparisonCardProps {
  productName: string;
  productImage: string;
  description?: string;
  category?: string;
  prices: PlatformPrice[];
  onSelectPrice?: (platform: string, price: number) => void;
  'data-id'?: string;
}
export const ProductComparisonCard: React.FC<ProductComparisonCardProps> = ({
  productName,
  productImage,
  description,
  category,
  prices,
  onSelectPrice,
  'data-id': dataId
}) => {
  // Find the lowest price
  const lowestPrice = Math.min(...prices.filter(p => p.availability).map(p => p.price));
  // Sort prices by lowest first
  const sortedPrices = [...prices].sort((a, b) => {
    if (!a.availability) return 1;
    if (!b.availability) return -1;
    return a.price - b.price;
  });
  const handleSelectPrice = (platform: string, price: number) => {
    if (onSelectPrice) {
      onSelectPrice(platform, price);
    }
  };
  return <div data-id={dataId} className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-2xl w-full">
      {/* Product Header */}
      <div className="p-6 bg-gradient-to-br from-green-50 to-white">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img src={productImage} alt={productName} className="w-full md:w-48 h-48 object-cover rounded-xl shadow-md" />
          </div>
          {/* Product Info */}
          <div className="flex-1">
            {category && <div className="flex items-center gap-2 mb-2">
                <Tag className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-600 uppercase tracking-wide">
                  {category}
                </span>
              </div>}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {productName}
            </h2>
            {description && <p className="text-gray-600 text-sm line-clamp-3">
                {description}
              </p>}
            {/* Best Price Highlight */}
            <div className="mt-4 inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <TrendingDown className="w-5 h-5" />
              <span className="font-semibold">
                Best Price: ₹{lowestPrice.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Price Comparison List */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Compare Prices Across Platforms
        </h3>
        <div className="space-y-3">
          {sortedPrices.map((priceData, index) => {
          const isBestDeal = priceData.availability && priceData.price === lowestPrice;
          return <div key={index} className={`
                  relative border-2 rounded-xl p-4 transition-all duration-200
                  ${isBestDeal ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-200 bg-white hover:border-green-300'}
                  ${!priceData.availability ? 'opacity-50' : ''}
                `}>
                {/* Best Deal Badge */}
                {isBestDeal && <div className="absolute -top-3 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    BEST DEAL
                  </div>}
                <div className="flex items-center justify-between gap-4">
                  {/* Platform Info */}
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      {priceData.logo ? <img src={priceData.logo} alt={priceData.platform} className="w-8 h-8 object-contain" /> : <span className="text-xs font-bold text-gray-600">
                          {priceData.platform.slice(0, 2).toUpperCase()}
                        </span>}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {priceData.platform}
                      </p>
                      <p className={`text-sm ${priceData.availability ? 'text-green-600' : 'text-red-600'}`}>
                        {priceData.availability ? 'In Stock' : 'Out of Stock'}
                      </p>
                    </div>
                  </div>
                  {/* Price and Action */}
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">
                        ₹{priceData.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <button onClick={() => handleSelectPrice(priceData.platform, priceData.price)} disabled={!priceData.availability} className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
                        ${priceData.availability ? 'bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
                      `}>
                      <span className="hidden sm:inline">Select</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>;
        })}
        </div>
      </div>
      {/* Footer Note */}
      <div className="px-6 pb-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-gray-700 text-center">
            <span className="font-semibold text-green-700">
              ₹9 convenience fee
            </span>{' '}
            applies after selection • You'll be redirected to complete your
            purchase
          </p>
        </div>
      </div>
    </div>;
};