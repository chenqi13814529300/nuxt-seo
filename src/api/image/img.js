import axios from"axios";

const getHomeImg=(typeId)=>{
    return axios.get('api/img/getHomeImg',{
        params:{
            typeId:typeId
        }
    })
}

export default{
    getHomeImg
}