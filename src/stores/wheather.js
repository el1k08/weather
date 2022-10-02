import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', () => {
    const weather = ref({});
    const loading = ref(true);

    const fetchData = () => {
        loading.value = true
        fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Ashdod/next7days?unitGroup=metric&key=LDV9HD39QRX2WXMB4EU5ACLTJ&contentType=json')
            .then((res) => {
                console.log(res);
                loading.value = false
            })
            .catch(error => {
                console.error(error);
            })
    } 

    const getWeather = computed(() => {

    })

  

    return { weather, doubleCount, fetchData }
})
