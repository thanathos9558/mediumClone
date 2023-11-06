import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { CurrentuserInterface } from "src/app/shared/types/currentUser.interface";

export interface AuthStateInterface {
  isSubmitting: boolean,
  currentUser: CurrentuserInterface | null | undefined,
  isLoading: boolean,
  validationErrors: BackendErrorsInterface | null
}
