import {
  ENTER_STARTED,
  ENTER_ENDED,
  EXIT_STARTED,
  EXIT_ENDED,
} from './contants'

const statuses = {
  onEnterStart: ENTER_STARTED,
  onEnterEnd: ENTER_ENDED,
  onExitStart: EXIT_STARTED,
  onExitEnd: EXIT_ENDED,
  onEachStart: [ENTER_STARTED, EXIT_STARTED],
  onEachEnd: [ENTER_ENDED, EXIT_ENDED],
  onEachAction: [ENTER_STARTED, ENTER_ENDED, EXIT_STARTED, EXIT_ENDED],
}

export default statuses
