import React, { useState, useEffect } from 'react'

function Profile() {
  return <>
    <div style={{width:"50%", margin:"3rem auto"}}>
    <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
    <input type="hidden" name="oid" value="00D5f000005WwfN" />
    <input type="hidden" name="retURL" value="http://align.company" />
    <label for="first_name">First Name</label><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" /><br />
    <label for="last_name">Last Name</label><input  id="last_name" maxlength="80" name="last_name" size="20" type="text" /><br />
    <label for="email">Email</label><input  id="email" maxlength="80" name="email" size="20" type="text" /><br />
    <label for="url">Website</label><input  id="url" maxlength="80" name="url" size="20" type="text" /><br />
    <label for="company">Company</label><input  id="company" maxlength="40" name="company" size="20" type="text" /><br />
    <label for="city">City</label><input  id="city" maxlength="40" name="city" size="20" type="text" /><br />
    <label for="state">State Province</label><input  id="state" maxlength="20" name="state" size="20" type="text" /><br />
    <input type="submit" name="submit" />
    </form>
    </div>
  </>
}

export default Profile