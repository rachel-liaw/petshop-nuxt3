// import { computed } from "vue";

export default function () {
    function capitalizeString(string){
        return string[0].toUpperCase() + string.slice(1);
    }

    return {
        capitalizeString
    }
}