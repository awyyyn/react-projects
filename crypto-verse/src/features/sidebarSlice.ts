import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store';


export interface AsideState {
    isCollapse: boolean
    activeKey: string
}

const initialState: AsideState = {
    isCollapse: false,
    activeKey: '0'
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: state => {
            state.isCollapse  = !state.isCollapse
        },
        setActiveKey: (state, { payload }) => {
            state.activeKey = payload
        }
    }
})

export const { toggleSidebar, setActiveKey } = sidebarSlice.actions

export const selectSideBar = (state: RootState) => state.sidebar.isCollapse

export default sidebarSlice.reducer