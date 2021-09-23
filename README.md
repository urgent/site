<h1>Smooms.io: The Sales Enablement Platform For Innovators</h1>
<h2>Smooms helps sales teams collaborate to find and create relevant, strategic messaging.</h2>

We're here to make work fun, and prevent people from wasting time working while uninformed. We're here to help feed the hunger for real, true knowledge. We're committed to delivering great results at breakneck speeds for our customers.

Whether it's a college grad making cold calls for the first time or an enterprise account executive closing multimillion dollar deals, our customers need us to deliver: the knowledge required to implement modern technology into monolithic titans of industry does not come easy: it slows adoption of technology that can change the world. We need to change this. 



<h2>Team Principles</h2>
<h3>BE BOLD</h3>
<i>Fortis fortuna adiuvat</i>
<h3>BE SCIENTIFIC</h3>
Reinforce decisions with rigorous logic
Stay on top of trends

<h3>EVERYTHING IS A SANDBOX</h3>
The world is yours

Be creative
<h3>THINK BEYOND DATA</h4>
Always ask: what are the 'first philosophies' driving this?
<h3>FIGURE IT OUT</h3>
People consistently do the impossible


Design the process
<h3>CUSTOMERS SHAPE US</h3>
Smooms was born to solve real problems. Be obsessed with understanding and eliminating them.
<h3>DISCOMFORT IS GROWTH</h3>
Strong materials need a hotter forge.
<h3>TAKE RISKS TO INNOVATE</h3>
Evolve or dissolve




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
