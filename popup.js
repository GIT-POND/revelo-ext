const baseAPI = "https://o1xv0g.deta.dev/"

const params = {
    scarcity:false,
    countdowns:false,
    socialProof:false
}

const getRequest = async (endPoint) => {
    param = {
        url:
    }

    axios.get(`${baseAPI}${endPoint}`)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}

const postRequest = async () => {

}