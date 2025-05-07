import React from 'react';

const About = () => {
  return (
    <section className=" py-16 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-700 mb-6">আমাদের সম্পর্কে</h2>
        
        <p className="text-lg mb-4">
          <span className="font-semibold">“রসনা রঙ্গ”</span> — রঙে ও স্বাদে ভরা একটি অনন্য রেস্টুরেন্ট, 
          যেখানে প্রতিটি খাবার শুধু খাদ্য নয়, এক একটি গল্প।
        </p>
        
        <p className="text-lg mb-4">
          শুরুটা হয়েছিল ঘরের মায়ের রান্না থেকে অনুপ্রাণিত হয়ে। আমাদের স্বপ্ন ছিল এমন একটা 
          জায়গা তৈরি করা, যেখানে দেশি খাবার আর আধুনিক পরিবেশের একসাথে মিল থাকবে।
        </p>
        
        <p className="text-lg mb-4">
          আমরা বিশ্বাস করি খাবার শুধু পেট নয়, মনও ভরাতে হয়। তাই প্রতিটি রেসিপিতে থাকে 
          যত্ন, ভালোবাসা আর দেশজ স্বাদের ছোঁয়া।
        </p>
        
        <p className="text-lg mb-4">
          আমাদের স্বাক্ষর আইটেমগুলোর মধ্যে রয়েছে <span className="italic">“ইলিশ চিজ বল”, “পান্তা প্লেট 2.0”</span> 
          ও <span className="italic">“মাটির হাঁড়ির বিরিয়ানি”</span>। এখানকার প্রতিটি পরিবেশন আপনাকে মনে করিয়ে 
          দেবে গ্রামবাংলার সেই চেনা স্বাদ।
        </p>
        
        <p className="text-lg mb-8">
          রঙিন আলোকসজ্জা, মনমাতানো সঙ্গীত আর ইনস্টাগ্রাম-যোগ্য পরিবেশ — <span className="font-medium">রসনা রঙ্গ</span> 
          শুধু খাওয়ার জায়গা নয়, এটি একটি অনুভব।
        </p>

        <p className="text-xl font-semibold text-orange-800 italic">
          আমাদের স্বাদ একবার চেখে দেখুন — মনে থাকবে বহুদিন!
        </p>
      </div>
    </section>
  );
};

export default About;
