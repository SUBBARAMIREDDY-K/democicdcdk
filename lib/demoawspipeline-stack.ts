import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class DemoawspipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    //AWS CI-CD Pipeline

    const democicdpipeline = new CodePipeline(this,'demopipeline',{


      synth: new cdk.pipelines.ShellStep('Synth', {




        input: CodePipelineSource.gitHub("SUBBARAMIREDDY-K/democicdcdk","main"),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
      }),
    });
    
  }
}
