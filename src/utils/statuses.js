import {
  ENTER_STARTED,
  ENTER_ENDED,
  LEAVE_STARTED,
  LEAVE_ENDED,
} from './contants'

const statuses = {
  onEnterStart: ENTER_STARTED,
  onEnterEnd: ENTER_ENDED,
  onLeaveStart: LEAVE_STARTED,
  onLeaveEnd: LEAVE_ENDED,
  onEachStart: [ENTER_STARTED, LEAVE_STARTED],
  onEachEnd: [ENTER_ENDED, LEAVE_ENDED],
  onEachAction: [ENTER_STARTED, ENTER_ENDED, LEAVE_STARTED, LEAVE_ENDED],
}

export default statuses
