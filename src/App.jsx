import React, { useState } from 'react';
import { Search, ShoppingBag, User, Home, Menu, X, ChevronDown, ShieldCheck, Truck, Zap, Star } from 'lucide-react';
import { products } from './data/products';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const categories = Object.keys(products.reduce((acc, p) => ({ ...acc, [p.category]: true }), {}));

  // تصفية المنتجات بناءً على البحث الفوري
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-24 md:pb-10" dir="rtl">
      
      {/* شريط التنقل العلوي */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <span className="text-2xl font-bold text-blue-600 tracking-wider">متجرك الذكي</span>

          {/* البحث الفوري */}
          <div className="relative flex-1 max-w-xl">
            <input 
              type="text" 
              placeholder="ابحث في أكثر من 500 منتج (أيفون، GARM، X-Wolf)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 border border-transparent focus:border-blue-500 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none transition-all"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setCartOpen(true)} className="relative p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition">
              <ShoppingBag className="w-5 h-5 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition">
              <User className="w-4 h-4" />
              <span>دخول (OTP)</span>
            </button>
          </div>
        </div>

        {/* شريط التصنيفات */}
        <div className="bg-gray-900 text-white overflow-x-auto whitespace-nowrap scrollbar-none">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 py-2.5 text-sm">
            <button onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="flex items-center gap-1 font-bold text-yellow-400 hover:text-yellow-300">
              <Menu className="w-4 h-4" />
              <span>جميع التصنيفات</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {categories.slice(0, 5).map((cat, idx) => (
              <span key={idx} onClick={() => setSearchQuery(cat)} className="cursor-pointer hover:text-yellow-400 transition">{cat}</span>
            ))}
          </div>
        </div>

        {isCategoryOpen && (
          <div className="bg-white border-b border-gray-200 shadow-xl py-4 px-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {categories.map((cat, idx) => (
              <div key={idx} onClick={() => { setSearchQuery(cat); setIsCategoryOpen(false); }} className="p-2 hover:bg-blue-50 rounded-lg cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600 transition">
                {cat}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* المحتوى الرئيسي */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        
        {/* السلايدر */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8 md:p-12 mb-8 shadow-md">
          <div className="max-w-lg">
            <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase">عروض حصرية</span>
            <h1 className="text-3xl md:text-4xl font-extrabold mt-3 leading-tight">أقوى تشكيلة تضم 500+ منتج ذكي</h1>
            <p className="mt-2 text-blue-100 text-sm">تسوق أحدث منتجات GARM و X-Wolf وأجهزة أبل وسامسونج بضمان حقيقي وتوصيل سريع.</p>
          </div>
        </div>

        {/* شبكة عرض المنتجات */}
        <h2 className="text-xl font-bold mb-6 text-gray-800">المنتجات المتاحة ({filteredProducts.length})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.slice(0, 24).map((product) => (
            <div 
              key={product.id} 
              onClick={() => { setSelectedProduct(product); setActiveImageIndex(0); }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition cursor-pointer flex flex-col"
            >
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">خصم</span>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-xs text-blue-600 font-semibold mb-1">{product.category}</span>
                <h3 className="font-bold text-sm text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                
                <div className="flex items-center gap-1 text-yellow-500 text-xs mb-3">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-bold text-gray-700">{product.rating}</span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <span className="text-base font-extrabold text-blue-600">{product.price} ريال</span>
                    <span className="text-xs text-gray-400 line-through mr-2">{product.oldPrice} ريال</span>
                  </div>
                  <button className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold">التفاصيل</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* نافذة تفاصيل المنتج */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold text-base text-gray-800">{selectedProduct.name}</h3>
              <button onClick={() => setSelectedProduct(null)} className="p-1.5 hover:bg-gray-100 rounded-full"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="relative h-64 bg-gray-100 rounded-xl overflow-hidden">
                <img src={selectedProduct.images[activeImageIndex]} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                <div>
                  <span className="text-2xl font-extrabold text-blue-600">{selectedProduct.price} ريال</span>
                  <span className="text-sm text-gray-400 line-through mr-2">{selectedProduct.oldPrice} ريال</span>
                </div>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full">متوفر</span>
              </div>
              <p className="text-sm text-gray-600">{selectedProduct.description}</p>
            </div>
            <div className="p-4 border-t bg-gray-50">
              <button onClick={() => { setCartCount(prev => prev + 1); setSelectedProduct(null); setCartOpen(true); }} className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl text-center">
                إضافة إلى السلة
              </button>
            </div>
          </div>
        </div>
      )}

      {/* شريط التنقل السفلي للهواتف */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 flex justify-between items-center z-45 shadow-lg">
        <button onClick={() => setActiveTab('home')} className="flex flex-col items-center gap-1 text-blue-600">
          <Home className="w-5 h-5" /><span className="text-xs">الرئيسية</span>
        </button>
        <button onClick={() => setIsCategoryOpen(true)} className="flex flex-col items-center gap-1 text-gray-400">
          <Menu className="w-5 h-5" /><span className="text-xs">التصنيفات</span>
        </button>
        <button onClick={() => setCartOpen(true)} className="flex flex-col items-center gap-1 text-gray-400">
          <ShoppingBag className="w-5 h-5" /><span className="text-xs">السلة</span>
        </button>
        <button onClick={() => setActiveTab('account')} className="flex flex-col items-center gap-1 text-gray-400">
          <User className="w-5 h-5" /><span className="text-xs">حسابي</span>
        </button>
      </nav>

      {/* سلة المشتريات الجانبية */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full p-6 flex flex-col shadow-2xl">
            <div className="flex justify-between items-center border-b pb-4">
              <h3 className="font-bold text-lg">سلة المشتريات</h3>
              <button onClick={() => setCartOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl my-4">
              <p className="text-xs font-semibold text-blue-800">أضف منتجات بقيمة 50 ريال للحصول على شحن مجاني!</p>
            </div>
            <div className="flex-1 overflow-y-auto">
              <p className="text-sm text-gray-500">تمت إضافة المنتج بنجاح إلى السلة.</p>
            </div>
            <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl mt-auto">إتمام الطلب (OTP)</button>
          </div>
        </div>
      )}
    </div>
  );
}
