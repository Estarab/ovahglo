import React, { useState } from 'react';
import axios from 'axios';

// Import images from assets folder
import birthdayImage1 from '../assets/img1.JPG'; // First birthday image
import birthdayImage2 from '../assets/img3.JPG'; // Second background image

const FlyerGenerator = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [downloadLink, setDownloadLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle file input change
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('name', name);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('http://localhost:3000/generate-birthday-card', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        setDownloadLink(response.data.downloadLink);
      } else {
        setError('Error generating birthday card, please try again.');
      }
    } catch (error) {
      console.error('Error generating birthday card:', error);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Create Your Birthday Card</h1>
      
      <form onSubmit={handleSubmit}>
        {/* User Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Upload Image */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Upload Your Image (Optional)</label>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        >
          {loading ? 'Generating...' : 'Generate Card'}
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div className="mt-4 text-red-500 text-center">
          <p>{error}</p>
        </div>
      )}

      {/* Download Link */}
      {downloadLink && (
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold text-green-600">Your Birthday Card is Ready!</h2>
          <a
            href={downloadLink}
            download="birthday-card.png"
            className="mt-2 inline-block bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
          >
            Download Birthday Card
          </a>
        </div>
      )}
    </div>
  );
};

const BirthdayEcard = ({ name, image }) => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      {/* Main content */}
      <div className="max-w-lg w-full bg-white p-6 rounded-xl shadow-xl relative z-10">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-owhite">
            Happy Birthday, {name}!
          </h1>
          <p className="text-xl text-gray-700 mt-2">
            Wishing you a day filled with love, joy, and celebration!
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center space-x-4">
          <div className="relative w-3/5 h-auto">
            {/* If user uploaded an image, display it */}
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="User Image"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            ) : (
              <img
                src={birthdayImage1}
                alt="Birthday Image 1"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>

        {/* Celebrate Button */}
        <div className="mt-6 text-center">
          <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-l transition-all duration-300">
            Celebrate Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlyerGenerator;




// import React, { useState } from 'react';
// import axios from 'axios';

// const FlyerGenerator = () => {
//   const [name, setName] = useState('');
//   const [image, setImage] = useState(null);
//   const [downloadLink, setDownloadLink] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Handle file input change
//   const handleFileChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const formData = new FormData();
//     formData.append('name', name);
//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       const response = await axios.post('http://localhost:3000/generate-birthday-card', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.data.success) {
//         setDownloadLink(response.data.downloadLink);
//       } else {
//         setError('Error generating birthday card, please try again.');
//       }
//     } catch (error) {
//       console.error('Error generating birthday card:', error);
//       setError('Something went wrong. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//       <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Create Your Birthday Card</h1>
      
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Your Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Upload Your Image (Optional)</label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             accept="image/*"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//         >
//           {loading ? 'Generating...' : 'Generate Card'}
//         </button>
//       </form>

//       {error && (
//         <div className="mt-4 text-red-500 text-center">
//           <p>{error}</p>
//         </div>
//       )}

//       {downloadLink && (
//         <div className="mt-6 text-center">
//           <h2 className="text-xl font-semibold text-green-600">Your Birthday Card is Ready!</h2>
//           <a
//             href={downloadLink}
//             download="birthday-card.png"
//             className="mt-2 inline-block bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
//           >
//             Download Birthday Card
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FlyerGenerator;




// import React, { useState } from 'react';
// import axios from 'axios';

// const FlyerGenerator = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [contact, setContact] = useState('');
//   const [images, setImages] = useState([]);
//   const [downloadLink, setDownloadLink] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Handle file input change
//   const handleFileChange = (e) => {
//     setImages(e.target.files);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('contact', contact);

//     // Append all images to formData
//     for (let i = 0; i < images.length; i++) {
//       formData.append('images', images[i]);
//     }

//     try {
//       const response = await axios.post('http://localhost:3000/generate-flyer', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.data.success) {
//         setDownloadLink(response.data.downloadLink);
//       } else {
//         setError('Error generating flyer, please try again.');
//       }
//     } catch (error) {
//       console.error('Error generating flyer:', error);
//       setError('Something went wrong. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//       <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Create Your Flyer</h1>
      
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Contact Information</label>
//           <input
//             type="text"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             required
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">Upload Images (Max 3)</label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             multiple
//             accept="image/*"
//             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//         >
//           {loading ? 'Generating...' : 'Generate Flyer'}
//         </button>
//       </form>

//       {error && (
//         <div className="mt-4 text-red-500 text-center">
//           <p>{error}</p>
//         </div>
//       )}

//       {downloadLink && (
//         <div className="mt-6 text-center">
//           <h2 className="text-xl font-semibold text-green-600">Your Flyer is Ready!</h2>
//           <a
//             href={downloadLink}
//             download="flyer.png"
//             className="mt-2 inline-block bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
//           >
//             Download Flyer
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FlyerGenerator;




// import React, { useState } from 'react';
// import axios from 'axios';

// const FlyerGenerator = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [contact, setContact] = useState('');
//   const [images, setImages] = useState([]);
//   const [downloadLink, setDownloadLink] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Handle file input change
//   const handleFileChange = (e) => {
//     setImages(e.target.files);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('contact', contact);

//     // Append all images to formData
//     for (let i = 0; i < images.length; i++) {
//       formData.append('images', images[i]);
//     }

//     try {
//       const response = await axios.post('http://localhost:3000/generate-flyer', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.data.success) {
//         setDownloadLink(response.data.downloadLink);
//       }
//     } catch (error) {
//       console.error('Error generating flyer:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Create Your Flyer</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Contact Information</label>
//           <input
//             type="text"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label>Upload Images (Max 3)</label>
//           <input type="file" onChange={handleFileChange} multiple accept="image/*" />
//         </div>

//         <button type="submit" disabled={loading}>
//           {loading ? 'Generating...' : 'Generate Flyer'}
//         </button>
//       </form>

//       {downloadLink && (
//         <div>
//           <h2>Your Flyer is Ready!</h2>
//           <a href={downloadLink} download="flyer.png">
//             Download Flyer
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FlyerGenerator;
