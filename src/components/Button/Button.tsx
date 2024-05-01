import { Button as AntdButton } from 'antd'
import type { ButtonProps as AntdButtonProps } from 'antd'
import { useState } from 'react'
import type { MaybePromise } from '@/utils'

type PreservedAntdButtonProps = Omit<AntdButtonProps, 'onClick'>

export interface ButtonProps extends PreservedAntdButtonProps {
  onClick?: () => MaybePromise<void>
  onSuccess?: () => void
  onError?: (error: any) => void
}

export function Button({
  onClick,
  onSuccess,
  onError,
  ...props
}: ButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleClick = onClick && (async () => {
    setLoading(true)
    try {
      await onClick()
      onSuccess && onSuccess()
    }
    catch (error) {
      onError && onError(error)
    }
    finally {
      setLoading(false)
    }
  })

  return <AntdButton loading={loading} onClick={handleClick} {...props} />
}
