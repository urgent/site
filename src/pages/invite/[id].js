import React from "react";
import { Pool } from 'pg';

function Page({ data }) {
  console.log(data)
  return (
    <div style={{ display: "block", }}>
      <form action="/api/">
        <div style={{ display: "flex", margin: "10px" }}>
          <label style={{ margin: "10px" }}>Email</label>
          <input type="email" name="email" style={{ margin: "10px", border: "1px solid #CCC", padding: "4px 12px" }} />
        </div>
      </form>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps({ req, res, params }) {
  // Lookup ID
  const pool = new Pool()
  const dbRes = await pool.query(`SELECT id FROM organization WHERE slug=$1`, [params.id])
  await pool.end()
  // Pass data to the page via props
  return { props: { data: JSON.stringify(dbRes.rows) } }
}

export default Page