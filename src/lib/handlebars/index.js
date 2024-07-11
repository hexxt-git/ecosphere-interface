import Handlebars from "handlebars";
import fs from "fs";

export function HbsCompiler(filePath, context) {
  const file = fs.readFileSync(filePath, "utf-8")
  const template = Handlebars.compile(file)
  return template(context)
}

