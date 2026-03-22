import { Link } from "react-router";
import { ArrowRight, Palette, Truck, Shield, Star, ScanFace } from "lucide-react";
import { products } from "../data/products";
import { testimonials } from "../data/testimonials";
import { ProductCard } from "../components/ProductCard";
import { motion } from "motion/react";
import { SimpleFeatureCard } from "../components/ui/feature-card";
import { StartsFiller } from "../components/ui/starts-rating";
import { GuidePoint } from "../components/ui/guide-point";
import { SectionTitle } from "../components/ui/page-section-title";
import { HomeSection } from "../components/ui/home-section";


export const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1920&h=1080&fit=crop')] bg-cover bg-center" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm mb-6 border border-orange-600/30"
            >
              Forge Your Style
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Tạo Dựng Phong Cách<br />
              <span className="text-orange-600">Riêng Của Bạn</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Thiết kế áo thun độc đáo với công cụ custom dễ sử dụng. Chất lượng cao, giao hàng nhanh chóng.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/designer"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
              >
                <span>Thiết kế ngay</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/products"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/20"
              >
                Xem sản phẩm
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </section>

      {/* Features */}
      

      <HomeSection py={16} backgroundColor="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <SimpleFeatureCard icon = {Palette} title={'Thiết kế tự do'} description={' Công cụ thiết kế dễ sử dụng, sáng tạo không giới hạn'}/>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <SimpleFeatureCard icon = {Shield} title={'Chất lượng cao'} description={'Vải cotton premium, form chuẩn, bền màu'}/>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <SimpleFeatureCard icon = {Truck} title={'Giao hàng nhanh'} description={'Miễn phí ship đơn từ 500k, giao hàng 2-3 ngày'}/>
              
            
            </motion.div>
          </div>
      </HomeSection>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
        </div>
      </section>

      <HomeSection py={20} >
           <SectionTitle title='Sản phẩm nổi bật' subTitle="Mẫu áo được yêu thích nhất mùa hè này"></SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <span>Xem tất cả sản phẩm</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
      </HomeSection>

      {/* How It Works */}
      <HomeSection py={20} backgroundColor="bg-gray-50">
        <SectionTitle title='Cách thức hoạt động' subTitle="Chỉ với ba bước đơn giản"></SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
            <GuidePoint stepNum={1} stepTitle = {'Chọn hoặc thiết kế'} 
            stepDescription={'Chọn từ bộ sưu tập có sẵn hoặc tự thiết kế áo riêng với công cụ custom'} />

            <GuidePoint stepNum={2} stepTitle={'Đặt hàng'}
            stepDescription={'Chọn size, số lượng và hoàn tất đơn hàng với phương thức thanh toán tiện lợi'}/>
            
            <GuidePoint stepNum={3} stepTitle={'Nhận hàng'}
            stepDescription={'Chúng tôi sẽ in và giao hàng tận nơi trong 2-3 ngày làm việc'}/>
           
          </div>
      </HomeSection>

      {/* Testimonials */}
      <HomeSection py={20}>
         <SectionTitle title={'Khách hàng nói gì?'} subTitle={' Những đánh giá từ khách hàng đã mua sắm tại TeeForge'}></SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
                <StartsFiller rating = {testimonial.rating} startSize={4}/>
                
                <p className="text-gray-700 text-sm mb-4">"{testimonial.content}"</p>
                
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </HomeSection>

      {/* CTA Section */}
      <HomeSection py={20} backgroundColor="bg-gradient-to-r from-orange-600 to-red-600 text-white" >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Sẵn sàng tạo dựng phong cách riêng?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Bắt đầu thiết kế ngay hôm nay và nhận ưu đãi 10% cho đơn hàng đầu tiên
          </p>
          <Link
            to="/designer"
            className="inline-flex items-center space-x-2 bg-white text-orange-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            <span>Bắt đầu thiết kế</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
      </HomeSection>
    </div>
  );
};
