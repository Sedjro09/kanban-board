import { SideNav } from '@/components/sideNav'
import { TopBar } from '@/components/topBar'
import { ColumnList } from '@/components/columnList'
// import {modalAddColumn} from '@/components/modalAddColumn'

// import { useState } from 'react';

export default function Page() {

  // const [tableau, setTableau] = useState("Maison")

  return (
    <div className="flex h-screen" >
      <div className="w-1/5 h-full border-solid border-1 border-r-gray-300">
        <SideNav />
      </div>

      <div className="w-4/5 h-full flex flex-col px-2">
        <TopBar />

        <ColumnList />

        {/* <div className="flex h-full bg-gray-50">

        </div> */}

        {/* <div className="w-2/7 bg-pink-200 p-4">
          Sous-division 4
        </div> */}
        
      </div>

    </div>
  )
}