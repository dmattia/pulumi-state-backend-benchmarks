import * as aws from "@pulumi/aws";

const table = new aws.dynamodb.Table("example", {
  hashKey: "id",
  name: "example",
  attributes: [{ name: "id", type: "S" }],
  billingMode: "PAY_PER_REQUEST",
  pointInTimeRecovery: { enabled: false },
  serverSideEncryption: { enabled: true },
});

[...new Array(500)].forEach((_, i) => {
  new aws.dynamodb.TableItem(i.toString(), {
    tableName: table.name,
    hashKey: table.hashKey,
    item: JSON.stringify({
      [table.hashKey]: { S: i.toString() },
    }),
  })
})
