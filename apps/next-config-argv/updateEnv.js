const fs = require("fs");
const path = require("path");

// env.json 파일의 경로
const envFilePath = path.resolve(__dirname, "env.json");

// env.json 파일 읽기
fs.readFile(envFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading env.json file:", err);
    return;
  }

  // JSON 파싱
  const envConfig = JSON.parse(data);

  // status 값을 "build"로 변경
  envConfig.status = "build";

  // 변경된 내용을 다시 파일에 쓰기
  fs.writeFile(envFilePath, JSON.stringify(envConfig, null, 2), "utf8", (err) => {
    if (err) {
      console.error("Error writing to env.json file:", err);
      return;
    }

    console.log('Successfully updated env.json file with status "build".');
  });
});
