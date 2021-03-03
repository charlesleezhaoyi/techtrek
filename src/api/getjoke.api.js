import Axios from 'axios';

export const getjoke = async () => {
    return new Promise((resolve, reject) => {
        try {
            Axios.get("https://official-joke-api.appspot.com/random_joke").then(
                (response) => {
                    setJoke(response.data.setup + "..." + response.data.punchline);
                }
            ).catch((e) => { reject(e) })
        } catch (error) {
            reject(error)
        }
    })
}
