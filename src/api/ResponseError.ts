export class ResponseError extends Error {
	private _responseError = ResponseError.RESPONSE_ERROR_SYMBOL

	public constructor(public response: Response, message?: string) {
		super(message ?? response.statusText)
	}

	public static isResponseError(error: any): error is ResponseError {
		return error?._responseError === ResponseError.RESPONSE_ERROR_SYMBOL
	}

	private static readonly RESPONSE_ERROR_SYMBOL = Symbol("ResponseError")
}
