// Enum is bad because it adds a lot more code and u can't use plain value to it
// See more detail https://www.youtube.com/watch?v=jjMbPt_H3RQ
// 🙋🏻 So what we need to use instead?

enum LOG_LEVEL {
  DEBUG = "DEBUG",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

function log(message: string, level: LOG_LEVEL) {}
log("msg", "ERROR");
