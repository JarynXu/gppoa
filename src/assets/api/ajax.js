import axios from 'axios'
import qs from 'qs'

export default function (param) {
    return new Promise((resolve, reject) => {
        console.log(param)
        axios({
            method: 'POST',
            url: param.url || "/hadooptieba",
            data: qs.stringify({data: JSON.stringify(param.data)})
        }).then((response) => {
            console.log(response)
            resolve(response.data.data)
        }).catch(function (error) {
            console.log(error)
            reject(error)
        })
    })
}
