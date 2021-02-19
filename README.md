## Node.js GraphQL API with File Upload Support  
This repository contains the files for a `Node.js` GraphQL API using `ApolloServer` which uploads files to a Google Cloud Storage bucket.
Files within this repository are properly explained in my Smashing Magazine article about file uploads, accessible [here](https://www.smashingmagazine.com/2020/10/file-uploads-react-apollo-google-storage-graphql/).

### Installation Steps
- Using `yarn`, run `yarn install` to install all project dependencies.
- Create a `.env` file to securely store sensitive application credentials with the following fields.  `BUCKET_NAME`, `PORT`. ( See [article](https://www.smashingmagazine.com/2020/10/file-uploads-react-apollo-google-storage-graphql) about their uses)
- Create a service account key in JSON format from the Google Cloud IAM. ( See [article](https://www.smashingmagazine.com/2020/10/file-uploads-react-apollo-google-storage-graphql) above on how to do this)

