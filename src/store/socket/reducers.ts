import { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit'
import { Socket } from 'socket.io-client'
import { ISocketStore } from '.'

export const reducers: SliceCaseReducers<ISocketStore> = {
    setValuesSocket: (state: ISocketStore, action: PayloadAction<Socket | null>) => {
        state.socket = action.payload as any
    },
}
