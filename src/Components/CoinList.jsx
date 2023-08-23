import React from "react";
import { useEffect, useState, useContext } from "react";

import GeckoUrl from "../APIs/GeckoUrl";
import {WatchListContext} from '../Context/CoinWatchList'

const CoinList = () => {

    const [coins , setCoins] = useState([])
    const {watchList} = useContext(WatchListContext)
    const [isLoading, setIsLoading] = useState(false)

    console.log(watchList)
    useEffect(() => {

        const fetchData = async () => {

            setIsLoading(true)
            const response = await GeckoUrl.get('/coins/markets', {
                params:{
                    vs_currency: 'usd',
                    ids: watchList.join()
                }
            })

            // console.log(response.data)
            setCoins(response.data)
            setIsLoading(false);
        }

        return () => fetchData() 
    }, [])


    const renderCoins = () => {

        if(isLoading) {
            return <div className="">Loading...</div>
        }

        return (
            <ul className="coin-list list-group mt-2">
                {coins.map(coin => {
                    
                    <Coin key={coin.id} coin={coin} />
                })}

            </ul>
        )
    }


    return (

        <div className=""></div>
    )
}

export default CoinList;