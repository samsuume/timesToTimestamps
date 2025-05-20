import { greeting } from "@moonlight-mod/wp/timesToTimestamps_someLibrary";

const logger = moonlight.getLogger("timesToTimestamps/entrypoint");
logger.info("Hello from entrypoint!");
logger.info("someLibrary exports:", greeting);

const natives = moonlight.getNatives("timesToTimestamps");
logger.info("node exports:", natives);
