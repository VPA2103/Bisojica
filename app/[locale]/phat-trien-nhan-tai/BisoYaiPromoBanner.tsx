import React from 'react';
import { ArrowRight, Sparkles, Leaf, GraduationCap } from 'lucide-react';
import { useTranslations } from 'next-intl';


const BisoYaiPromoBanner: React.FC = () => {

  const t = useTranslations('bisoyai');

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto relative overflow-hidden bg-green-800 rounded-3xl shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
          
          {/* Nội dung bên trái */}
          <div className="flex-1 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500/30 text-green-100 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-wide">
                <Sparkles className="w-3 h-3" /> {t('badge')}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {t('title')}
            </h2>
            
            <p className="text-green-100 text-lg mb-6 max-w-xl">
            {t('desc')}
            </p>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-green-200 mb-8 md:mb-0">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> {t('tag1')}
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4" /> {t('tag2')}
              </div>
            </div>
          </div>

          {/* Nút Call-to-action bên phải */}
          <div className="w-full md:w-auto shrink-0">
            {/* Thay thẻ <a> bằng <Link to="/phat-trien-nhan-tai"> nếu dùng React Router */}
            <a 
              href="/phat-trien-nhan-tai" 
              className="group flex items-center justify-center gap-3 bg-white text-green-800 font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:bg-green-50 hover:shadow-xl transition-all duration-300 w-full md:w-auto"
            >
               {t('cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BisoYaiPromoBanner;