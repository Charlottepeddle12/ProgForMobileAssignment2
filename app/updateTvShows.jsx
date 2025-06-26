import { Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import { TvShowContext } from '../components/TvShowContext';
import {Picker} from '@react-native-picker/picker';

export default function UpdateMovies() {


    const [currentTvShow, setCurrentTvShow] = useState(0)
    const { tvShowData, setTvShowData } = useContext(TvShowContext);
    const [title, setTitle] = useState(tvShowData[currentTvShow].title);
    const [genres, setGenres] = useState(tvShowData[currentTvShow].genres);
    const [yearsAired, setYearsAired] = useState(tvShowData[currentTvShow].yearsAired);
    const [summary, setSummary] = useState(tvShowData[currentTvShow].summary);
    const [poster, setPoster] = useState(tvShowData[currentTvShow].image)

    const changeGenres = (value) => {
        const updatedArray = value.split(',');
        setGenres(updatedArray)
    }

    const updateTvShowData = () => {

        const updatedData = {
           title: title,
           genres: genres,
           yearsAired: yearsAired,
           summary: summary,
           image : poster
        }
        tvShowData[currentTvShow] = updatedData
        setTvShowData(tvShowData)
    }

    const changeTvShowIndex = (value) => {
        const index = parseInt(value);
        setTitle(tvShowData[index].title);
        setGenres(tvShowData[index].genres);
        setYearsAired(tvShowData[index].yearsAired);
        setSummary(tvShowData[index].summary);
        setCurrentTvShow(index);
    }

    return (
        <>
            <Text>Tv show Index</Text>
             <Picker
                  selectedValue={currentTvShow}
                  onValueChange={(itemValue, itemIndex) =>
                    changeTvShowIndex(itemIndex)
                  }>
                  <Picker.Item label="Tv show 1" value="tv1" />
                  <Picker.Item label="Tv show 2" value="tv2" />
                  <Picker.Item label="Tv show 3" value="tv3" />
                </Picker>

            <Text>Change poster</Text>

            //TODO: FIX SO YOU CAN SELECT A POSTER. LOOK AT https://github.com/EricStockTeacher/EricsMovies/commit/96c6d11963dfea5293966256ff68736c08eb52f7
             <Picker
                  selectedValue={currentTvShow}
                  onValueChange={(itemValue, itemIndex) =>
                    changePoster(itemIndex)
                  }>
                  <Picker.Item label="Stranger Things Season 1" value="" />
                  <Picker.Item label="Stranger Things Season 4" value="" />
                  <Picker.Item label="The Office 1" value="" />
                  <Picker.item label="The Office 2" value=""/>
                  <Picker.item label="Bojack Horseman 1" value=""/>
                  <Picker.item label="Bojack Horseman 2" value=""/>
                </Picker>

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