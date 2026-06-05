type PressItem = {
  outlet: string;
  date: string;
  title: string;
  description: string;
  href?: string;
  embed?: string;
  action: string;
  color: string;
};

const pressItems: PressItem[] = [
  {
    outlet: "Ey! Daily",
    date: "27 May 2026",
    title: "Explainer: Slopaganda",
    description:
      "AI-propaganda verschijnt steeds vaker op social media. Onderzoekers hebben er zelfs een naam voor: slopaganda. In deze explainer kom je erachter hoe slopaganda werkt, waarom het gevaarlijk kan zijn en wat jij kunt doen om de verspreiding ervan tegen te gaan.",
    href: "https://eydaily.nl/tech/explainer-slopaganda/",
    action: "Read article",
    color: "bg-blue-400",
  },
  {
    outlet: "Salon",
    date: "24 May 2026",
    title: "AI is breaking our political reality",
    description:
      "AI-generated ads and deepfakes are being deployed in congressional races and confusing voters.",
    href: "https://www.salon.com/2026/05/24/ai-is-breaking-our-political-reality/",
    action: "Read article",
    color: "bg-rose-400",
  },
  {
    outlet: "Media Diversity Institute (MDI)",
    date: "21 May 2026",
    title: "Slopaganda Turns Stereotypes into Content",
    description:
      "A new political weapon is spreading through social media feeds, often disguised as entertainment. Sometimes it looks like a Lego animation, a rap video, a fake influencer, a battlefield clip, or a meme. It is cheap to make, fast to publish, and easy to tailor to different audiences. Researchers call it slopaganda: AI-generated propaganda content designed to manipulate political beliefs, emotions, and attention.",
    href: "https://www.media-diversity.org/slopaganda-turns-stereotypes-into-content/",
    action: "Read article",
    color: "bg-orange-400",
  },
  {
    outlet: "KQED / NPR",
    date: "20 May 2026",
    title: "Iran Is Winning The Slopaganda War",
    description:
      "Dr. Michal Klincewicz discusses how AI-generated LEGO videos are reshaping wartime propaganda, information ecosystems, and the meme war around the U.S.-Israel-Iran conflict.",
    href: "https://www.kqed.org/news/12084447/iran-is-winning-the-slopaganda-war",
    action: "Listen now",
    color: "bg-teal-400",
  },
  {
    outlet: "The Christian Science Monitor",
    date: "20 May 2026",
    title: "With viral 'Lego' videos, Iran stakes claim as a propaganda power player",
    description:
      "Feature on Iran's viral AI-driven propaganda campaign and its reach with Western audiences, featuring Dr. Michal Klincewicz.",
    href: "https://www.csmonitor.com/World/Middle-East/2026/0520/iran-ai-slopaganda-propaganda-social-media-trump",
    action: "Read article",
    color: "bg-cyan-400",
  },
  {
    outlet: "Medieinstitutet Fojo",
    date: "12 May 2026",
    title: "Myras meme-skola 3: Slopagandan och leksakskriget",
    description:
      "När iransk statspropaganda tar formen av en Legofilm och når miljontals tittare globalt, är det lätt att avfärda allt som lustig kuriosa. Det vore ett misstag. Explosive Medias virala klipp är ett skolboksexempel på hur samtida informationskrig fungerar, och varför journalister behöver ett nytt sätt att tänka om vad propaganda egentligen är.",
    href: "https://fojo.se/verify/myras-meme-skola-3-slopagandan-och-leksakskriget/",
    action: "Read article",
    color: "bg-emerald-400",
  },
  {
    outlet: "Some Thoughts from the Cappuccino Girl",
    date: "10 May 2026",
    title: "Political Resistance and Propaganda: From Dadaism to Slopaganda (Part 2)",
    description:
      "In the contemporary age of AI, satirical political propaganda has become both highly entertaining and strikingly effective.",
    href: "https://feministpassion.blogspot.com/2026/05/political-resistance-and-propaganda_10.html",
    action: "Read article",
    color: "bg-purple-400",
  },
  {
    outlet: "WOZ Die Wochenzeitung",
    date: "8 May 2026",
    title: "Was ist Slopaganda?",
    description:
      "Kolumne zur Frage, was Slopaganda ist und wie sie die Medienlandschaft verandert.",
    href: "https://www.woz.ch/kolumnen/2026/05/08/slopaganda-was-ist-slopaganda",
    action: "Read article",
    color: "bg-red-500",
  },
  {
    outlet: "ARD Mediathek",
    date: "3 May 2026",
    title: "Interview with Dr. Michal Klincewicz",
    description:
      "Bericht uber KI-generierte Satirevideos im Iran-Krieg: virale Clips, die politische Gegner karikieren und Stereotype verstarken.",
    href: "https://www.ardmediathek.de/video/ttt-titel-thesen-temperamente/ki-propaganda-mit-lego-mannchen/ard/Y2E2NTIwNGEtNWE3Yi00YmNmLTgyNmYtODk1ZTBiMDFhZTZj",
    action: "Watch now",
    color: "bg-yellow-400",
  },
  {
    outlet: "TVN24+",
    date: "29 April 2026",
    title: "Wojna na slopagande. To moze wywolac totalny chaos",
    description:
      "Interview with Dr. Michal Klincewicz on AI-powered propaganda, slopaganda, and the risks of informational chaos. In Polish.",
    href: "https://tvn24.pl/biznes/tech/propaganda-z-wykorzystaniem-ai-czyli-slopaganda-wojna-w-ktorej-nie-chodzi-o-prawde-st9019064",
    action: "Read article",
    color: "bg-blue-400",
  },
  {
    outlet: "ABC Radio National",
    date: "26 April 2026",
    title: "National Weekend Evenings",
    description:
      "Prof. Mark Alfano discusses slopaganda and meme warfare on ABC's Weekend Evenings.",
    href: "https://www.abc.net.au/listen/programs/weekendevenings/weekend-evenings/106593568",
    action: "Listen now",
    color: "bg-rose-400",
  },
  {
    outlet: "de Volkskrant",
    date: "22 April 2026",
    title:
      "Iran bevecht Donald Trump met lego: AI-president delft onderspit in propagandavideo's",
    description:
      "Dr. Michal Klincewicz explains how Iran uses AI and Lego-themed videos in the propaganda battle against Trump.",
    href: "https://www.volkskrant.nl/kijkverder/v/2026/ai-propaganda-iran-vs-slopaganda-lego~v2964364/",
    action: "Read article",
    color: "bg-lime-400",
  },
  {
    outlet: "RNZ",
    date: "22 April 2026",
    title: "Meme warfare and 'slopaganda' are defining the AI-era Iran war",
    description:
      "Prof. Mark Alfano discusses meme warfare and slopaganda in the context of the Iran war on RNZ.",
    href: "https://www.rnz.co.nz/news/world/593078/meme-warfare-and-slopaganda-are-defining-the-ai-era-iran-war",
    action: "Read article",
    color: "bg-green-400",
  },
  {
    outlet: "iMEdD",
    date: "21 April 2026",
    title: "Slopaganda, institutionalized",
    description:
      "Prof. Mark Alfano and Dr. Michal Klincewicz discuss the institutionalization of slopaganda in media and politics.",
    href: "https://lab.imedd.org/en/slopaganda-institutionalized/",
    action: "Read interview",
    color: "bg-pink-400",
  },
  {
    outlet: "NBC News",
    date: "15 April 2026",
    title:
      "How 'slopaganda' AI videos could influence the war between the U.S. and Iran",
    description:
      "Mark Alfano discusses the potential impact of AI-generated slopaganda videos on the U.S.-Iran conflict.",
    href: "https://www.nbcnews.com/video/how-slopaganda-ai-videos-could-influence-the-war-between-the-u-s-and-iran-261374533511",
    action: "Watch interview",
    color: "bg-yellow-400",
  },
  {
    outlet: "Big [If True]",
    date: "13 April 2026",
    title: "Interview on slopaganda research",
    description:
      "Discussion on the online propaganda battleground featuring AI-generated slopaganda in the Iran-Israel-US conflict.",
    embed: "https://www.youtube.com/embed/cvC02UKZvY8",
    action: "Watch interview",
    color: "bg-blue-400",
  },
  {
    outlet: "ABC News",
    date: "13 April 2026",
    title: "Iran is dominating the 'slopaganda' war on social media",
    description:
      "Discussion on how AI-generated slopaganda is being weaponized in the propaganda war between Iran and the US.",
    href: "https://www.abc.net.au/news/2026-04-13/naus_slopagandanr_1304/106559166",
    action: "Listen now",
    color: "bg-orange-400",
  },
  {
    outlet: "ABC Radio National",
    date: "13 April 2026",
    title: "Watch out for 'slopaganda' in your feeds",
    description:
      "Prof. Mark Alfano explains how slopaganda is shaping what we see on social media.",
    href: "https://www.abc.net.au/listen/programs/lifematters/watch-out-for-slopaganda-in-your-feeds/106551364",
    action: "Listen now",
    color: "bg-indigo-400",
  },
  {
    outlet: "The Guardian",
    date: "8 April 2026",
    title:
      "AI-generated Lego videos and Trump's poo-bombing: welcome to the Iran-US slopaganda wars",
    description:
      "Commentary on how uncertainty around trustworthy sources can push audiences toward whatever feels comforting, invigorating, or infuriating.",
    href: "https://www.theguardian.com/commentisfree/2026/apr/08/lego-videos-iran-trump-ai-video-meme-propaganda-movie-animation",
    action: "Read article",
    color: "bg-red-400",
  },
  {
    outlet: "The Breakfast Couch",
    date: "3 April 2026",
    title: "Interview with Prof. Mark Alfano",
    description:
      "A feature interview with Prof. Mark Alfano on slopaganda, AI, and information ecosystems.",
    href: "https://iview.abc.net.au/show/breakfast-couch/series/0/video/NC2613V009S00",
    action: "Watch now",
    color: "bg-pink-400",
  },
  {
    outlet: "The New Yorker",
    date: "April 2, 2026",
    title: "The team behind a pro-Iran LEGO-themed viral video campaign",
    description:
      "A look at the creators of a viral AI-powered propaganda campaign using LEGO themes in the Iran conflict.",
    href: "https://www.newyorker.com/culture/infinite-scroll/the-team-behind-a-pro-iran-lego-themed-viral-video-campaign",
    action: "Read article",
    color: "bg-blue-400",
  },
  {
    outlet: "Sydsvenskan",
    date: "15 March 2026",
    title:
      "Förintelsen som AI-slop: ”Jag kan inte nog understryka hur illa det kommer att bli”",
    description:
      "Nakenbilder, foton på utmärglade Förintelseöverlevare, ja till och med hela nyhetsstationer. Allt är fejk – men når miljoner människor i sociala medier. Är hela världen på väg att bli som Ryssland, där folk har slutat bry sig om sanningen?",
    href: "https://www.sydsvenskan.se/kultur/forintelsen-som-ai-slop-jag-kan-inte-nog-understryka-hur-illa-det-kommer-att-bli/",
    action: "Read article",
    color: "bg-sky-400",
  },
  {
    outlet: "Saufex Podcast",
    date: "19 February 2026",
    title: "Dr. Michal Klincewicz on slopaganda",
    description:
      "Audio interview with Dr. Michal Klincewicz on slopaganda and the new dynamics of AI-driven persuasion.",
    href: "https://soundcloud.com/saufex/dr-michal-klincewicz",
    action: "Listen now",
    color: "bg-cyan-400",
  },
  {
    outlet: "The Guardian",
    date: "29 Jan 2026",
    title:
      "The slopaganda era: AI images posted by the White House and what they teach us",
    description:
      "Feature on the rise of slopaganda and the use of AI-generated images in political communication.",
    href: "https://www.theguardian.com/us-news/2026/jan/29/the-slopaganda-era-10-ai-images-posted-by-the-white-house-and-what-they-teach-us",
    action: "Read article",
    color: "bg-red-400",
  },
  {
    outlet: "BTN (Behind the News)",
    date: "20 October 2025",
    title: "Slopaganda",
    description:
      "Interview with Prof. Mark Alfano on the concept of slopaganda and its impact.",
    href: "https://www.abc.net.au/btn/classroom/slopaganda/105914076",
    action: "Watch interview",
    color: "bg-orange-400",
  },
  {
    outlet: "ABC Philosopher's Zone",
    date: "14 Oct 2025",
    title: "Slopaganda: Propaganda and AI",
    description:
      "Discussion on AI-powered slopaganda with Mark Alfano, Professor of Philosophy at Macquarie University.",
    href: "https://www.abc.net.au/listen/programs/philosopherszone/slopaganda-propaganda-ai/105853258",
    action: "Listen now",
    color: "bg-purple-400",
  },
  {
    outlet: "Deutschlandfunk Kultur",
    date: "9 October 2025",
    title: "How AI content changes our perception",
    description:
      "Report on how AI-generated content reshapes attention and perception as volume outpaces our ability to process it.",
    href: "https://www.deutschlandfunkkultur.de/ai-slop-wie-ki-inhalte-unsere-wahrnehmung-veraendern-100.html",
    action: "Read article",
    color: "bg-sky-400",
  },
  {
    outlet: "Ashlyn Kate Bryson",
    date: "22 September 2025",
    title:
      "Slopaganda: Dr. Michal Klincewicz Explains the Dark Future of AI Persuasion",
    description:
      "A concise interview summary of Dr. Michal Klincewicz on the evolving threat of AI-enabled persuasion and slopaganda.",
    href: "https://substack.com/home/post/p-173952497",
    action: "Read article",
    color: "bg-fuchsia-400",
  },
  {
    outlet: "Boston Globe",
    date: "29 July 2025",
    title:
      "AI approved this message: How 2026 may be the first election where artificially generated content is inescapable",
    description:
      "Analysis of the impact of AI-generated content on elections and the information ecosystem.",
    href: "https://www.bostonglobe.com/2025/07/29/nation/ai-approved-this-message-how-2026-may-be-first-election-where-artificially-generated-content-is-inescapable/",
    action: "Read article",
    color: "bg-green-400",
  },
  {
    outlet: "In-Depth Conversations",
    date: "May 18, 2025",
    title: "Video discussion on slopaganda and AI-generated content",
    description:
      "Exploring the phenomena of slopaganda: the interaction between propaganda and generative AI.",
    embed: "https://www.youtube.com/embed/E-5oz0s4aaw",
    action: "Watch discussion",
    color: "bg-red-400",
  },
];

function PressCard({ item }: { item: PressItem }) {
  const card = (
    <>
      <div className="mb-3 flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className={`h-3 w-3 rounded-full ${item.color}`} />
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            {item.outlet}
          </p>
        </div>
        <span className="text-right text-xs text-slate-500">{item.date}</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold leading-tight text-white transition-colors group-hover:text-emerald-200">
        {item.title}
      </h3>
      <p className="mb-4 text-sm leading-7 text-slate-400">{item.description}</p>
      {item.embed && (
        <div className="relative mt-4 w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 h-full w-full rounded-2xl"
            src={item.embed}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-slate-400">{item.action}</span>
        <span className="text-emerald-400 transition-colors group-hover:text-emerald-300">
          -&gt;
        </span>
      </div>
    </>
  );

  const className =
    "group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-500/10";

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {card}
      </a>
    );
  }

  return <div className={className}>{card}</div>;
}

export default function PressCoveragePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100 sm:px-10">
      <section className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/90">
            Press coverage
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            Recognition from media
          </h1>
          <p className="max-w-3xl leading-8 text-slate-300">
            The concept of slopaganda is already resonating with journalists,
            researchers, and policy makers covering the intersection of AI and
            information ecosystems. This page collects articles, interviews, and
            features about slopaganda in the media, including appearances and
            commentary from the authors on TV, radio, and other platforms.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          {pressItems.map((item) => (
            <PressCard key={`${item.outlet}-${item.date}-${item.title}`} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
