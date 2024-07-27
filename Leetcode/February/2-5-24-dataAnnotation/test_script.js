const { spawnSync } = require("child_process");

// Replace 'path/to/decode.py' with the actual path to your Python script
const pythonProcess = spawnSync("python", ["./decoder.py", "path/to/input-list.txt"]);

// Check for errors
if (pythonProcess.error) {
	console.error("Error:", pythonProcess.error.message);
	process.exit(1);
}

// Print the decoded message
console.log("Decoded Message:", pythonProcess.stdout.toString().trim());
