import React from 'react';

const Terms = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-4 md:px-8">
        <h2 className="text-3xl font-semibold mb-4">Terms and Conditions</h2>
        <p className="text-sm text-gray-700 mb-4">
  By using our services, you agree to our terms and conditions.
  <a
    href="/terms"
    className=" text-amber-500 py-2 px-2 hover:bg-blue-700 hover:text-white hover:shadow-xl transition-all duration-300 ease-in-out font-semibold "
  >
    Read Full Terms
  </a>
</p>

      </div>
    </section>
  );
};

export default Terms;
