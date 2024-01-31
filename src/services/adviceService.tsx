const adviceService = async () => {
    console.log("attata")
    fetch('https://api.adviceslip.com/advice').then(response => 
        response.json()
    ).then(data => {
        console.log("data")
        console.log(data.slip.advice)
        return data
    }).catch(err => {
        console.log("This is an error", err)
    })
}
//adviceService()

export default adviceService;