<script setup>

    import { computed, onMounted } from 'vue'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faSun, faMoon, faCloud, faCloudSun, faCloudMoon, faCloudRain, faCloudSunRain, faCloudMoonRain, faSnowflake, faCloudBolt, faWind} from '@fortawesome/free-solid-svg-icons'

    library.add(faSun, faMoon, faCloud, faCloudSun, faCloudMoon, faCloudRain, faCloudSunRain, faCloudMoonRain, faSnowflake, faCloudBolt, faWind)

    const props = defineProps(['icon']);

    const faIcon = computed(() => {
        switch(props.icon) {
            case 'clear-day':
                return 'fa-sun'
            case 'clear-night':
                return 'fa-moon'
            case 'cloudy':
                return 'fa-cloud'
            case 'partly-cloudy-day':
                return 'fa-cloud-sun'
            case 'partly-cloudy-night':
                return 'fa-cloud-moon'
            case 'rain':
                return 'fa-cloud-rain'
            case 'showers-day':
                return 'fa-cloud-sun-rain'
            case 'showers-night':
                return 'fa-cloud-moon-rain'
            case 'snow':
                return 'fa-snowflake'
            case 'thunder-rain':
                return 'fa-cloud-bolt'
            case 'wind':
                return 'fa-wind'
            default:
                return 'fa-sun'
        }   
    })

    onMounted(() => {
        console.log(faIcon.value)
    })


</script>

<template>
    <font-awesome-icon v-if="faIcon" :icon="faIcon" />
</template>