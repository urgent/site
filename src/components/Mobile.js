import React, { useState } from 'react'
import { Collapsable } from '../components/Sidebar';

export default function Mobile({ query }) {
    const [nav, setNav] = useState(true);
    return <>
        {nav && <Collapsable query={query} onClick={() => setNav(!nav)} />}
    </>
}