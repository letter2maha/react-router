import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Peoples(props) {
  const [noDataFound, setNoDataFound] = useState(false)
  const [peopleList, setPeopleList] = useState([])

  useEffect(() => {
    console.log(props.match)
    getContact()
  }, [])

  const getContact = () => {
    const url =
      'http://springbootawscontactbook-env.eba-iipbxdjb.us-east-2.elasticbeanstalk.com/getPeopleByOrgId/' +
      props.match.params.id
    axios.get(url).then((response) => {
      if (response.data.length === 0) {
        setNoDataFound(true)
      } else {
        console.log(response.data)
        setPeopleList(response.data)
        setNoDataFound(false)
      }
    })
  }
  return !noDataFound ? (
    peopleList.map((people) => {
      return (
        <div>
          <p>{people.peopleName}</p>
        </div>
      )
    })
  ) : (
    <h1>No data Found</h1>
  )
}

export default Peoples
