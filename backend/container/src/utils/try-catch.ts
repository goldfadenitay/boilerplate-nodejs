type Callback = (...args: unknown[]) => unknown

type Result<R> = [Record<string, unknown> | Error, null] | [null, R]

type MaybeAsyncResult<R> = R extends Promise<infer U>
	? Promise<Result<U>>
	: Result<R>

export const tryCatch = <TCallback extends Callback>(
	fn: TCallback,
): MaybeAsyncResult<ReturnType<TCallback>> => {
	try {
		const result = fn()

		if (result instanceof Promise) {
			return result
				// eslint-disable-next-line @typescript-eslint/no-unsafe-return
				.then((rx) => [null, rx])
				.catch((e) => [e, null]) as MaybeAsyncResult<ReturnType<TCallback>>
		}

		return [null, result] as MaybeAsyncResult<ReturnType<TCallback>>
	} catch (error) {
		return [error, null] as MaybeAsyncResult<ReturnType<TCallback>>
	}
}
