import { message } from 'antd'
import { wait } from './utils'
import { Button } from '@/components'

function App() {
  return (
    <Button
      onClick={() => wait(2000)}
      onError={error => message.error(error)}
      onSuccess={() => message.success('操作成功')}
      type="primary"
    >
      等待2秒
    </Button>
  )
}

export default App
