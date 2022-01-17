const core = require('@actions/core');

mybool = core.getInput("mybool");

console.log("My bool ${mybool}");

if ($mybool === true) {
  console.log("yes");
} else {
  console.log("no");
}

subject = core.getInput("subject");
console.log("Hello ${subject}");

core.setOutput("foo", "bar");
