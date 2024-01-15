import { clear, clouds, humidity, mist, rain, search, wind, logo } from "./images";
import Image from "./Image";
import { useState } from "react";

const WeatherApp = () => {
    const apikey = "431b969f6bba153c14abc429716fa132";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const [pic, setPic] = useState(logo);
    const [city, setCity] = useState('');
    const [cityName, setCityName] = useState('');
    const [temp, setTemp] = useState('');
    const [humi, setHumi] = useState('');
    const [wspeed, setWspeed] = useState('');

    const getWeather = async () => {
        const response = await fetch(apiUrl + city + '&appid=' + apikey)
        const data = await response.json();
        setCityName(data.name)
        setTemp(Math.round(data.main.temp) + ' °C')
        setHumi(data.main.humidity + ' %')
        setWspeed(data.wind.speed + ' km/h')

        if (data.weather[0].main === 'Clouds') {
            setPic(clouds)
        }
        else if (data.weather[0].main === 'Clear') {
            setPic(clear)
        }
        else if (data.weather[0].main === 'Rain') {
            setPic(rain)
        }
        else if (data.weather[0].main === 'Mist') {
            setPic(mist)
        }
    }


    return (
        <section className="flex flex-col gap-[0.3in] shadow-xl text-white items-center bg-green-400 p-[30px] rounded-2xl">

            <div className="flex gap-6">
                <input
                    className="bg-gray-100 p-4 text-black w-full rounded-full focus:outline-none"
                    value={city}
                    onChange={(e) => { setCity(e.target.value) }}
                    type="text"
                    placeholder="enter city name">
                </input>

                <Image
                    imageURL={search}
                    alt="Search icon"
                    handleClick={getWeather}
                    myStyles="bg-gray-100 rounded-full p-4 cursor-pointer"
                    w={60}
                    h={60}
                />

            </div>

            <div className="w-full text-center text-6xl font-bold">

                <Image
                    imageURL={pic}
                    alt="Forcast img"
                />
                <h1>{temp}</h1>
                <h1>{cityName}</h1>
            </div>

            <div className="flex w-full items-center justify-between">

                <div className="flex items-center gap-2">
                    <Image
                        imageURL={humidity}
                        alt="Humidity img"
                        w={40}
                        h={40}
                    />

                    <div>
                        <h1>{humi}</h1>
                        <h1>Humidity</h1>
                    </div>

                </div>

                <div className="flex items-center gap-2">
                    <Image
                        imageURL={wind}
                        alt="Wind Speed"
                        w={40}
                        h={40}
                    />

                    <div>
                        <h1>{wspeed}</h1>
                        <h1>Wind Speed</h1>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default WeatherApp