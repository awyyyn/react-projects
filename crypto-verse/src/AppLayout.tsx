import { Button, Layout } from 'antd'  
import { Navbar } from './components';  
import { useAppDispatch, useAppSelector } from './features/hooks';
import { toggleSidebar } from './features/sidebarSlice';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';   
import { useMatches } from 'react-router-dom';
 
const AppLayout = ({children}: {children: React.ReactNode}) => {
    const isMatch = useMatches();
    console.log(isMatch) 

    const { isCollapse } = useAppSelector(state => state.sidebar) 
    const dispatch = useAppDispatch();  
 

    return (
        <Layout  style={{minHeight: '600px', height: '100vh'}} hasSider> 
            <Layout.Sider
                trigger={null} 
                breakpoint='sm' 
                collapsible     
                className='sider'
                collapsed={isCollapse}
                theme='dark'
                collapsedWidth={40} 
                onCollapse={() => dispatch(toggleSidebar())}
            >
                <Navbar />
            </Layout.Sider>
            <Layout style={{height: '100%', overflow: 'scroll'}}>
                <Layout.Header style={{paddingLeft: 5, position: 'fixed', width: '100%', zIndex: 999}}> 
                    <Button
                        size='large'
                        type='text'
                        
                        style={{          
                            fontSize: '28px',
                            width: 64,
                            height: 64,
                            color: "white"
                        }} 
                        onClick={() => dispatch(toggleSidebar())} 
                    >
                        {!isCollapse ? 
                        <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
                    </Button>
                </Layout.Header>
                <Layout.Content className='content'>
                    {children} 
                </Layout.Content>
            </Layout> 
        </Layout>
    )
}

export default AppLayout 