// export default {
//     formatDate(unix){
//         function fixedZero(num){
//             return num>=10? (''+num):('0'+num)
//         }
//         let date= new Date(unix)
//         let year=date.getFullYear()
//         let mouth=fixedZero(date.getMonth()+1)
//         let day=fixedZero(date.getDate())
//         let hour=fixedZero(date.getHours())
//         let min =fixedZero(date.getMinutes())
//         let seconds=fixedZero(date.getSeconds())
//         let timeStr=`${year}-${mouth}-${day}
//          ${hour}:${min}:${seconds}`
//         return timeStr
//     }
// }
import * as fetch from 'axios'
export function formDate(unix){
        function fixedZero(num){
            return num>=10? (''+num):('0'+num)
        }
        let date= new Date(unix)
        let year=date.getFullYear()
        let mouth=fixedZero(date.getMonth()+1)
        let day=fixedZero(date.getDate())
        let hour=fixedZero(date.getHours())
        let min =fixedZero(date.getMinutes())
        let seconds=fixedZero(date.getSeconds())
        let timeStr=`${year}-${mouth}-${day}
         ${hour}:${min}:${seconds}`
        return timeStr
    }

const xhr =fetch.create({
    baseURL:'',
    timeout:150000
})
export const axios={
    get(url,date,config){

    }
}


