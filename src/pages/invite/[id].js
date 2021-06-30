import React from "react";

function Page({ data }) {
  return (
    <div style={{ display: "block", }}>
      <p>

        <form action="/api/">
          <div style={{ display: "flex", margin: "10px" }}>
            <label style={{ margin: "10px" }}>Email</label>
            <input type="email" name="email" style={{ margin: "10px", border: "1px solid #CCC", padding: "4px 12px" }} />
          </div>
        </form>
      </p>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Lookup ID

  // if no ID, return error

  // if ID, return form

  // Pass data to the page via props
  return { props: { data: 1 } }
}

export default Page