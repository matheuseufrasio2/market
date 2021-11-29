module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  moduleDirectories: ["node_modules", "src"],
};
