import React from 'react'

export default function Card() {

   // console.log("props", props);
    


  return (
    <div>
       
       <div class="max-w-sm rounded overflow-hidden shadow-lg">
       <img class="w-full" src="https://images.pexels.com/photos/31346973/pexels-photo-31346973/free-photo-of-misty-lake-scene-with-overhanging-branches.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="Sunset in the mountains" />
       <div class="px-6 py-4">
       <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
       <p class="text-gray-700 text-base">
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
       </p>
     </div>
     <div class="px-6 pt-4 pb-2">
       <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
       <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
       <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
     </div>
   </div>

    </div>
  )
}
