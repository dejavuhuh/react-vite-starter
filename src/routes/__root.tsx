import { HomeOutlined } from '@ant-design/icons'
import { Link, Outlet, createRootRoute, useMatchRoute, useNavigate, useRouter, useRouterState } from '@tanstack/react-router'
import type { MenuProps } from 'antd'
import { App, Card, Layout, Menu, Rate, Typography } from 'antd'

const { Sider, Content } = Layout

const menus: MenuProps['items'] = [
  {
    key: '/',
    label: '首页',
  },
  {
    key: '/about',
    label: '关于',
  },
]

export const Route = createRootRoute({
  component: RootPage,
})

function RootPage() {
  const navigate = useNavigate()
  const { location } = useRouterState()

  const handleMenuClick: MenuProps['onClick'] = ({ keyPath }) => {
    const routePath = keyPath.join('')
    navigate({ to: routePath })
  }

  return (
    <Layout h="full">
      <Sider theme="light">
        <Menu
          defaultSelectedKeys={[location.pathname]}
          h="full"
          items={menus}
          onClick={handleMenuClick}
        />
      </Sider>
      <Content p="4">
        <Card bordered={false} h="full">
          <Outlet />
        </Card>
      </Content>
    </Layout>
  )
}
