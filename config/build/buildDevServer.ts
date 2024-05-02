import type {Configuration as DevServerConfiguration} from "webpack-dev-server"
import {BuildOptions} from "./types/types";

export const buildDevServer = ({port}: BuildOptions): DevServerConfiguration => {

    return {
        port: port ?? 5000,
        open: true,
    }
}