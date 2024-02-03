import { Header } from '../../components/header/header';
import { Banner } from '../../components/banner/banner';
import { About } from '../../components/about/about';
import { Quote } from '../../components/quote/quote';
import { Project } from '../../components/project/project';
import DataProjects from '../../data/DataProjects.json';
import './home.scss'

export const Index = () => {

    return (
        <div>
            <Header />
            <Banner />
            <About />
            <Quote />
            <Project data={DataProjects} />
        </div>
    );
};