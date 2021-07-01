import React from "react";
import { Pool } from 'pg';

function Page({ slug }) {
  return (
    <div style={{ display: "block", }}>
      <form action="/api/invite">
        <div style={{ display: "flex", margin: "10px" }}>
          <label style={{ margin: "10px" }}>Email</label>
          <input type="email" name="email" style={{ margin: "10px", border: "1px solid #CCC", padding: "4px 12px" }} />
          <input type="hidden" name="slug" value={slug} />
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps({ req, res, params }) {
  // Lookup ID
  const pool = new Pool()
  const dbRes = await pool.query(`SELECT slug FROM organization WHERE slug=$1`, [params.id])
  await pool.end()
  //dbRes.rows[0]?.slug
  // Pass data to the page via props
  return { props: { slug: 1 } }
}

export default Page