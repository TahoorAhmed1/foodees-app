import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'
import { useState } from 'react'

const Categories = () => {
    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
            paddingHorizontal: 10,
            paddingTop: 20
        }}>

            {data?.map((_, index) => (

                <CategoryCard key={index} data={{ title: "Chamine", imageUri: "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/02/p3wdfm-1.jpg" }} />
            ))}



        </ScrollView>
    )
}

export default Categories