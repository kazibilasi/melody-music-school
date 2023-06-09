import React from 'react';
import Header from '../Header/Header';
import PrivateLesson from '../PrivateLesson/PrivateLesson';
import SummerArtsGarden from '../Body/SummerArtsGarden'
import PopularClasses from '../Body/PopularClasses/PopularClasses';
import ExtraSection from '../Body/extraSection';
import TopInstructors from '../TopInstructors/TopInstructors';

const Home = () => {
    return (
        <div>
            <Header></Header>

            <SummerArtsGarden></SummerArtsGarden>
            <PopularClasses></PopularClasses>
            <ExtraSection></ExtraSection>
            <PrivateLesson></PrivateLesson>
            <TopInstructors></TopInstructors>
        </div>
    );
};

export default Home;