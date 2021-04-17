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
