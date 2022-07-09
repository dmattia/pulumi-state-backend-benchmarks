import * as aws from "@pulumi/aws";

const table = new aws.dynamodb.Table("example", {
  hashKey: "id",
  name: "example-s3",
  attributes: [{ name: "id", type: "S" }],
  billingMode: "PAY_PER_REQUEST",
  pointInTimeRecovery: { enabled: false },
  serverSideEncryption: { enabled: true },
});

[...new Array(100)].forEach((_, i) => {
  new aws.dynamodb.TableItem(i.toString(), {
    tableName: table.name,
    hashKey: table.hashKey,
    item: JSON.stringify({
      id: { S: i.toString() },
    }),
  })
})
