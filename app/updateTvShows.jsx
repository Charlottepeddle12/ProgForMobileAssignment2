import { Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import { TvShowContext } from '../components/TvShowContext';

export default function UpdateMovies() {


    const [currentTvShow, setCurrentTvShow] = useState(0)
    const { tvShowData, setTvShowData } = useContext(TvShowContext);
    const [title, setTitle] = useState(tvShowData[currentTvShow].title);
    const [genres, setGenres] = useState(tvShowData[currentTvShow].genres);
    const [yearsAired, setYearsAired] = useState(tvShowData[currentTvShow].yearsAired);
    const [summary, setSummary] = useState(tvShowData[currentTvShow].summary);

    const changeGenres = (value) => {
        const updatedArray = value.split(',');
        setGenres(updatedArray)
    }

    const updateTvShowData = () => {

        const updatedData = {
           title: title,
           genres: genres,
           yearsAired: yearsAired,
           summary: summary
        }
        tvShowData[currentTvShow] = updatedData
        setTvShowData(tvShowData)
    }

    const changeTvShowIndex = (value) => {
        const index = parseInt(value)
        setTitle(tvShowData[index].title);
        setGenres(tvShowData[index].genres);
        setYearsAired(tvShowData[index].yearsAired);
        setSummary(tvShowData[index].summary);
        setCurrentTvShow(index);
    }

    return (
        <>
            <Text>Tv show Index</Text>
            <TextInput value={currentTvShow.toString()} onChangeText ={changeTvShowIndex}/>

            <Text>Title</Text>
            <TextInput value={title.toString()} onChangeText={setTitle}/>

            <Text>Genres</Text>
            <TextInput value={genres.toString()} onChangeText={changeGenres} />

            <Text>Years aired</Text>
            <TextInput value={yearsAired.toString()} onChangeText={setYearsAired}/>

            <Text>Summary</Text>
            <TextInput value={summary.toString()} onChangeText={setSummary}/>

            <Button title="Update" onPress={updateTvShowData} />

        </>

    )
}