import PortfolioCase from '../../portfolio-case';
import {personalProjects} from '../../portfolio-data';
export const metadata={title:'Hilareads: Rivers of Data, Mountains of Fun'};
export default function Page(){return <PortfolioCase project={personalProjects[1]}/>}
