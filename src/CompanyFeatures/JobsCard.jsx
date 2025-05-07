// import JobCard from '../components/JobCard';

// // আপনার কম্পোনেন্টে
// function JobList() {
//   // আপনার কোম্পানি ও চাকরি ডেটা
//   const company = {
//     name: "টেকসলিউশন",
//     logo: "https://example.com/logo.png"
//   };
  
//   const job = {
//     id: "job-001",
//     title: "ফ্রন্টএন্ড ডেভেলপার",
//     bannerImage: "https://example.com/banner.jpg",
//     location: "ঢাকা অফিস",
//     salary: "৫০,০০০ - ৮০,০০০ টাকা",
//     jobType: "পূর্ণকালীন",
//     description: "আমরা অভিজ্ঞ ফ্রন্টএন্ড ডেভেলপার খুঁজছি...",
//     requirements: [
//       "HTML, CSS এবং JavaScript-এ দক্ষতা",
//       "React অভিজ্ঞতা",
//       "RESTful API-এর সাথে পরিচিত"
//     ]
//   };

//   return (
//     <div>
//       <JobCard job={job} companyName={company.name} companyLogo={company.logo} />
//     </div>
//   );
// }






// // import React, { useState } from 'react';
// // import { FaMapMarkerAlt, FaMoneyBillWave, FaBriefcase } from 'react-icons/fa';

// // const JobCard = ({ job, companyName, companyLogo }) => {
// //   const [showModal, setShowModal] = useState(false);

  
// //   const toggleModal = () => {
// //     setShowModal(!showModal);
// //   };

// //   return (
// //     <>
// //       {/* চাকরি কার্ড */}
// //       <div className="bg-white rounded-lg overflow-hidden shadow-winter border border-winter-200 hover:shadow-lg transition-all duration-300 p-5 mb-4">
// //         <div className="flex justify-between items-center mb-4">
// //           <div className="flex items-center">
// //             <img 
// //               src={companyLogo || "https://placehold.co/100?text=Logo"} 
// //               alt={companyName} 
// //               className="w-12 h-12 object-contain rounded-md mr-4"
// //             />
// //             <div>
// //               <h3 className="font-bold text-xl text-winter-800">{job.title}</h3>
// //               <p className="text-winter-600">{companyName}</p>
// //             </div>
// //           </div>
// //           <span className={`px-3 py-1 rounded-full text-sm font-medium ${
// //             job.jobType === "পূর্ণকালীন" ? "bg-green-100 text-green-800" : 
// //             job.jobType === "খণ্ডকালীন" ? "bg-blue-100 text-blue-800" : 
// //             "bg-purple-100 text-purple-800"
// //           }`}>
// //             {job.jobType}
// //           </span>
// //         </div>

// //         <div className="flex flex-wrap gap-3 mb-4 text-sm text-winter-600">
// //           <div className="flex items-center">
// //             <FaMapMarkerAlt className="mr-1 text-primary-500" />
// //             <span>{job.location}</span>
// //           </div>
// //           <div className="flex items-center">
// //             <FaMoneyBillWave className="mr-1 text-primary-500" />
// //             <span>{job.salary}</span>
// //           </div>
// //           <div className="flex items-center">
// //             <FaBriefcase className="mr-1 text-primary-500" />
// //             <span>{job.jobType}</span>
// //           </div>
// //         </div>

// //         <p className="text-winter-700 mb-4 line-clamp-2">{job.description}</p>

// //         <div className="flex justify-between items-center">
// //           <div>
// //             <div className="flex flex-wrap gap-2">
// //               {job.requirements && job.requirements.slice(0, 2).map((req, index) => (
// //                 <span key={index} className="inline-block px-2 py-1 bg-winter-100 text-winter-700 rounded-md text-xs">
// //                   {req.length > 20 ? req.substring(0, 20) + '...' : req}
// //                 </span>
// //               ))}
// //               {job.requirements && job.requirements.length > 2 && (
// //                 <span className="inline-block px-2 py-1 bg-winter-100 text-winter-700 rounded-md text-xs">
// //                   +{job.requirements.length - 2} আরও
// //                 </span>
// //               )}
// //             </div>
// //           </div>
// //           <button
// //             onClick={toggleModal}
// //             className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
// //           >
// //             বিস্তারিত
// //           </button>
// //         </div>
// //       </div>

// //       {/* চাকরির বিস্তারিত মোডাল */}
// //       {showModal && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
// //           <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
// //             <div className="flex justify-between items-start mb-6">
// //               <div className="flex items-center">
// //                 <img 
// //                   src={companyLogo || "https://placehold.co/100?text=Logo"} 
// //                   alt={companyName} 
// //                   className="w-16 h-16 object-contain rounded-md mr-4"
// //                 />
// //                 <div>
// //                   <h2 className="text-2xl font-bold text-winter-900">{job.title}</h2>
// //                   <p className="text-xl text-winter-700">{companyName}</p>
// //                 </div>
// //               </div>
// //               <button 
// //                 onClick={toggleModal}
// //                 className="text-winter-500 hover:text-winter-800"
// //               >
// //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //                 </svg>
// //               </button>
// //             </div>

// //             {job.bannerImage && (
// //               <div className="mb-6">
// //                 <img 
// //                   src={job.bannerImage} 
// //                   alt={`${job.title} Banner`} 
// //                   className="w-full h-48 object-cover rounded-lg"
// //                 />
// //               </div>
// //             )}

// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
// //               <div className="bg-winter-50 p-4 rounded-lg">
// //                 <div className="flex items-center mb-2">
// //                   <FaMapMarkerAlt className="mr-2 text-primary-600" />
// //                   <span className="font-semibold text-winter-800">অবস্থান</span>
// //                 </div>
// //                 <p className="text-winter-700">{job.location}</p>
// //               </div>
// //               <div className="bg-winter-50 p-4 rounded-lg">
// //                 <div className="flex items-center mb-2">
// //                   <FaMoneyBillWave className="mr-2 text-primary-600" />
// //                   <span className="font-semibold text-winter-800">বেতন</span>
// //                 </div>
// //                 <p className="text-winter-700">{job.salary}</p>
// //               </div>
// //               <div className="bg-winter-50 p-4 rounded-lg">
// //                 <div className="flex items-center mb-2">
// //                   <FaBriefcase className="mr-2 text-primary-600" />
// //                   <span className="font-semibold text-winter-800">চাকরির ধরণ</span>
// //                 </div>
// //                 <p className="text-winter-700">{job.jobType}</p>
// //               </div>
// //             </div>

// //             <div className="mb-6">
// //               <h3 className="text-xl font-semibold mb-3 text-winter-800">চাকরির বিবরণ</h3>
// //               <div className="text-winter-700 bg-winter-50 p-4 rounded-lg">
// //                 <p>{job.description}</p>
// //               </div>
// //             </div>

// //             <div className="mb-6">
// //               <h3 className="text-xl font-semibold mb-3 text-winter-800">যোগ্যতা ও দক্ষতা</h3>
// //               <div className="bg-winter-50 p-4 rounded-lg">
// //                 <ul className="list-disc list-inside space-y-2 text-winter-700">
// //                   {job.requirements && job.requirements.map((req, index) => (
// //                     <li key={index}>{req}</li>
// //                   ))}
// //                 </ul>
// //               </div>
// //             </div>

// //             <div className="flex justify-end gap-4">
// //               <button
// //                 onClick={toggleModal}
// //                 className="px-4 py-2 border border-winter-300 text-winter-700 rounded-md hover:bg-winter-100 transition-colors"
// //               >
// //                 বন্ধ করুন
// //               </button>
// //               <button
// //                 className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
// //               >
// //                 আবেদন করুন
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default JobCard;

