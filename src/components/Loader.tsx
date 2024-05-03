const Loader = () => {
  console.log('Loader Rendered')
  return (
    <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <div className="lds-ring">
        <div>
          </div><div>
          </div><div>
          </div><div>
        </div>
      </div>
    </div>
  )
}

export default Loader