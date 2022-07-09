import * as aws from "@pulumi/aws";

new aws.s3.Bucket('state', {
    bucket: 'pulumi-state-backend-benchmarks-state',
    acl: aws.s3.CannedAcl.Private,
    serverSideEncryptionConfiguration: {
        rule: {
          applyServerSideEncryptionByDefault: {
            sseAlgorithm: 'AES256',
          },
        },
      },
      versioning: { enabled: true }
})