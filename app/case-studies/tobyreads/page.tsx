import PortfolioCase from '../../portfolio-case';
import type {Project} from '../../portfolio-data';
export const metadata={title:'TOBYreads — Multimedia reading platform'};
const project:Project={
 number:'07',id:'tobyreads',title:'TOBYreads',client:'TOBYreads · Personal project',tone:'personal',
 summary:'Ebooks, audiobooks, comics, and manga in a single, integrated platform.',
 chapters:[
  {label:'The problem',copy:'Both eReaders and audiobook readers tend to do one thing passably, but are otherwise hot garbage.'},
  {label:'The constraint',copy:'Manga readers don’t work well with comic readers, ebook readers are basically just PDF readers with mediocre functionality, and audiobook readers often lack obvious features or are tethered to a storefront.'},
  {label:'The system',copy:'I wanted a single, integrated platform that would let me keep track of all my ebooks, audiobooks, comics, and manga. Long story short, that’s what I built.'}
 ],
 outcome:'The prototype demonstrates a multimedia platform that contains file types in separate folders while maintaining functionality and aesthetics. That’s it. These things don’t need to be overengineered.'
};
export default function Page(){return <PortfolioCase project={project}/>}
