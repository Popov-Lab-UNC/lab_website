import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
  persistent?: boolean
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  MANUAL_DISMISS_TOAST: "MANUAL_DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["MANUAL_DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string, persistent: boolean = false) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  // Don't auto-remove persistent toasts
  if (persistent) {
    console.log(`Toast ${toastId} is persistent, not adding to remove queue`)
    return
  }

  console.log(`Adding toast ${toastId} to remove queue (not persistent)`)
  const timeout = setTimeout(() => {
    console.log(`Auto-removing toast ${toastId}`)
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action
      console.log(`DISMISS_TOAST called for toast ${toastId}`)

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        const toast = state.toasts.find(t => t.id === toastId)
        console.log(`Toast ${toastId} persistent: ${toast?.persistent}`)
        // Only add to remove queue if not persistent
        if (!toast?.persistent) {
          addToRemoveQueue(toastId, false)
        }
      } else {
        state.toasts.forEach((toast) => {
          // Only add to remove queue if not persistent
          if (!toast.persistent) {
            addToRemoveQueue(toast.id, false)
          }
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) => {
          // For persistent toasts, don't set open: false
          if (t.persistent && (t.id === toastId || toastId === undefined)) {
            return t // Keep the toast open
          }
          // For non-persistent toasts, set open: false as before
          if (t.id === toastId || toastId === undefined) {
            return {
              ...t,
              open: false,
            }
          }
          return t
        }),
      }
    }
    case "MANUAL_DISMISS_TOAST": {
      const { toastId } = action
      console.log(`MANUAL_DISMISS_TOAST called for toast ${toastId}`)

      // For manual dismiss, always add to remove queue and set open: false
      if (toastId) {
        addToRemoveQueue(toastId, false)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id, false)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })
  const manualDismiss = () => dispatch({ type: "MANUAL_DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      duration: props.persistent ? Infinity : undefined, // Prevent auto-dismiss for persistent toasts
      onOpenChange: (open) => {
        // Only auto-dismiss if not persistent
        if (!open && !props.persistent) {
          dismiss()
        } else if (!open && props.persistent) {
          // For persistent toasts, use manual dismiss when user clicks close
          manualDismiss()
        }
      },
    },
  })

  return {
    id: id,
    dismiss,
    manualDismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
    manualDismiss: (toastId?: string) => dispatch({ type: "MANUAL_DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
