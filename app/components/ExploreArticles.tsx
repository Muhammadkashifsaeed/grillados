"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

const articles = [
  {
    id: 1,
    image: '/images/juicy1.jpeg',
    heading: 'Grilled Corn – Sweet, Smoky & Juicy Perfection for Just $5.99',
    text: 'Introduction: Sweet, Smoky & Simply Delicious The feeling of the bite of a perfectly grilled corn is magical indeed. The […]',
    tags: ['Food', 'Restaurant'],
    date: '2025-08-27',
  },
  {
    id: 2,
    image: '/images/juicy2.jpeg',
    heading: 'Creamy Coleslaw – A Cool, Crunchy Classic for Just $5.99!',
    text: 'A Favourite Classic Side Dish Something about fresh cabbage and carrots in a creamy, sharp dressing feels so good, with […]',
    tags: ['Food', 'Restaurant', 'Vegetables'],
    date: '2025-08-11',
  },
  {
    id: 3,
    image: '/images/juicy3.jpeg',
    heading: 'Peri Fries Recipe: Crispy, Spicy Snack You’ll Crave Every Time',
    text: 'In the mood to spice up regular fries? Spice up your taste buds with Try Peri Fries, a perfect combination […]',
    tags: ['Food', 'Fries', 'Restaurant'],
    date: '2025-07-21',
  },
  {
    id: 4,
    image: '/images/juicy4.jpeg',
    heading: 'Masala Fries Recipe: Crispy, Spicy Street-Style Snack You’ll Love',
    text: 'Feeling the need for something warm, crunchy, and bursting with tons of flavour? Masala Fries should be the ideal French […]',
    tags: ['Food', 'Fries', 'Restaurant'],
    date: '2025-07-17',
  },
  {
    id: 5,
    image: '/images/juicy5.jpeg',
    heading: 'Grillado’s BBQ Mix Platter Organic Chicken, Ribs & Sides for $159.99',
    text: 'The Mix Platter gives you all the hearty food, strong flavours, and great times you’re searching for, and even a […]',
    tags: ['Beef', 'Bun', 'Food', 'Fries', 'Grilled', 'Restaurant', 'Ribs'],
    date: '2025-07-14',
  },
  {
    id: 6,
    image: '/images/juicy6.jpeg',
    heading: 'Veggie Nachos Mississauga’s Ultimate Vegetarian Appetisers at Grillado’s',
    text: 'A strong-tasting vegetarian appetiser that consistently delivers satisfaction is available at Mississauga’s Grillado’s. Mississauga residents can find the mouthwatering Veggie […]',
    tags: ['Food', 'Nachos', 'Restaurant'],
    date: '2025-07-10',
  },
  {
    id: 7,
    image: '/images/Meal1.jpeg',
    heading: 'Grillado’s Double Leg Combo Juicy Grilled Chicken & Side for Just $20.99',
    text: 'Looking to get a taste of protein-packed, delicious and satisfying meals? Get acquainted with the Grillado Double Leg Combo, your […]',
    tags: ['Chicken', 'Food', 'Grilled', 'Restaurant'],
    date: '2025-07-08',
  },
  {
    id: 8,
    image: null,
    heading: 'Grillado’s Grilled Chicken Burger Meal',
    text: 'Want a juicy, flavorful and perfectly grilled burger? The Grilled Chicken Burger Meal at Grillado is your perfect destination to […]',
    tags: ['Burger', 'Food', 'Grilled', 'Restaurant'],
    date: '2025-07-02',
  },
  {
    id: 9,
    image: '/images/Meal2.jpeg',
    heading: 'Juicy ¼ Grilled Chicken Breast & Wings',
    text: 'If Grillado’s unique chicken combo appeals to you, you’ve found what you’re looking for to make at home. We will […]',
    tags: ['Chicken', 'Food', 'Grilled', 'Restaurant'],
    date: '2025-06-30',
  },
  {
    id: 10,
    image: '/images/Meal3.jpeg',
    heading: 'Grillado’s ¼ Grilled Chicken Leg Recipe: Flame-Grilled Perfection',
    text: 'Looking for a juicy chicken dish you can enjoy fast, that’s full of flavorful spices? For a tasty and simple […]',
    tags: ['Chicken', 'Food', 'Grilled', 'Restaurant'],
    date: '2025-06-26',
  },
  {
    id: 11,
    image: '/images/Meal4.jpeg',
    heading: 'Fiesta Chicken Bowl: Grilled Chicken, Rice & Salad',
    text: 'Need a healthy, good and tasty meal at a reasonable price? Hello, Fiesta Chicken Bowl at Grillado! A perfectly balanced […]',
    tags: ['Chicken', 'Food', 'Grilled', 'Restaurant'],
    date: '2025-06-25',
  },
  {
    id: 12,
    image: '/images/Meal5.jpeg',
    heading: 'Grillado’s Chicken Platter 2 Organic Whole Grilled Chickens Sides & Bread | Perfect for Sharing',
    text: 'Searching for something wholesome but what to feed the family for a dinner or a get-together, or a weekend meal? […]',
    tags: ['Bread', 'Chicken', 'Food', 'Fries', 'Grilled', 'Restaurant'],
    date: '2025-06-20',
  },
  {
    id: 13,
    image: '/images/going1.jpeg',
    heading: 'Balochi Sajji Chicken: A Delicious Pre-Order Only Dish with Sides & Breads',
    text: 'Are you looking for a dish that combines intense flavour with extraordinary taste, going beyond regular fare? The heart of […]',
    tags: ['Bread', 'Chicken', 'Food', 'Fries', 'Grilled', 'Restaurant'],
    date: '2025-06-18',
  },
  {
    id: 14,
    image: '/images/going2.jpeg',
    heading: 'Garlic Grilled Chicken Sandwich A Bold, Juicy Classic at Grillado’s Mississauga',
    text: 'If you are in the mood for a sizzling, juicy and unique meal at Grillado Mississauga, the Garlic Grilled Chicken […]',
    tags: ['Bread', 'Chicken', 'Food', 'Fries', 'Grilled', 'Restaurant'],
    date: '2025-06-10',
  },
  {
    id: 15,
    image: '/images/going3.jpeg',
    heading: 'Grillado’s Veggie Burger: A Delicious Plant-Based Feast with Sides & Sauces',
    text: 'The Grillado’s Veggie Burger is the ultimate vegetarian food if you are looking for something that can satisfy your taste […]',
    tags: ['Bread', 'Food', 'Restaurant'],
    date: '2025-06-04',
  },
  {
    id: 16,
    image: '/images/going4.jpeg',
    heading: 'Grilled Chicken Nachos: The Ultimate Loaded Snack at Grillado’s',
    text: 'Grillado’s Grilled Chicken Nachos are perfect if you have a craving for snack food with bold flavour and a loud, […]',
    tags: ['Food', 'Nachos', 'Restaurant'],
    date: '2025-06-02',
  },
  {
    id: 17,
    image: '/images/going5.jpeg',
    heading: 'Hummus & Pita',
    text: 'They are craving a tasty, light starter that has the potential to tickle their palate. Grillado’s Hummus & Pita is […]',
    tags: ['Bread', 'Food', 'Restaurant'],
    date: '2025-05-29',
  },
  {
    id: 18,
    image: '/images/going6.jpeg',
    heading: 'Buttery & Fresh Garlic Bread in Mississauga',
    text: 'Are you looking for an ideal accompaniment for your meal? In Grillado, you have the opportunity to try Garlic Bread: […]',
    tags: ['Bread', 'Food', 'Restaurant'],
    date: '2025-05-26',
  },
  {
    id: 19,
    image: '/images/serves1.jpeg',
    heading: 'Fresh & Fluffy Pita Bread',
    text: 'Find the best pita bread in Mississauga at Grillado’s. Grillado’s serves fresh pita bread, which comes hot from the grill […]',
    tags: ['Food', 'Restaurant'],
    date: '2025-05-21',
  },
  {
    id: 20,
    image: '/images/serves2.jpeg',
    heading: 'Grilled Beef Back Ribs: The Ultimate Smoky BBQ Recipe',
    text: 'In Grillados, there’s no over-complication over food as the primary products offered include but are not limited to beef and […]',
    tags: ['Beef', 'Food', 'Grilled', 'Restaurant'],
    date: '2025-05-15',
  },
  {
    id: 21,
    image: '/images/serves3.jpeg',
    heading: 'Mini Beef Kebabs: Bite-Sized Flavour Explosion You Can’t Resist',
    text: 'Grillado’s 10 Mini Beef Kebabs offer the perfect combination of rich beef taste with juiciness, together with perfectly balanced spices […]',
    tags: ['Beef', 'Food', 'Grilled', 'Restaurant'],
    date: '2025-05-13',
  },
  {
    id: 22,
    image: '/images/serves4.jpeg',
    heading: 'Grillado’s Beef Platter – The Ultimate BBQ Feast for Meat Lovers',
    text: 'Are you a lover of meat wishing to have a burst of flavours with a uniquely delicious barbecue session? Look […]',
    tags: ['Beef', 'Food', 'Grilled', 'Restaurant'],
    date: '2025-05-12',
  },
  {
    id: 23,
    image: '/images/serves5.jpeg',
    heading: 'Portuguese Bun Freshly Baked',
    text: 'Our Portuguese Bun served with creamy butter provides a warm and satisfying budget-friendly option as a snack. This traditional dish […]',
    tags: ['Bun', 'Food', 'Grilled'],
    date: '2025-05-09',
  },
  {
    id: 24,
    image: '/images/serves6.jpeg',
    heading: 'Whole Organic Grilled Chicken',
    text: 'Whole Organic Grilled Chicken stands out as the best choice for a nutritious meal and tantalizing taste experience. The dish […]',
    tags: ['Chicken', 'Food', 'Grilled'],
    date: '2025-05-07',
  },
  {
    id: 25,
    image: '/images/Sticks1.jpg',
    heading: '5 Mozzarella Cheese Sticks at Grillado’s',
    text: 'The crispy chicken puzzle at Grillado’s 5 Mozzarella Cheese Sticks stands out as a perfect appetiser that combines crispy texture […]',
    tags: ['Beef', 'Food', 'Fries', 'Grilled'],
    date: '2025-05-02',
  },
  {
    id: 26,
    image: '/images/Sticks2.jpeg',
    heading: 'Grillados Grilled Espetada: A Flavorful Skewer Experience',
    text: 'The Grilled Espetada from Grillados is the best for you if you’re a great fan of spicy and juicy meat […]',
    tags: ['Beef', 'Food', 'Fries', 'Grilled'],
    date: '2025-04-24',
  },
  {
    id: 27,
    image: '/images/Sticks3.jpeg',
    heading: '12 OZ Rib Eye Steak: The Ultimate Guide to Flavor, Cooking Tips, and Perfect Pairings',
    text: 'At Grillado’s the 12 OZ Rib Eye Steak stands as a must try choice for steak fans together with those […]',
    tags: ['Beef', 'Food', 'Grilled'],
    date: '2025-04-21',
  },
  {
    id: 28,
    image: '/images/Sticks4.jpeg',
    heading: 'Grilled Chicken Boneless Breast: A Healthy, Juicy and Flavour',
    text: 'Introduction A grilled boneless chicken breast delivers the ultimate experience in healthy, protein-rich rich delicious meals. At Grillado’s, we offer […]',
    tags: ['Chicken', 'Food', 'Grilled'],
    date: '2025-04-16',
  },
  {
    id: 29,
    image: '/images/Sticks5.jpeg',
    heading: 'Tandoori Sizzler: A Flavorful Fusion of Spice and Smoke',
    text: 'Tandoori Sizzler is an evergreen dish and very popular in the races worldwide. This incredibly sizzling platter collects a symphony […]',
    tags: ['Chicken', 'Food', 'Grilled'],
    date: '2025-04-14',
  },
  {
    id: 30,
    image: '/images/Sticks6.jpg',
    heading: 'Grillados Raise Funds for Cancer',
    text: 'Grillados Raising Funds for Cancer Awareness & Care A long-time local favorite for its finger-licking delights, the grilled food joint, […]',
    tags: ['Donation', 'Foundation'],
    date: '2024-09-26',
  },
  {
    id: 31,
    image: '/images/mingling1.jpg',
    heading: 'Grillado’s Celebrates 35th Anniversary by Partnering with McGill Cancer Researchers',
    text: 'Grillado’s Celebrates 35th Anniversary Grillado’s, the institution so much loved for fresh Mediterranean-inspired dishes, has been far more than a […]',
    tags: ['Chicken', 'Food', 'Grilled', 'Patner'],
    date: '2024-09-25',
  },
  {
    id: 32,
    image: '/images/mingling2.png',
    heading: 'Grillados Mobile App',
    text: 'Introduction: Grillados mobile app comes with new, innovative, and intelligent solutions that improve grilling up-take including all controller functionalities from […]',
    tags: ['Application', 'Chicken', 'Food', 'Grilled'],
    date: '2024-07-24',
  },
  {
    id: 33,
    image: '/images/mingling3.jpg',
    heading: 'BEST HALAL RESTAURANT IN CAMBRIDGE CANADA',
    text: 'Introduction: Right at the center of Cambridge, Ontario, Grillado’s is not just a restaurant; it is a location for those […]',
    tags: ['Chicken', 'Food', 'Grilled', 'Restaurant'],
    date: '2024-07-23',
  },
  {
    id: 34,
    image: '/images/mingling4.jpeg',
    heading: 'Partnering for Excellence Grillados and Surrey Jaguars',
    text: 'Introduction: In the heart of Surrey, two dynamic forces have joined hands to create an unparalleled culinary experience. Grillados, known […]',
    tags: ['Food', 'Patner'],
    date: '2024-07-19',
  },
  {
    id: 35,
    image: '/images/mingling5.png',
    heading: 'Special Grilled Chicken in Canada',
    text: 'Introduction: Ah, the unmistakable scent of charcoal mingling with the savory aroma of grilled chicken on a warm summer evening […]',
    tags: ['Chicken', 'Food', 'Grilled'],
    date: '2024-04-24',
  },
  {
    id: 36,
    image: '/images/mingling6.png',
    heading: 'Best Beef back ribs in Canada',
    text: 'A Guide to Cooking and Enjoying Beef Back Ribs Beef back ribs are a delicious and succulent cut of meat […]',
    tags: ['Beef', 'Food', 'Fries', 'Ribs'],
    date: '2024-04-21',
  },
  {
    id: 37,
    image: '/images/Recipe1.png',
    heading: 'Grilled Espetada Recipe',
    text: 'Grilled Espetada: A Delightful Portuguese Skewer Recipe If you enjoy Mediterranean cuisine or are simply a fan of skewered meats, […]',
    tags: ['Beef', 'Food', 'Grilled'],
    date: '2024-04-18',
  },
  {
    id: 38,
    image: '/images/Recipe2.jpg',
    heading: 'Birthday Event',
    text: 'Birthday CATERING INTRODUCTION Birthdays are much more important than other days of the calendar. Spend your special day by grilling […]',
    tags: ['Birthday Catering', 'Event Catering', 'Food'],
    date: '2024-04-08',
  },
  {
    id: 39,
    image: '/images/Recipe3.jpeg',
    heading: '10 Best Event Catering Companies in Canada',
    text: 'Their clients are always in for a treat with the constant stream of new and exciting surprises they bring to […]',
    tags: ['Birthday Catering', 'Event Catering', 'Food'],
    date: '2024-04-04',
  },
  {
    id: 40,
    image: '/images/Recipe4.png',
    heading: 'Restaurants in Montreal',
    text: 'Grillado’s Grilled Chicken Portuguese chicken is a way of life in Montreal, and while Romados may be the unofficial king […]',
    tags: ['Food'],
    date: '2023-12-14',
  },
  {
    id: 41,
    image: '/images/Recipe5.jpg',
    heading: 'Wedding Catering In Canada',
    text: 'Are you waiting for a wedding consultant/event coordinator? Make your deal with Grillados. You must want to start your forever […]',
    tags: ['Birthday Catering', 'Event Catering', 'Food', 'Wedding catering'],
    date: '2023-12-07',
  }
];

export const ExploreArticles = () => {
  const t = useTranslations('Blog');
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h2 className="text-[#FFFFFF] text-13 leading-8.5 font-bold font-['Ribeat',sans-serif] tracking-wide mb-12 text-center drop-shadow-lg">
          {t('exploreArticles')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {articles.slice(0, visibleCount).map((article) => (
            <div 
              key={article.id} 
              className="bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl group flex flex-col h-full hover:border-gray-700 transition-colors duration-300"
            >
              {/* Image Container */}
              {article.image && (
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-gray-900">
                  <Image 
                    src={article.image} 
                    alt={article.heading} 
                    fill sizes="100vw" 
                    className="object-cover" 
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                
                <Link 
                  href={`/blog/${article.id}`} 
                  className="text-[#FFFFFF] text-5 leading-6.25 font-medium font-['Ribeat',sans-serif] mb-4 hover:text-[#FAAE40] transition-colors duration-300 line-clamp-2 underline underline-offset-4"
                >
                  {article.heading}
                </Link>

                <p className="text-[#FFFFFF] text-4 leading-6.5 font-normal font-['Roboto',sans-serif] line-clamp-3">
                  {article.text}
                </p>

                <div className="text-gray-400 font-bold tracking-widest my-2">
                  .....
                </div>

                <div className="mb-6">
                  <Link 
                    href="#" 
                    className="text-[#FAAE40] text-3.5 leading-5.75 font-normal font-['Poppins',sans-serif] transition-colors duration-300 underline underline-offset-4"
                  >
                    {article.tags.join(', ')}
                  </Link>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-800 flex items-center justify-between">
                  <span className="text-gray-400 font-bold tracking-wider uppercase text-sm">
                    {article.date}
                  </span>
                  
                  <Link 
                    href={`/blog/${article.id}`} 
                    className="text-[#FAAE40] text-4 leading-4 font-semibold font-['Poppins',sans-serif] uppercase tracking-wider hover:bg-[#EB5250] hover:text-white active:bg-[#d44947] active:text-white rounded transition-all duration-300 group/btn flex items-center gap-2"
                  >
                    {t('readMore')}
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* {t('loadMore')} Button */}
        {visibleCount < articles.length && (
          <div className="mt-16 flex justify-center w-full">
            <button 
              type="button" 
              onClick={handleLoadMore}
              className="bg-[#DAAF18] text-[#FFFFFF] hover:bg-[#E04B51] font-medium font-['Ribeat',sans-serif] text-4 leading-4 py-4 px-10 rounded-none transition-all duration-300 uppercase tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
