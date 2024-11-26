/* eslint-disable react/prop-types */

const BlogCard = ({ id, date, CardTitle, CardDescription, image, Button }) => {
  return (
    <>
      <section className="bg-gray-2 h-full" key={id}>
        <div className="container">
          <div className="w-full mx-auto relative block overflow-hidden rounded-lg shadow-lg p-4 lg:p-6 border border-gray-200 transition-transform transform ">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-[#7D7CEC]"></span>

            <div className="flex-col-reverse flex sm:justify-between gap-4">
              <div>

                <h3 className="text-lg font-bold text-[#0B0B43] sm:text-xl">
                  {CardTitle}
                </h3>
              </div>

              <div className="block sm:shrink-0 ">
                <img
                  alt="image"
                  src={image}
                  className="size-16 rounded-lg object-cover drop-shadow-md w-full h-[15rem]"
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
                <dd className="text-xs text-gray-500">{date}</dd>
              </div>
            </dl>

            {Button && (
              <a
                href="#"
                className="justify-center mt-4 rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary text-[#0B0B43] hover:text-[#7D7CEC] "
              >
                {Button}
              </a>

            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCard;

