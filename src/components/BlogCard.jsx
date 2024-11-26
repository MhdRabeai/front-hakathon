// const BlogCard = ({ id, date, CardTitle, CardDescription, image }) => {
//   return (
//     <div className="container mx-auto p-3">
//       <div className="flex flex-wrap gap-4">
//         <div className="w-[20rem] mx-auto relative block overflow-hidden rounded-lg shadow-lg p-4 sm:p-4 lg:p-6  border border-gray-200 transition-transform transform hover:scale-105">
//           <span className="absolute inset-x-0 bottom-0 h-2 bg-[#7D7CEC]"></span>

//           <div className="flex-col-reverse sm:flex-row flex sm:justify-between gap-4">
//             <div>
//               <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
//                 Custom Web Application
//               </h3>
//             </div>

//             <div className="block sm:shrink-0">
//               <img
//                 alt="image"
//                 src="https://images.unsplash.com/photo-1731341711971-dc38777a69e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
//                 className="size-16 rounded-lg object-cover drop-shadow-md"
//               />
//             </div>
//           </div>

//           <div className="mt-4">
//             <p className="text-pretty text-sm text-gray-500">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
//               illum provident a, ipsa maiores deleniti consectetur nobis et
//               eaque.
//             </p>
//           </div>

//           <dl className="mt-6 flex gap-4 sm:gap-6">
//             <div className="flex flex-col-reverse">
//               <dt className="text-sm font-medium text-gray-600">Published</dt>
//               <dd className="text-xs text-gray-500">31st June, 2021</dd>
//             </div>
//           </dl>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BlogCard;
import React from "react";

const BlogCard = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="flex flex-wrap gap-4">
            <SingleCard
              image="https://i.ibb.co/r2zns1m/image-01.jpg"
              CardTitle="50+ Best creative website themes & templates"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
              date="31st June, 2021"
            />
            <SingleCard
              image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
              CardTitle="Creative Card Component designs graphic elements"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
              date="31st June, 2021"
            />
            <SingleCard
              image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
              CardTitle="The ultimate UX and UI guide to card design"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
              date="31st June, 2021"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCard;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  date,
}) => {
  return (
    <div className="w-[20rem] mx-auto relative block overflow-hidden rounded-lg shadow-lg p-4 lg:p-6 border border-gray-200 transition-transform transform hover:scale-105">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-[#7D7CEC]"></span>

      <div className="flex-col-reverse sm:flex-row flex sm:justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {CardTitle}
          </h3>
        </div>

        <div className="block sm:shrink-0">
          <img
            alt="image"
            src={image}
            className="size-16 rounded-lg object-cover drop-shadow-md"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-pretty text-sm text-gray-500">
          {CardDescription}
        </p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Published</dt>
          <dd className="text-xs text-gray-500">{date}</dd>
        </div>
      </dl>

      {Button && (
        <a
          href="#"
          className="inline-block mt-4 rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
        >
          {Button}
        </a>
      )}
    </div>
  );
};