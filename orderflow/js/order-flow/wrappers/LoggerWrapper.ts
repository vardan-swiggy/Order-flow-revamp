export function logd(data: string) {
  __DEV__ && console.log(data);
}

// one possible implementation includes building

// logd() --> __DEV__ && console.log()
// logv() --> __DEV__ && console.log()
// loge() --> log in both production as well as debug as well as log into Sentry || NR || Firebase
// implementation

// simple one just one method log which would do __DEV__ && console.log
