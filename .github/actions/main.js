const core = require('@actions/core');

console.log("My bool ${{ inputs.mybool }}");

if (${{ inputs.mybool }} == "true") {
  console.log("yes");
} else {
  console.log("no");
}

console.log("Hello ${{ inputs.subject }}");

core.setOutput("foo", "bar");
