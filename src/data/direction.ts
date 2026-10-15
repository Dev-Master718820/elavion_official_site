import type {Industry,EntertainmentCategory} from './industries';

export interface ProductDirection {
  title:string;
  audience:string;
  summary:string;
  concepts:{name:string;description:string;example:string}[];
}

/** Proposed positioning only. Replace with owner-confirmed projects before claiming development. */
export const direction:Record<Industry,ProductDirection> = {
  ai:{title:'AI tools for everyday knowledge work.',audience:'Teams working with documents, information, and repeatable processes.',summary:'The proposed AI direction is a workspace that helps teams find answers in their own information and prepare work for human review.',concepts:[
    {name:'A team knowledge workspace',description:'Bring reference documents into one searchable workspace, with answers that point back to their sources.',example:'A project team finds the relevant requirements across its documents without searching each file separately.'},
    {name:'An assistant for repeatable work',description:'Explore guided workflows for drafting summaries, organizing requests, and preparing routine documents.',example:'An operations team turns incoming requests into structured drafts that a person checks before use.'},
    {name:'Controls for responsible adoption',description:'Make access, source visibility, and human approval part of the proposed product experience.',example:'An administrator defines who can access a collection and which steps require review.'},
  ]},
  healthcare:{title:'Clearer information around the care journey.',audience:'Care teams and people coordinating appointments, information, and follow-up.',summary:'The proposed Health direction focuses on care coordination software: helping people organize information and understand the next step in a care journey.',concepts:[
    {name:'A care coordination workspace',description:'Explore a shared view of appointments, tasks, and administrative handoffs for authorized care teams.',example:'A coordinator sees which follow-up tasks still need an owner.'},
    {name:'A patient information companion',description:'A concept for organizing questions, appointment preparation, and clinician-provided instructions in one place.',example:'A person prepares questions for a scheduled visit and keeps the resulting instructions together.'},
    {name:'A clinical information interface',description:'Explore how records and imaging references might be presented with clear provenance and access controls.',example:'A clinician reviews where a document came from before using it in an existing workflow.'},
  ]},
  defense:{title:'Simulation and readiness tools for complex systems.',audience:'Engineering, training, and maintenance teams working with demanding environments.',summary:'The proposed Defense direction is software for engineering simulation, equipment readiness, and secure information workflows. No weapons manufacturing or operational capability is claimed.',concepts:[
    {name:'An engineering simulation workspace',description:'A concept for comparing design assumptions and recording test scenarios in a shared environment.',example:'Engineers review the assumptions behind a virtual system test before planning physical validation.'},
    {name:'An equipment readiness workspace',description:'Explore maintenance records, inspection checklists, and transparent task ownership.',example:'A maintenance team sees the history and next inspection step for an item of equipment.'},
    {name:'Secure team collaboration',description:'Consider permission-based document access and traceable review workflows for engineering information.',example:'A reviewer can see which version of a document was approved and by whom.'},
  ]},
  entertainment:{title:'Connected experiences for players, fans, and creators.',audience:'Gaming communities, sports clubs, and digital creators.',summary:'The proposed Entertainment direction combines three connected product ideas: a player community space, a club and fan hub, and tools for organizing creative work.',concepts:[
    {name:'ELAVION PLAY · player communities',description:'A concept for finding shared interests, organizing game sessions, and keeping a community together.',example:'Players arrange a session and find people who enjoy the same kinds of games.'},
    {name:'ELAVION SPORTS · club and fan spaces',description:'Explore a place for club activities, participation, and community-created sports stories.',example:'A club organizes its next activity and shares the details with members.'},
    {name:'Media · creator workspaces',description:'Explore organizing creative projects, review feedback, and publishing plans.',example:'A small creator team keeps a production brief and review notes together.'},
  ]},
  connect:{title:'Community spaces with a clear sense of purpose.',audience:'Interest groups, professional communities, and people bringing others together.',summary:'The proposed Connect direction is a community platform for groups, conversations, shared resources, and events, with moderation and privacy considered from the start.',concepts:[
    {name:'Interest-based community spaces',description:'Explore group profiles, topic-based conversations, and resource collections.',example:'A design community organizes discussion and useful references around a shared interest.'},
    {name:'Events and collaboration',description:'A concept for bringing event details, participation, and project discussion into the same space.',example:'Members coordinate a workshop without losing the conversation across separate channels.'},
    {name:'Member and moderation tools',description:'Explore understandable privacy controls, reporting, and community guidelines.',example:'A moderator reviews a report using clear rules and a visible process.'},
  ]},
};

export const categoryDirection:Record<EntertainmentCategory,ProductDirection>={
  gaming:{title:'A home for the people you play with.',audience:'Players and community organizers.',summary:'ELAVION PLAY is a proposed community experience for discovering shared gaming interests and organizing play. It is not a game studio announcement or a launched gaming platform.',concepts:[direction.entertainment.concepts[0],{name:'Session planning',description:'Explore time, group size, and participation preferences in a simple planning flow.',example:'A group chooses a time for its next cooperative session.'},{name:'Community discovery',description:'A concept for finding groups by shared interests and clear community expectations.',example:'A new member learns what a group enjoys and how to participate.'}]},
  sports:{title:'Bring the club, the activity, and the fans together.',audience:'Community sports clubs, participants, and supporters.',summary:'ELAVION SPORTS is a proposed club and fan experience within Entertainment. The focus is participation and community—not a claim of current wearable products or live sports services.',concepts:[direction.entertainment.concepts[1],{name:'Activity planning',description:'Explore simple schedules and participation updates for community activities.',example:'A club shares the location and preparation details for its next session.'},{name:'Stories from the community',description:'A concept for sharing team moments and member-created stories in context.',example:'Members collect photos and reflections from a local event.'}]},
  media:{title:'Help creative work move from idea to release.',audience:'Independent creators and small production teams.',summary:'The proposed media direction is a workspace for briefs, assets, review notes, and release planning. Third-party streaming and editing products below are industry references.',concepts:[direction.entertainment.concepts[2],{name:'Briefs and asset organization',description:'Explore a clear structure for the purpose, references, and files behind a creative project.',example:'A team connects a draft video to its brief and reference materials.'},{name:'Review and release planning',description:'A concept for collecting feedback and understanding what remains before publishing.',example:'A producer reviews outstanding feedback before scheduling a release.'}]},
};
