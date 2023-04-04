'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <code>{error.message}</code>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
