<script setup>
import IconWeather from '../components/icons/IconWeather.vue';
</script>

<template>
  <main class="px-4 pt-4 flex flex-col gap-4">
    <form>
      <div class="flex">
          <div class="relative w-full">
              <input type="search" id="search" class="block p-2.5 pl-4 w-full z-20 text-sm rounded-xl focus:ring-0 border-none" placeholder="your city">
              <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium focus:ring-0">
                  <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <span class="sr-only">Search</span>
              </button>
          </div>
      </div>
    </form>


    


    

    <div class="flex flex-col gap-4 pb-4 rounded-3xl dark:text-white dark:bg-gray-800">
      <div class="bg-cover bg-center rounded-t-3xl object-cover w-full h-48" style="background-image: url('https://source.unsplash.com/random/?ukraine')"></div>

      


      <div class="px-4 flex justify-between">
        <div class="flex flex-col">
          <h2 class="font-bold text-2xl">Sunday</h2>
          <span class="">03 Oct 2022</span>
          <span class="">Kyiv, UA</span>
        </div>
        <div class="font-medium text-7xl">
          29&#176;C
        </div>
      </div>
  
      <div class="px-4 w-full">
        <table class="w-full">
          <tr>
            <td class="font-bold uppercase">Precipitation</td>
            <td class="text-right">0 %</td>
          </tr>
          <tr>
            <td class="font-bold  uppercase">Humidy</td>
            <td class="text-right">34 %</td>
          </tr>
          <tr>
            <td class="font-bold  uppercase">Wind</td>
            <td class="text-right">0 km/h</td>
          </tr>
        </table>
      </div>

      <div class="px-4 w-full">
        <ul class="w-full flex dark:bg-gray-900 rounded-xl">
          <li class="flex flex-col gap-4 p-4 items-center grow" >
            <IconWeather icon="partly-cloudy-day" />
            <span>Tue</span>
            <span>29&#176;C</span>
          </li>
          <li class="flex flex-col gap-4 p-4 items-center grow">
            <IconWeather icon="partly-cloudy-day" />
            <span>Tue</span>
            <span>29&#176;C</span>
          </li>
          <li class="flex flex-col gap-4 p-4 items-center grow">
            <IconWeather icon="partly-cloudy-day" />
            <span>Tue</span>
            <span>29&#176;C</span>
          </li>
          <li class="flex flex-col gap-4 p-4 items-center grow">
            <IconWeather icon="partly-cloudy-day" />
            <span>Tue</span>
            <span>29&#176;C</span>
          </li>
        </ul>
      </div>
    </div>


  </main>
</template>
