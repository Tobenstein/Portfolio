import PortfolioCase from '../../portfolio-case';
import type {Project} from '../../portfolio-data';

export const metadata={title:'MoonGarden — Putting Growth in Growth'};
const project:Project={
 number:'06',id:'moongarden',client:'MoonGarden – Healthcare Systems',
 title:'Putting Growth in Growth: a User-Driven Wellness Platform.',
 summary:'Creating a positive feedback loop for self-driven self-help without the pressures of gamification.',
 outcome:'A user-driven self-help platform which offers positive reinforcement and visual representations of growth.',
 chapters:[
  {label:'The Problem',copy:'An audit of mental health-focused apps shows that they either rely heavily on gamification or veer on the side of clinical sterility. They either offer no reward system or turn into a game such that pressure to use the app applies more stress than relief.'},
  {label:'The Constraint',copy:'Creating a task manager that focuses on reward without causing emotional burden. We want users to see the app as a tool, not an obligation.'},
  {label:'The System',copy:'Users set their level of investment. Rewards are offered without penalties, emphasising self-forgiveness as part of the growth process. The garden gives users a visual representation of growth as a metaphor for their own.'}
 ]
};
export default function Page(){return <PortfolioCase project={project} heading={<>Putting <em>Growth</em> in Growth: a User-Driven Wellness Platform.</>}/>}
