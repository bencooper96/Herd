import {HIWTemplateL,HIWTemplateR} from "./hiwTemplate";



const HIWDesktop = () => {
    return (       <div className="overflow-hidden w-full mx-auto hidden sm:block">
    {/* VOICE */}
    <HIWTemplateL
      mockupPath="./how-it-works/mockups/newPost.png"
      mainText="Make your voice heard."
      actionText="Write in your ideas, concerns, and questions for local politicians, using this form."
      resultText="You’re providing fresh, community-inspired ideas for reps and your peers."
      position="left"
    />
    {/* AMPLIFY */}
    <HIWTemplateR
      mockupPath="./how-it-works/mockups/feed.png"
      mainText="Amplify other voices."
      actionText="Read, vote, and comment on your peers feedback."
      resultText="You’re more informed on local conversations, contextualizing feedback for reps, and generating new data to evaluate reps’ decision making."
      position="right"
    />
    {/* CONNECT */}
    <HIWTemplateL
      mockupPath="./how-it-works/mockups/data.png"
      mainText="We connect the dots."
      actionText="We harness comunity sentiment to generate open source, crystal clear,and ultra actionable reports."
      resultText="A community generated, shared pool of knowledge to measure politicians against and highlight a path forward."
      position="left"
    />
    {/* SEND */}
    <HIWTemplateR
      mockupPath="./how-it-works/mockups/mail.png"
      mainText="Then send your collective voice to the right place."
      actionText="We send reports to your specific representatives, relevant house committees and state departments, and to our users."
      resultText="Ensuring transparent, targeted information flow for mutual understanding and maximum impact."
      position="right block "
    />
  </div> );
}
 
export default HIWDesktop;