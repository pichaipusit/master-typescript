// Enum is bad because it adds a lot more code and u can't use plain value to it
// See more detail https://www.youtube.com/watch?v=jjMbPt_H3RQ
// 🙋🏻 So what we need to use instead?

const LOG_LEVEL = {
  DEBUG: "DEBUG",
  WARNING: "WARNING",
  ERROR: "ERROR",
} as const;

type LogLevel = keyof typeof LOG_LEVEL;

function log(message: string, level: LogLevel) {}
log("msg", "ERROR");
