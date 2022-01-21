import Header from 'ui/components/Header'
import Button from '../components/Button'

function HomePage() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <h1 className="my-24 tracking-tight text-4xl font-black">
          Welcome to APP 1!
        </h1>
        <Button />
      </div>
    </>
  )
}

export default HomePage
