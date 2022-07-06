#! /usr/bin/env/ node

const main = new require("commander");
const github_download = new require("download-git-repo");

main
  .version("0.1.0")
  .option("-h --help","")
  .command("<commandType> <first> <sencond>")
  