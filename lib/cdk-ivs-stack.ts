import { Stack, StackProps, aws_ivs as ivs } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkIvsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ivs.CfnChannel.html
    const myChannel = new ivs.CfnChannel(this, 'MyIvsChannel', {
      name: 'MyIvsChannel',
      tags: [{
        key: 'CREATED_AT',
        value: '2022-06-11',
      }],
    });

    const myChannelStreamKey = new ivs.CfnStreamKey(this, 'MyCfnStreamKey', {
      channelArn: myChannel.attrArn
    });
  }
}
