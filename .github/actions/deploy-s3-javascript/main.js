const core = require('@actions/core');
// const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
// 1 - Get some input values
 const bucket = core.getINput('bucket', {required: true});
 const bucketReg = core.getINput('bucket-region', {required: true});
 const distFolder = core.getINput('dist-folder', {required: true});

 // 2 - Upload files
 const s3Uri = 's3://${bucket}';
 exec.exec('asw s3 sync ${disFolder} ${s3Uri} --region ${bucketReg}');

 // 3 - 

 core.notice('Hello from my custom JavaScript action');
}

run();