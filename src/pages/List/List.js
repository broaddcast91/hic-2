// import React, { useState } from 'react';
// import NewHeader from '../../components/Header/NewHeader';
// import './list.css';
// import { useLocation } from 'react-router-dom';
// import { format } from 'date-fns';
// import { DateRange } from 'react-date-range';
// import SearchItem from '../../components/searchItem/SearchItem';

// const List = () => {
//   const location = useLocation();
//   const [destination, setDestination] = useState(false);
//   const [date, setDate] = useState(false);
//   const [openDate, setOpenDate] = useState(false);
//   const [options, setOptions] = useState(false);
//   return (
//     <>
//       <div>
//         <NewHeader />
//         <div
//           class='relative overflow-hidden bg-cover bg-no-repeat'
//           style={{
//             backgroundPosition: '50%',
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1594560913095-8cf34bab82ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80')",
//             height: '400px',
//           }}
//         >
//           <div class='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed'>
//             <div class='flex h-full items-center justify-center'>
//               <div class='px-6 text-center text-white md:px-12'>
//                 <h1 class='mt-2 mb-8 text-2xl font-bold tracking-tight md:text-6xl xl:text-7xl'>
//                   Your Oasis of <br />
//                   <span>Serenity and Luxury</span>
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='listResult'>
//           <SearchItem
//             title='Standard Single'
//             price='4,099'
//             img='https://d3ki85qs1zca4t.cloudfront.net/bookingEngine/property_images/3558/room_type_images/17.Inner+Circle%20Standard%20Room.jpg'
//           />
//           <SearchItem title='Executive Room' price='5,099' />
//           <SearchItem title='Deluxe Room' price='6,099' />
//           <SearchItem title='Deluxe Suite' price='7,099' />
//           <SearchItem title='Banquet Hall' price='10,099' />
//         </div>
//       </div>
//     </>
//   );
// };

// export default List;
