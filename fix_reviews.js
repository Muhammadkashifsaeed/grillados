const fs = require('fs');
let file = 'app/components/ReviewsSection.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /className="shrink-0 px-2 md:px-3 flex justify-center"/g,
  'className="shrink-0 px-1 md:px-1.5 flex justify-center"'
);
content = content.replace(
  /className="bg-transparent border border-gray-200 rounded-2xl hover:border-\[#D8AC15\] hover:shadow-lg hover:-translate-y-2 transition-all duration-300 p-4 sm:p-6 w-full relative flex flex-col h-full min-h-55"/g,
  'className="bg-white border border-gray-100 shadow-[0_0_15px_rgba(0,0,0,0.02)] rounded-2xl hover:border-[#D8AC15] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-4 sm:p-4 w-full relative flex flex-col h-full min-h-[190px]"'
);

fs.writeFileSync(file, content, 'utf8');
