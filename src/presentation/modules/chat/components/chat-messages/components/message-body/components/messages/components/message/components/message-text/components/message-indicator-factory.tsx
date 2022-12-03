import { EditOutlined } from '@ant-design/icons'
import DeleteOutlined from '@ant-design/icons/lib/icons/DeleteOutlined'

type MessageIndicatorFactoryProps = {
  edited: boolean
  deleted: boolean
}

export function MessageIndicatorFactory({ edited, deleted }: MessageIndicatorFactoryProps): JSX.Element {
  if (deleted) {
    return <DeleteOutlined />
  } else if (edited) {
    return <EditOutlined />
  } else {
    return <></>
  }
}
