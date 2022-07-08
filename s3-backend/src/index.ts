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


// const table = new aws.dynamodb.Table("example", {
//   hashKey: "id",
//   name: "example",
//   attributes: [{ name: "id", type: "S" }],
//   billingMode: "PAY_PER_REQUEST",
//   pointInTimeRecovery: { enabled: false },
//   serverSideEncryption: { enabled: true },
// });

// new Array(50).forEach((_, i) => {
//   new aws.dynamodb.TableItem(i.toString(), {
//     tableName: table.name,
//     hashKey: table.hashKey,
//     item: JSON.stringify({
//       id: { S: i.toString() },
//     }),
//   })
// })
