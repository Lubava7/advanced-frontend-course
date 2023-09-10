import webpack from "webpack";
import { BuildOptionsInterface } from "./types/config";

export function buildResolvers(
  options: BuildOptionsInterface
): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true, // для абсолютных путей
    modules: [options.paths.src, "node_modules"], // путь до src
    mainFiles: ["index"],
    alias: {}, // чтобы были абсолютные пути
  };
}
