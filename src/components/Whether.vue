<script setup>
    import { ref } from 'vue'
    import { storeToRefs } from "pinia";
    import { useWeatherStore } from '../stores/wheather'

    const weatherStore = useWeatherStore();
    const { weather, loading } = storeToRefs(weatherStore);
    const { fetchData } = weatherStore;

    const selected = ref({});

    const onSelect = () => {
        
    }

    // onMounted(async () => {
    //     try {
    //         await fetchData();
    //     } catch (e) {
            
    //     }
    // });
</script>
<template>
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
          <li class="flex flex-col gap-4 p-4 items-center grow bg-white text-gray-900 rounded-xl" >
            <IconWeather icon="clear-day" class="text-3xl" />
            <span>Tue</span>
            <span class="font-bold">29&#176;C</span>
          </li>
          <li class="flex flex-col gap-4 p-4 items-center grow">
            <IconWeather icon="partly-cloudy-day" class="text-3xl" />
            <span>Tue</span>
            <span class="font-bold">29&#176;C</span>
          </li>
          <li class="flex flex-col gap-4 p-4 items-center grow">
            <IconWeather icon="clear-day" class="text-3xl" />
            <span>Tue</span>
            <span class="font-bold">29&#176;C</span>
          </li>
          <li class="flex flex-col gap-4 p-4 items-center grow">
            <IconWeather icon="showers-day" class="text-3xl" />
            <span>Tue</span>
            <span class="font-bold">29&#176;C</span>
          </li>
        </ul>
      </div>
    </div>
</template>