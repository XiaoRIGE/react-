import Axios from 'axios';
import Jsonp from 'jsonp';
class axios {
    static jsonp(options) {
        console.log(1111111)
        return new Promise((resolve, reject) => {
            console.log(22222)
            Jsonp(options.url, { params: 'callback' }, function (err, response) {
                console.log(err,'err')
                console.log(response,'response')
                if(response){
                    resolve(response);
                }else{
                    reject(err)
                }
            })
        })
    }
    static axios(options){
        // Axios.get(options.url)
        return new Promise((resolve,reject)=>{
            if(options.type==='get'){
                Axios.get(options.url).then((res)=>{
                    resolve(res)
                }).catch(err=>{
                    reject(err)
                })
            }
        })
    }
};
export default axios;