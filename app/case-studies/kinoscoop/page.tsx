import PortfolioCase from '../../portfolio-case';
import type {Project} from '../../portfolio-data';
export const metadata={title:'Kinoscoop — Film logging and discovery'};
const project:Project={
 number:'08',id:'kinoscoop',title:'Kinoscoop',client:'Kinoscoop · Personal project',tone:'personal',
 summary:'One part blog, one part diary, one part dashboard with lots of charts.',
 chapters:[
  {label:'The problem',copy:'I like movies. A lot. Letterboxd is good, but I wanted a logging system that would pair with Tobytube, my personal media system. The goal was to integrate the media player and what is essentially a blog so I can keep all my movie stuff under one roof.'},
  {label:'The constraint',copy:'I’m a visual person. I tend to remember movies as much by posters as titles, and I like to see my data mapped out. Thus, I need visual representation of both the data and the movies themselves.'},
  {label:'The system',copy:'One part blog, one part diary, one part dashboard with lots of charts.'}
 ],
 outcome:'That I’m a cinephile who likes to meticulously log the things they’ve watched, and little else. It’s basically my wife’s book blog with Mac95 aesthetics, but it’s my page so I did what I felt like.'
};
export default function Page(){return <PortfolioCase project={project}/>}
