'use client';

import {useEffect,useState} from 'react';
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,type CarouselApi} from '@/components/ui/carousel';
import {Button} from '@/components/ui/button';
type Offer={id:string;title:string;problem:string;copy:string;deliverable:string};
const captions=['The bigger picture','Finding your bearings','Room to explore','A clear way forward'];
export default function OfferAlbum({offers}:{offers:Offer[]}){
 const [reducedMotion,setReducedMotion]=useState(false);
 useEffect(()=>{const media=window.matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>setReducedMotion(media.matches);sync();media.addEventListener('change',sync);return()=>media.removeEventListener('change',sync)},[]);
 const [api,setApi]=useState<CarouselApi>();const [current,setCurrent]=useState(0);
 useEffect(()=>{if(!api)return;const sync=()=>setCurrent(api.selectedScrollSnap());sync();api.on('select',sync);return()=>{api.off('select',sync)}},[api]);
 const remaining=offers.length-current-1;
 return <Carousel setApi={setApi} opts={{loop:false,watchFocus:true,duration:reducedMotion?0:25}} className="offer-album" aria-label="Four ways I can help" tabIndex={0}>
 <div className="album-stack"><div className="album-pages" aria-hidden="true">{Array.from({length:remaining},(_,i)=><span key={i} style={{transform:`translate(${(i+1)*7}px,${(i+1)*9}px) rotate(${(i+1)*.5}deg)`,zIndex:-i-1}}/>)}</div>
 <CarouselContent className="album-track">{offers.map((o,i)=><CarouselItem key={o.id} className="album-slide" aria-label={`${i+1} of ${offers.length}`} aria-hidden={current!==i} inert={current!==i}><article className="album-sheet"><figure className={'album-photo photo-'+i}><img src="https://images.unsplash.com/photo-1682839487854-ef6f8a088eeb?auto=format&fit=crop&w=1000&q=85" alt=""/><figcaption>{captions[i]} <span>FIELD NOTES / 0{i+1}</span></figcaption></figure><div className="album-copy"><p className="eyebrow">MY APPROACH / 0{i+1}</p><h3>{o.title}</h3><p className="album-problem">{o.problem}</p><p>{o.copy}</p><div className="album-deliverable"><span>WHAT I CAN DELIVER</span><p>{o.deliverable}</p></div><a className="text-link" href="/contact">Talk through this challenge ↗</a></div></article></CarouselItem>)}</CarouselContent></div>
 <div className="album-controls"><CarouselPrevious className="album-arrow"/><div className="album-status" role="status" aria-live="polite"><strong>0{current+1} <span>/ 0{offers.length}</span></strong><p>{remaining===0?'Final page — the complete picture.':`${remaining} ${remaining===1?'page':'pages'} still to explore`}</p></div><CarouselNext className="album-arrow"/></div>{remaining===0&&<Button variant="ghost" className="album-restart" onClick={()=>api?.scrollTo(0)}>↶ Back to the beginning</Button>}
 </Carousel>
}
