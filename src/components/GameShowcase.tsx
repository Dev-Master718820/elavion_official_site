import Link from 'next/link';
import {TrailerPlayer} from './TrailerPlayer';
import {ArrowUpRight} from 'lucide-react';
import photoCredits from '../../product-photo-manifest.json';
import trailerData from '../../public/images/games/game-art-manifest.json';

export function GameShowcase(){return <section className="game-showcase"><div className="container section">
  <div className="section-heading"><div><p className="eyebrow">THE WORLDS PEOPLE PLAY IN</p><h2>Recognizable games.<br/>Extraordinary experiences.</h2></div><Link href="/industries/entertainment/gaming" className="text-link">Explore gaming <ArrowUpRight size={18}/></Link></div>
  <p className="game-showcase-intro">Step inside Fortnite, Minecraft, and EA SPORTS FC through official trailers. These publisher-created experiences are third-party industry references—not ELAVION games or sponsored placements.</p>
  <div className="game-trailers">{trailerData.trailers.map((game,i)=><article className="game-trailer" key={game.slug}>
    <TrailerPlayer slug={game.slug} name={game.game} title={game.title} embedUrl={game.embedUrl} sourceUrl={game.sourceUrl}/>
    <div className="trailer-copy"><p className="eyebrow">0{i+1} / {game.owner}</p><h3>{game.game}</h3><p>{game.caption}</p>{game.slug==='minecraft'&&<p className="preview-credit">Preview hardware photo: <a href={photoCredits['xbox-series-x'].sourceUrl} target="_blank" rel="noopener noreferrer">{photoCredits['xbox-series-x'].author}</a> · <a href={photoCredits['xbox-series-x'].licenseUrl} target="_blank" rel="noopener noreferrer">{photoCredits['xbox-series-x'].license}</a> · resized and tinted.</p>}<div className="trailer-links"><Link href={`/products/${game.slug}`}>Explore the game <ArrowUpRight size={15}/></Link><a href={game.sourceUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube <ArrowUpRight size={15}/></a></div></div>
  </article>)}</div>
  <p className="trailer-note">Official archive trailers, not live advertising or claims about the latest release. Select “Load official trailer” to connect to YouTube in privacy-enhanced mode; no autoplay. Local previews use editorial context photography and brand marks, not game screenshots. If playback is unavailable, use “Watch on YouTube.”</p>
</div></section>}
