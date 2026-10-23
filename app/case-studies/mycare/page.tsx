import PortfolioCase from '../../portfolio-case';
import {seriousProjects} from '../../portfolio-data';
export const metadata={title:'MyCare — Repairing Broken Systems'};
export default function Page(){return <PortfolioCase project={seriousProjects[1]}/>}
