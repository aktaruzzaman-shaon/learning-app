import request, { gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clxxr7t7207aw08w4ui6mx0ti/master"

export const getCoureList = async () => {
    const query = gql`
       query courseList {
        courseLists {
        name
        id
        banner {
            url
        }
    description
  }
}
    `

    const result = await request(MASTER_URL, query)
    console.log(result, "result")
    return result
}