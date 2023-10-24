import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center gap-4 bg-error bg-contain bg-center bg-no-repeat">
      <h1 className="text-4xl text-white">Oops!</h1>
      <p className="text-white">Page not found</p>
      <Link href="/" className="text-white underline">Go back home</Link>
    </div>
  )
}

export default NotFound
