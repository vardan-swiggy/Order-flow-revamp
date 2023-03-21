Broadly I can think of two ways:-
LoggerWrapper {
    logd() --> __DEV__ && console.log()
    logv() --> __DEV__ && console.log()
    loge() --> log in both production as well as debug as well as log into Sentry || NR || Firebase
// implementation
}
// simple one just one method log which would do 
LoggerWrapper {
    logEvent() --> __DEV__ && console.log
}