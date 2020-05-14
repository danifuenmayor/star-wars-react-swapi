const addId = data => ({
    ...data,
    results: data.results.map((result) => {
        const urlArray = result.url.split('/').filter(item => item);
        return {
            id: urlArray[urlArray.length - 1],
            ...result
        }
    })
})

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: {},
            planets: {},
            vehicles: {}
        },
        actions: {
            getPeople: url => {
                fetch(url)
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            people: addId(data)
                        })
                    })
            },
            getPlanets: url => {
                fetch(url)
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            planets: addId(data)
                        })
                    })
            },
            getVehicles: url => {
                fetch(url)
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            vehicles: addId(data)
                        })
                    })
            }
        }
    }
}
export default getState;