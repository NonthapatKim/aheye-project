import React from 'react'

function Aheyechildren() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12">Column 1</div>
        <div className="col-span-8">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 lg:col-span-6">Nested Column 1</div>
            <div className="col-span-12 lg:col-span-6">Nested Column 2</div>
          </div>
        </div>
        <div className="col-span-4">Column 3</div>
      </div>
    </div>
  )
}

export default Aheyechildren