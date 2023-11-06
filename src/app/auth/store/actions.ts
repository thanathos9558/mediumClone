import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { CurrentuserInterface } from "src/app/shared/types/currentUser.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register Success': props<{ currentUser: CurrentuserInterface }>(),
    'Register Failure': props<{ errors: BackendErrorsInterface }>(),
  }
})
