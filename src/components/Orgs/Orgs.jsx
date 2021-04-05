import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Orgs(props) {
  const [orgs, setOrgs] = useState([])

  useEffect(() => {
    getOrgDetails()
  }, [])

  const getOrgDetails = () => {
    axios
      .get(
        'http://springbootawscontactbook-env.eba-iipbxdjb.us-east-2.elasticbeanstalk.com/getAllOrganization'
      )
      .then((response) => {
        setOrgs(response.data)
        console.log(response.data)
      })
  }

  return orgs.map((org, i) => {
    return (
      <div className='orgList' key={i}>
        <p>{org.orgName}</p>
        <p>{org.orgId}</p>
        <Link to={'/getPeopleByOrgId/' + org.orgId}>
          <button>view Details</button>
        </Link>
      </div>
    )
  })
}

export default Orgs
