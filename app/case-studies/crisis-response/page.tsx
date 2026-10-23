import PortfolioCase from '../../portfolio-case';
import {seriousProjects} from '../../portfolio-data';
export const metadata={title:'Six Seconds or Dead'};
export default function Page(){return <PortfolioCase project={seriousProjects[2]}/>}
