import { ArrowLeftCircleIcon } from 'lucide-react'

export default function page() {
  return (
    <>
    <div className='flex items-center space-x-2 animate-pulse'>
      <ArrowLeftCircleIcon className='w-12 h-12'/>  
      <h4 className='md:text-2xl font-semibold'>Choose or Create a document</h4>
    </div>
    </>
  )
}
