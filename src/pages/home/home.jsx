import { Header } from '../../components/header/header';
import { Banner } from '../../components/banner/banner';
import { About } from '../../components/about/about';
import { Quote } from '../../components/quote/quote';
import { Project } from '../../components/project/project';
import { Skill } from '../../components/skill/skill';
import { Separate } from '../../components/separate/separate';
import { Contact } from '../../components/contact/contact';
import { Footer } from '../../components/footer/footer';
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
            <Skill />
            <Separate />
            <Contact />
            <Footer />
        </div>
    );
};