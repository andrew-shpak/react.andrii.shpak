import Uploady, {useUploady} from '@rpldy/uploady';
import React from 'react';
import {DndProvider, useDrop} from 'react-dnd';
import {HTML5Backend, NativeTypes} from "react-dnd-html5-backend";
import withPasteUpload from "@rpldy/upload-paste";
import UploadDropZone from "@rpldy/upload-drop-zone";
const PasteUploadDropZone = withPasteUpload(UploadDropZone)

function App() {
  return (
      <>

      <DndProvider backend={HTML5Backend}>
          <Uploady multiple destination={{url: 'my-server.com/upload'}}>
              <PasteUploadDropZone autoUpload={false} params={{test: 'paste'}}>
                  <DropZone />
              </PasteUploadDropZone>
          </Uploady>
      </DndProvider>
      </>
  );
}
const DropZone = () => {
    const [ files ,setFiles] = React.useState<File[]>([]);

    const {upload} = useUploady();

    const [{isDragging}, dropRef] = useDrop({
        accept: NativeTypes.FILE,
        collect: monitor => ({
            isDragging: monitor.isOver(),
        }),
        drop: (item: any ) => {
            upload(item.files)
        },
    })

    return (
        <div
            ref={dropRef}
            className={`h-44 w-full ${
                isDragging
                    ? 'border-dashed border-gray-300'
                    : 'border-solid border-blue-300'
            }  cursor-pointer appearance-none rounded-md border-2 bg-white p-4 `}
        >
            <p>Drop File(s) Here</p>
        </div>
    )
}

export default App;
