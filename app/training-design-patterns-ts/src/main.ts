import { Logger } from './modules/Logger'
import './style.css'

// Singleton
const useLogger = Logger.getInstance()
useLogger.log('Log 1')

const anotherLogger = Logger.getInstance()
anotherLogger.log('Log 2')

useLogger.getLog()
