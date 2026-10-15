import type {BrandKey} from '@/components/DivisionBrand';
export interface GalleryImage {image:string;alt:string;label:string;title:string;description:string;source:string;author:string;license:string;licenseUrl:string;href?:string;kind?:'game'}
export const galleryImages:Record<BrandKey,GalleryImage[]> = {
  "ai": [
    {
      "image": "/images/editorial/ai-robot.jpg",
      "alt": "White humanoid robot with a tablet interface",
      "label": "HUMAN–MACHINE INTERACTION",
      "title": "Make complex tools approachable.",
      "description": "An interface is where a technical capability becomes a human experience. Clarity, feedback, and control matter.",
      "source": "https://unsplash.com/photos/2EJCSULRwC8",
      "author": "Alex Knight",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    },
    {
      "image": "/images/editorial/ai-microchip.jpg",
      "alt": "Close-up of an integrated circuit on a green printed circuit board",
      "label": "COMPUTING FOUNDATIONS",
      "title": "Intelligence needs infrastructure.",
      "description": "Processors, memory, and software work together behind the tools that people use.",
      "source": "https://unsplash.com/photos/tTurhPw9bwQ",
      "author": "Bermix Studio",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    },
    {
      "image": "/images/ai.jpg",
      "alt": "Data center server infrastructure",
      "label": "CONNECTED INFRASTRUCTURE",
      "title": "From information to a useful answer.",
      "description": "The proposed AI workspace connects source information to reviewable outputs. This photograph illustrates the computing landscape.",
      "source": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85&fm=jpg",
      "author": "Unsplash contributor",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    }
  ],
  "healthcare": [
    {
      "image": "/images/healthcare-clinical.jpg",
      "alt": "Clinical team working in an operating room",
      "label": "CARE TEAMS",
      "title": "Keep the people in view.",
      "description": "A proposed coordination tool starts with the roles, handoffs, and information needs of the people providing care.",
      "source": "https://unsplash.com/photos/KrsoedfRAf4",
      "author": "National Cancer Institute",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    },
    {
      "image": "/images/editorial/health-research.jpg",
      "alt": "Laboratory technicians working with a fluorescence microscope and pipette",
      "label": "RESEARCH ENVIRONMENTS",
      "title": "Careful work depends on context.",
      "description": "Research environments illustrate why provenance and clear records matter.",
      "source": "https://unsplash.com/photos/s6w5NOxtm7U",
      "author": "National Cancer Institute",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    },
    {
      "image": "/images/editorial/health-laboratory.jpg",
      "alt": "Reagent bottles and research materials on a laboratory shelf",
      "label": "INFORMATION ORGANIZATION",
      "title": "Structure supports understanding.",
      "description": "Labels, organization, and reliable references help people navigate complex information.",
      "source": "https://unsplash.com/photos/MOj06jBit0s",
      "author": "National Cancer Institute",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    }
  ],
  "defense": [
    {
      "image": "/images/editorial/aerospace-engine.jpg",
      "alt": "Open aircraft nose compartment revealing internal avionics and systems at the USS Midway Museum",
      "label": "SYSTEMS ENGINEERING",
      "title": "Understand the system behind the surface.",
      "description": "Complex equipment brings together many subsystems. Our proposed software direction concerns records, review, and simulation.",
      "source": "https://unsplash.com/photos/QDr3e7I6elw",
      "author": "Tommy Shen",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    },
    {
      "image": "/images/editorial/aerospace-turbine.jpg",
      "alt": "Close-up of a jet engine and aircraft on an airport apron",
      "label": "ENGINEERING DETAIL",
      "title": "Readiness is built through careful work.",
      "description": "Inspection history and clear ownership are useful starting points for a maintenance workspace.",
      "source": "https://unsplash.com/photos/JfFjHvuYmeA",
      "author": "Henry Möllers",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    },
    {
      "image": "/images/defense-flight.jpg",
      "alt": "F/A-18F Super Hornet in flight",
      "label": "AEROSPACE CONTEXT",
      "title": "From engineering to the operating environment.",
      "description": "Public aerospace photography provides context for the field; ELAVION does not claim to manufacture or operate this aircraft.",
      "source": "https://unsplash.com/photos/LJOxm6ILgwg",
      "author": "Cibi Chakravarthi",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    }
  ],
  "entertainment": [
    {
      "image": "/images/games/slides/no-mans-sky-2.webp",
      "alt": "Spacecraft flying above a turquoise lake between mountains in No Man’s Sky",
      "label": "FLIGHT & DISCOVERY",
      "title": "No Man’s Sky",
      "description": "Skim across turquoise water and mountain valleys. This official screenshot captures the scale and color of No Man’s Sky.",
      "source": "https://www.nomanssky.com/press/",
      "author": "Hello Games",
      "license": "Official press kit",
      "licenseUrl": "https://www.nomanssky.com/press/",
      "href": "https://www.nomanssky.com/",
      "kind": "game"
    },
    {
      "image": "/images/editorial/sports-basketball.jpg",
      "alt": "Basketball players practicing together on an indoor court",
      "label": "COMMUNITY SPORT",
      "title": "The experience goes beyond the score.",
      "description": "Participation, team routines, and the people around an activity give sport its meaning.",
      "source": "https://unsplash.com/photos/qFIiJNjqB10",
      "author": "TJ Dragotta",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    },
    {
      "image": "/images/editorial/media-microphone.jpg",
      "alt": "Studio condenser microphone in soft light",
      "label": "CREATOR TOOLS",
      "title": "Every story begins with an idea.",
      "description": "Recording and production tools are only part of the process. Planning and feedback connect the work.",
      "source": "https://unsplash.com/photos/c1ZN57GfDB0",
      "author": "Jonathan Velasquez",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    }
  ],
  "gaming": [
    {
      "image": "/images/games/slides/no-mans-sky-2.webp",
      "alt": "Spacecraft flying above a turquoise lake between mountains in No Man’s Sky",
      "label": "FLIGHT & DISCOVERY",
      "title": "No Man’s Sky",
      "description": "Skim across turquoise water and mountain valleys. This official screenshot captures the scale and color of No Man’s Sky.",
      "source": "https://www.nomanssky.com/press/",
      "author": "Hello Games",
      "license": "Official press kit",
      "licenseUrl": "https://www.nomanssky.com/press/",
      "href": "https://www.nomanssky.com/",
      "kind": "game"
    },
    {
      "image": "/images/games/slides/satisfactory.webp",
      "alt": "First-person view over a large industrial factory surrounded by forest and cliffs in Satisfactory",
      "label": "BUILDING & AUTOMATION",
      "title": "Satisfactory",
      "description": "An industrial playground set against an alien wilderness. Satisfactory turns factory design into a world to explore, build, and expand.",
      "source": "https://www.satisfactorygame.com/press",
      "author": "Coffee Stain Studios",
      "license": "Official press kit",
      "licenseUrl": "https://www.satisfactorygame.com/press",
      "href": "https://www.satisfactorygame.com/",
      "kind": "game"
    },
    {
      "image": "/images/games/slides/factorio-space-age.webp",
      "alt": "Factory infrastructure spread across a volcanic landscape in Factorio: Space Age",
      "label": "STRATEGY & WORLD BUILDING",
      "title": "Factorio: Space Age",
      "description": "A volcanic landscape becomes a network of machines and production lines. Space Age takes Factorio’s factory-building systems to new planetary environments.",
      "source": "https://factorio.com/space-age/content",
      "author": "Wube Software",
      "license": "Publisher asset permission",
      "licenseUrl": "https://factorio.com/space-age/content",
      "href": "https://www.factorio.com/space-age/overview",
      "kind": "game"
    },
    {
      "image": "/images/games/slides/no-mans-sky-1.webp",
      "alt": "An explorer overlooking an alien landscape in No Man’s Sky",
      "label": "PLANETARY EXPLORATION",
      "title": "No Man’s Sky",
      "description": "Strange terrain, distant horizons, and a universe built around discovery. A view into Hello Games’ science-fiction exploration game.",
      "source": "https://www.nomanssky.com/press/",
      "author": "Hello Games",
      "license": "Official press kit",
      "licenseUrl": "https://www.nomanssky.com/press/",
      "href": "https://www.nomanssky.com/",
      "kind": "game"
    },
    {
      "image": "/images/games/slides/no-mans-sky-3.webp",
      "alt": "Large spacecraft above a planet in a colorful star field in No Man’s Sky",
      "label": "BEYOND THE ATMOSPHERE",
      "title": "No Man’s Sky",
      "description": "Leave the surface behind. Spacecraft, planetary vistas, and deep-space journeys extend the game’s sense of exploration.",
      "source": "https://www.nomanssky.com/press/",
      "author": "Hello Games",
      "license": "Official press kit",
      "licenseUrl": "https://www.nomanssky.com/press/",
      "href": "https://www.nomanssky.com/",
      "kind": "game"
    }
  ],
  "sports": [
    {
      "image": "/images/editorial/sports-basketball.jpg",
      "alt": "Basketball players practicing together on an indoor court",
      "label": "COMMUNITY SPORT",
      "title": "The experience goes beyond the score.",
      "description": "Participation, team routines, and the people around an activity give sport its meaning.",
      "source": "https://unsplash.com/photos/qFIiJNjqB10",
      "author": "TJ Dragotta",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    },
    {
      "image": "/images/sports.jpg",
      "alt": "Runners taking part in an athletic event",
      "label": "ATHLETIC PARTICIPATION",
      "title": "Make room for different ambitions.",
      "description": "A local club experience should serve the recreational participant as thoughtfully as the committed competitor.",
      "source": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=85&fm=jpg",
      "author": "Unsplash contributor",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    },
    {
      "image": "/images/entertainment.jpg",
      "alt": "Spectators at a sports stadium",
      "label": "FAN EXPERIENCES",
      "title": "A shared moment becomes a community.",
      "description": "Fans connect through the stories, rituals, and people around a sport.",
      "source": "https://unsplash.com/photos/p1aMnWDolBo",
      "author": "Derek Story",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    }
  ],
  "media": [
    {
      "image": "/images/editorial/media-microphone.jpg",
      "alt": "Studio condenser microphone in soft light",
      "label": "CREATOR TOOLS",
      "title": "Every story begins with an idea.",
      "description": "Recording and production tools are only part of the process. Planning and feedback connect the work.",
      "source": "https://unsplash.com/photos/c1ZN57GfDB0",
      "author": "Jonathan Velasquez",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    },
    {
      "image": "/images/editorial/connect-collaboration.jpg",
      "alt": "Design team discussing ideas around a shared table",
      "label": "COLLABORATION",
      "title": "Start with how people work together.",
      "description": "Shared context and a clear conversation are the foundations of a useful team workspace.",
      "source": "https://unsplash.com/photos/jfR5wu2hMI0",
      "author": "Headway",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    },
    {
      "image": "/images/media.jpg",
      "alt": "Audience at a live event",
      "label": "LIVE EXPERIENCES",
      "title": "Stories can bring an audience together.",
      "description": "A production workspace could connect the preparation, assets, and feedback behind a shared experience.",
      "source": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85&fm=jpg",
      "author": "Unsplash contributor",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    }
  ],
  "connect": [
    {
      "image": "/images/editorial/connect-collaboration.jpg",
      "alt": "Design team discussing ideas around a shared table",
      "label": "COLLABORATION",
      "title": "Start with how people work together.",
      "description": "Shared context and a clear conversation are the foundations of a useful team workspace.",
      "source": "https://unsplash.com/photos/jfR5wu2hMI0",
      "author": "Headway",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    },
    {
      "image": "/images/connect.jpg",
      "alt": "People collaborating around a table",
      "label": "SHARED INTERESTS",
      "title": "Give a conversation somewhere to grow.",
      "description": "Community spaces can organize discussion, references, and participation around a common purpose.",
      "source": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85&fm=jpg",
      "author": "Unsplash contributor",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    },
    {
      "image": "/images/architecture.jpg",
      "alt": "Modern building architecture",
      "label": "PLACES TO CONNECT",
      "title": "Think about the environment around a group.",
      "description": "The design of a shared space—physical or digital—shapes how people find one another.",
      "source": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85&fm=jpg",
      "author": "Unsplash contributor",
      "license": "Unsplash License",
      "licenseUrl": "https://unsplash.com/license"
    }
  ]
};
