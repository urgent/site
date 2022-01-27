<h1>Align | We build software that makes tech companies smarter.</h1>
<h2>Align helps sales teams collaborate to find and create relevant, strategic messaging.</h2>

We're here to accelerate market penetration, improve cross-team collaboration. We're here to help feed the hunger for real, true knowledge. We're committed to delivering great results at breakneck speeds for our customers.

Whether it's a college grad making cold calls for the first time or an enterprise account executive closing multimillion dollar deals, our customers need us to deliver: the knowledge required to implement modern technology into monolithic titans of industry does not come easy. The current stack slows adoption of technology that makes the world better. We are the ones to change this. 



<h2>Team Principles</h2>
<h3>BE BOLD</h3>
<i>Fortis fortuna adiuvat</i>
<h3>BE SCIENTIFIC</h3>
Reinforce decisions with rigorous logic

Conduct exhaustive research

Stay on top of trends
<h3>BE PROACTIVE</h4>
Strategize and relentlessly execute

Think in terms of results

Always ask: what are the 'first philosophies' driving this?
<h3>EVERYTHING IS A SANDBOX</h3>
The world is yours

Stay creative
<h3>THINK BEYOND DATA</h4>
Always ask: what are the 'first philosophies' driving this?

Think holistically
<h3>FIGURE IT OUT</h3>
People consistently do the impossible

Design the process
<h3>CUSTOMERS SHAPE US</h3>
Align was born to solve real problems, be obsessed with solving them

Make our customers' dreams come true
<h3>ALWAYS BE LEARNING</h3>
Align is a marketplace of ideas

Expand your perspective, don't dig your feet into it
<h3>TAKE RISKS TO INNOVATE</h3>
Evolve or dissolve

Be cautious


next chrome extension app - mvp

or search

```
import { useEffect } from 'react'

useEffect(() => {
  if (activeTags.length > 0) {
      let newMssgs = [];
      let mssgIDs = {};

      messages.forEach(mssg => {
          let tagsArr = mssg.tags.items
          tagsArr.forEach(obj => {
              if (activeTags.includes(obj.tagID) && !mssgIDs[mssg.id]) {
                  newMssgs.push(mssg);
                  mssgIDs[mssg.id] = true;
                  return
              }
          });
          return
      });
      dispatch({ type: "filterMssgs", payload: { messages: newMssgs } });
  }
}, [activeTags]);
```

TESTING BRANCHING
